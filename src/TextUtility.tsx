import React, { useState } from "react";
import Buttons from "./Buttons";

const TextUtility: React.FC = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const countWords = (text: string) => {
    return text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;
  };

  const countCharacters = (text: string) => {
    return text.length;
  };

  const toCapitalize = () => {
    setText(
      text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Text copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div className="p-4 max-w-full">
      <textarea
        className="w-full p-2 border border-gray-300 rounded h-48 resize-none overflow-hidden overflow-y-auto shadow-md focus:outline-0 focus:outline-offset-0 focus:outline-gray-300 scrollbar-hide"
        value={text}
        onChange={handleTextChange}
        placeholder="Start Typing or Paste to Begin"
      ></textarea>
      <div className="mt-2 text-gray-600 flex items-center gap-5 mb-5">
        <p>Words: {countWords(text)}</p>
        <p>Characters: {countCharacters(text)}</p>
      </div>
      <div className="mt-3 flex gap-2">
        <Buttons
          className=" bg-blue-500"
          title="Capitilize"
          onClick={toCapitalize}
        />
        <Buttons
          className="bg-green-500"
          title="Lowercase"
          onClick={toLowerCase}
        />
        <Buttons
          className="bg-red-500"
          title="Uppercase"
          onClick={toUpperCase}
        />
        <Buttons
          className="bg-gray-500"
          title="Copy"
          onClick={copyToClipboard}
        />
      </div>
    </div>
  );
};

export default TextUtility;
