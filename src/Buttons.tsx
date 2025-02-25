import React from "react";

interface TextButton {
  title: string;
  onClick: () => void;
  className: string;
}

const Buttons: React.FC<TextButton> = ({ className, title, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded text-white ${className}`}
      >
        {title}
      </button>
    </>
  );
};

export default Buttons;
