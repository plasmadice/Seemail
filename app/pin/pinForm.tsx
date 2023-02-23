"use client";
import { useState } from "react";

export default function PinForm() {
  const [text, setText] = useState("");

  async function sendPin(e: any) {
    e.preventDefault();
    console.log(text);
    const url = `${process.env.NEXT_PUBLIC_URL}/api/enterpin?pin=${text}${
      process.env.NODE_ENV.includes("development") ? "&isDev=true" : ""
    }`;
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    return data;
  }

  function handleInputChange(e: any) {
    setText(e.target.value);
  }
  return (
    <form onSubmit={sendPin}>
      <div className="flex items-center border-b border-rhino py-2">
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder='"123456"'
          className="appearance-none bg-blue-haze border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline"
        />

        <button
          onClick={sendPin}
          className="flex-shrink-0 bg-windows-blue hover:bg-firefly text-sm text-white py-1 px-2 rounded"
          type="button"
        >
          Submit
        </button>
        <button
          onClick={() => setText("")}
          className="flex-shrink-0 bg-persian-red hover:bg-firefly text-sm text-white py-1 px-2 rounded"
          type="button"
        >
          Clear
        </button>
      </div>
    </form>
  );
}