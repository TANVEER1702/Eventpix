"use client";
import React from "react";
import { InputField } from "../inputField";

const EventForm = ({ eventData, setEventData }: { eventData: any, setEventData: any }) => {
  return (
    <div className="space-y-4">
      <InputField
        name="name"
        label="Event Name"
        placeholder="Event Name"
        type="text"
        value={eventData.name}
        onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
      />
      <InputField
        label="Event Date"
        placeholder="Event Date"
        type="date"
        value={eventData.date}
        onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
        name="date"
      />
      <InputField
        label="Location"
        placeholder="Location"
        type="text"
        value={eventData.location}
        onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
        name="location"
      />

      
    </div>
  );
};

export default EventForm;
