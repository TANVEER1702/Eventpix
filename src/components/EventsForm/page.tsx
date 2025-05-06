"use client";
import React from "react";
import { InputField } from "../inputField";
interface EventData {
  name: string;
  date: string;
  location: string;
}

const EventForm = ({ eventData, setEventData }: { eventData: EventData; setEventData: React.Dispatch<React.SetStateAction<EventData>> }) => {
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
