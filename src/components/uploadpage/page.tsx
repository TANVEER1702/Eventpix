"use client";
import React, { useState } from "react";
import EventForm from "../EventsForm/page";
import PhotoUploader from "../photouploader/page";
import QRDisplay from "../Qrdisplay/page";


const UploadPage = () => {
  const [eventData, setEventData] = useState({ name: "", date: "", location: "" });
  const [photos, setPhotos] = useState([]);
  const [qrValue, setQrValue] = useState("");

  const handleSubmit = () => {
    // Simulate QR with event name as identifier
    const id = `${eventData.name}-${Date.now()}`;
    setQrValue(`https://yourwebsite.com/scan/${id}`);
    // Here you would upload to backend / cloud
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 text-white">
      <h1 className="text-2xl font-bold">Upload Event Photos</h1>
      <EventForm eventData={eventData} setEventData={setEventData} />
      <PhotoUploader photos={photos} setPhotos={setPhotos} />
      <button
        onClick={handleSubmit}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2 rounded-md hover:opacity-90"
      >
        Upload & Generate QR
      </button>
      {qrValue && <QRDisplay value={qrValue} />}
    </div>
  );
};

export default UploadPage;
