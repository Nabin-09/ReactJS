import React, { useState, useCallback, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numall, setNumAll] = useState(false);
  const [charall, setCharAll] = useState(false);
  const [password, setPassword] = useState("");

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numall) str += "0123456789";
    if (charall) str += "@_+=&*#";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numall, charall]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Password Generator</h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-3 py-2 text-lg rounded-l-md bg-gray-700 text-white outline-none"
          />
          <button
            onClick={() => navigator.clipboard.writeText(password)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password Length: {length}</label>
          <input
            type="range"
            min={4}
            max={20}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mb-4 flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numall}
              onChange={() => setNumAll((prev) => !prev)}
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charall}
              onChange={() => setCharAll((prev) => !prev)}
            />
            Include Special Characters
          </label>
        </div>

        <button
          onClick={passGenerator}
          className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-md text-lg font-semibold transition"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
