import { useEffect, useRef, useState } from "react";
import {
  FaVideo,
  FaMicrophone,
  FaVideoSlash,
  FaMicrophoneSlash,
} from "react-icons/fa";
import AgoraRTC from "agora-rtc-sdk-ng";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import { useUserInfo } from "../../Providers/UserContext";
// import Socket from "../../Providers/useSocket";

export const VideoRoom = () => {
  const { user } = useUserInfo();
  const { roomName } = useParams();
  const userName = user ? "Host" : "Guest";
  const [isSending, setIsSending] = useState(false);
  const client = useRef(AgoraRTC.createClient({ mode: "rtc", codec: "vp8" }));
  const localVideoRef = useRef(null);
  const socket = useRef(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [localVideoTrack, setLocalVideoTrack] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  useEffect(() => {
    socket.current = io("http://localhost:4001", {
      transports: ["websocket"],
      reconnectionAttempts: 3,
      timeout: 5000,
    });

    const initAgora = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/generate-token?channelName=${roomName}`
        );
        const { token, uid } = await response.json();

        await client.current.join(
          "c06e1aedb32c4f39871657647da1c157",
          roomName,
          token,
          uid
        );

        const [audioTrack, videoTrack] =
          await AgoraRTC.createMicrophoneAndCameraTracks(
            { audioBitrate: 320 },
            { videoBitrate: 2000 }
          );

        videoTrack.play(localVideoRef.current);

        setLocalAudioTrack(audioTrack);
        setLocalVideoTrack(videoTrack);

        await client.current.publish([audioTrack, videoTrack]);

        console.log("Agora: Tracks published successfully.");
      } catch (error) {
        console.error("Error initializing Agora:", error.message);
      }
      socket.current.on("connect", () => {
        console.log("Socket connected:", socket.current.id);
      });

      socket.current.on("disconnect", () => {
        console.log("Socket disconnected");
      });
      socket.current.emit("join-room", { roomId: roomName, userName });

      socket.current.on("user-joined", ({ userName }) => {
        console.log(`${userName} joined the room.`);
      });

      socket.current.on("receive-message", ({ userName, message }) => {
        setMessages((prev) => {
          if (
            prev.some(
              (msg) => msg.message === message && msg.userName === userName
            )
          ) {
            return prev;
          }
          return [...prev, { userName, message }];
        });
      });

      client.current.on("user-published", async (user, mediaType) => {
        await client.current.subscribe(user, mediaType);
        if (mediaType === "video") {
          const remoteVideo = document.createElement("video");
          remoteVideo.autoplay = true;
          remoteVideo.playsInline = true;
          remoteVideo.style.width = "100%";
          remoteVideo.dataset.uid = user.uid;
          document.getElementById("remote-videos").append(remoteVideo);
          user.videoTrack?.play(remoteVideo);
        }
        if (mediaType === "audio") {
          user.audioTrack?.play();
        }
      });

      client.current.on("user-unpublished", (user) => {
        const videoElement = document.querySelector(
          `video[data-uid="${user.uid}"]`
        );
        if (videoElement) {
          videoElement.remove();
        }
      });
    };

    initAgora();

    return () => {
      if (localAudioTrack) localAudioTrack.close();
      if (localVideoTrack) localVideoTrack.close();
      if (client.current) client.current.leave();
      if (socket.current) socket.current.disconnect();
    };
  }, [roomName]);

  const handleSendMessage = () => {
    console.log("isSending:", isSending);
    if (isSending || !message.trim()) return;

    setIsSending(true);
    console.log("Sending message:", message);
    socket.current.emit("send-message", {
      roomId: roomName,
      message,
      userName,
    });
    console.log("Message sent:", message);
    setMessages((prev) => {
      console.log("Adding message to state:", { userName, message });
      return [...prev, { userName, message }];
    });
    setMessage("");
    setTimeout(() => {
      setIsSending(false);
    }, 500);
  };

  const toggleAudio = async () => {
    if (isMuted) {
      await localAudioTrack.setMuted(false);
    } else {
      await localAudioTrack.setMuted(true);
    }
    setIsMuted(!isMuted);
  };

  const toggleVideo = async () => {
    if (isVideoOff) {
      await localVideoTrack.setEnabled(true);
    } else {
      await localVideoTrack.setEnabled(false);
    }
    setIsVideoOff(!isVideoOff);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 space-y-6">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-shrink-0 w-full md:w-2/5">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              className="w-full h-full object-cover rounded-lg border-4 border-indigo-600 shadow-lg"
            ></video>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={toggleAudio}
                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
              </button>
              <button
                onClick={toggleVideo}
                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                {isVideoOff ? <FaVideoSlash /> : <FaVideo />}
              </button>
            </div>
          </div>
          <div
            id="remote-videos"
            className="flex flex-wrap gap-4 justify-center w-full md:w-3/5"
          ></div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold text-center text-gray-700">
            Chat
          </h3>
          <div
            style={{ height: "150px", overflowY: "auto" }}
            className="bg-white p-2 rounded-lg shadow-sm mb-4"
          >
            {messages.map((msg, idx) => (
              <p key={idx} className="text-sm text-gray-700">
                <strong>{msg.userName}:</strong> {msg.message}
              </p>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="w-full p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
