/* eslint-disable no-undef */
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";
import Root from "./pages/Root";
import Home from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Register } from "./pages/Register";
import { useEffect } from "react";
import { VideoRoom } from "./pages/Chat/VideoRoom";
import "preline/preline";
import RootDash from "./pages/Dashbard/RootDash";
import RootChat from "./pages/Chat/RootChat";
import LoginChat from "./pages/Chat/LoginChat";
import MainDash from "./pages/Dashbard/MainDash";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <div className="font-barcon">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        rtl={false}
        draggable
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/newDashbard" element={RootDash}>
          <Route index element={<MainDash />} />
        </Route>
        <Route path="/videoCall" element={RootChat}>
          <Route index element={<LoginChat />} />
          <Route path=":roomName" element={<VideoRoom />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;