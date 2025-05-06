/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

const PhotoUploader = ({ photos, setPhotos }: any) => {
  const handleUpload = (e: any) => {
    const files = Array.from(e.target.files);
    setPhotos([...photos, ...files]);
  };

  return (
    <div className="border-2 border-dashed border-gray-600 p-6 rounded-lg text-center">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleUpload}
        className="hidden"
        id="fileInput"
      />
      <label htmlFor="fileInput" className="cursor-pointer text-gray-300">
        Drag and drop or <span className="underline text-blue-400">browse</span> files
      </label>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {photos.map((file: any, index: number) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={URL.createObjectURL(file)}
            alt="preview"
            className="w-full h-24 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoUploader;
