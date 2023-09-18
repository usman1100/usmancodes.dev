"use client";

import { useState } from "react";

export const Terminal = () => {
  const [value, setValue] = useState<string>("echo Hello");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  const Stdin = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setCommandHistory([...commandHistory, value]);
      setValue("");
    };

    return (
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus={true}
          className="ml-2 w-fit flex-1 border-none bg-transparent outline-none"
        />
      </form>
    );
  };

  return (
    <div className="h-[50vh] w-full bg-black p-5 text-white">
      {commandHistory.map((command) => (
        <div className="flex items-center text-green-400" key={command}>
          {"-"}
          <p className="ml-2">{command}</p>
        </div>
      ))}
      <div className="flex items-center">
        {">"} <Stdin />
      </div>
    </div>
  );
};
