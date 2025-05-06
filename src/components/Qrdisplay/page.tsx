"use client";
import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QRDisplay = ({ value }: { value: string }) => {
  return (
    <div className="text-center mt-6">
      <h2 className="text-white mb-2">Scan this QR to view photos</h2>
      <QRCodeSVG value={value} size={180} bgColor="#000" fgColor="#fff" />
    </div>
  );
};

export default QRDisplay;
