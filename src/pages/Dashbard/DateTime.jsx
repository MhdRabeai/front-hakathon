// import * as React from 'react';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

export const DateTime = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [candidateId, setCandidateId] = useState("");

  const handleDateChange = (newValue) => {
    setSelectedDateTime(newValue);
  };

  const saveDateTimeToBackend = async () => {
    if (!selectedDateTime || !candidateId) {
      alert("Please select a date and time and provide a valid candidate ID.");
      return;
    }

    const formattedDate = dayjs(selectedDateTime).format("YYYY-MM-DD");
    const formattedTime = dayjs(selectedDateTime).format("HH:mm");

    const dataToSave = {
      id: candidateId,
      allDate: {
        date: formattedDate,
        time: formattedTime,
      },
    };

    try {
      const response = await fetch("http://localhost:4000/api/firstAccept", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        alert("Interview scheduled successfully and email sent!");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        alert("Failed to schedule interview.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while scheduling the interview.");
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker
            label="Pick date and time"
            value={selectedDateTime}
            onChange={handleDateChange}
          />
        </DemoContainer>
        <input
          type="text"
          placeholder="Enter Candidate ID"
          value={candidateId}
          onChange={(e) => setCandidateId(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button onClick={saveDateTimeToBackend} style={{ padding: "10px", fontSize: "16px" }}>
          Schedule Interview
        </button>
      </div>
    </LocalizationProvider>
  );
}
