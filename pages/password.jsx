import React, { useState } from "react";
import { ClipboardIcon } from '@heroicons/react/24/outline'; // Make sure this path matches your package version

const Password = () => {
  const [length, setLength] = useState(12); // Default length increased for practicality
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeChar, setIncludeChar] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()-_+=<>?/[]{}|";

    let charset = lowercase + uppercase;
    if (includeNumber) charset += numbers;
    if (includeChar) charset += specialChars;

    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }

    setPassword(result);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 md:p-12 space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 animate-pulse">
          Password Generator
        </h1>
        <div className="flex flex-col items-center space-y-4">
          <input
            className="py-3 px-4 border border-gray-300 rounded-md text-xl w-full md:w-[40vw] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            value={password}
            readOnly
            placeholder="Auto Generate Code"
          />
          <button
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={copyToClipboard}
          >
            <ClipboardIcon className="w-6 h-6 mr-2" />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="1"
              max="20"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-3/4 md:w-1/2"
            />
            <span className="text-xl text-gray-700">Length: {length}</span>
          </div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={includeNumber}
                onChange={() => setIncludeNumber(!includeNumber)}
                className="form-checkbox h-5 w-5 text-purple-600"
              />
              <span className="text-lg">Numbers</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={includeChar}
                onChange={() => setIncludeChar(!includeChar)}
                className="form-checkbox h-5 w-5 text-purple-600"
              />
              <span className="text-lg">Special Characters</span>
            </label>
          </div>
        </div>
        <button
          className="w-full py-2 bg-green-600 text-white rounded-md shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default Password;
