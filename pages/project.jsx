import React, { useState } from "react";

const Project = () => {
  const [color, setColor] = useState("#FFFFFF"); // Default color is white

  return (
    <>
      <div
        className="flex justify-center items-center h-screen"
        style={{backgroundColor: color}}
        
      >
        <div className="flex gap-6 mb-10 absolute bottom-0 w-auto p-10 rounded-lg justify-center bg-slate-500 h-20 text-center items-center">
          <button
           onClick={() => setColor("#1D4ED8")} // Blue
            className="text-xl rounded font-serif p-2 items-center justify-center bg-blue-700 text-white"
            type="button"
          >
            Blue
          </button>
          <button
           onClick={() => setColor("#F59E0B")} // Yellow
            className="text-xl rounded font-serif p-2 items-center justify-center bg-yellow-700 text-white"
            type="button"
          >
            Yellow
          </button>
          <button
           onClick={() => setColor("#000000")} // Black
            className="text-xl rounded font-serif p-2 items-center justify-center bg-black text-white"
            type="button"
          >
            Black
          </button>
          <button
           onClick={() => setColor("#10B981")} // Green
            className="text-xl rounded font-serif p-2 items-center justify-center bg-green-700 text-white"
            type="button"
          >
            Green
          </button>
          <button
           onClick={() => setColor("#EC4899")} // Pink
            className="text-xl rounded font-serif p-2 items-center justify-center bg-pink-700 text-white"
            type="button"
          >
            Pink
          </button>
          <button
           onClick={() => setColor("#8B5CF6")} // Purple
            className="text-xl rounded font-serif p-2 items-center justify-center bg-purple-700 text-white"
            type="button"
          >
            Purple
          </button>
          <button
           onClick={() => setColor("#EF4444")} // Red
            className="text-xl rounded font-serif p-2 items-center justify-center bg-red-700 text-white"
            type="button"
          >
            Red
          </button>
          <button
           onClick={() => setColor("#F97316")} // Orange
            className="text-xl rounded font-serif p-2 items-center justify-center bg-orange-700 text-white"
            type="button"
          >
            Orange
          </button>
          <button
           onClick={() => setColor("#FFFFFF")} // White
            className="text-xl rounded font-serif p-2 items-center justify-center bg-white text-black"
            type="button"
          >
            White
          </button>
        </div>
      </div>
    </>
  );
};

export default Project;
