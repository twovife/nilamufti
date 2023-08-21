import React, { useState } from "react";

interface ButtonCopyProps {
  dataValue: string;
}

const ButtonCopy: React.FC<ButtonCopyProps> = ({ dataValue }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    // Create a temporary textarea element to copy the text
    const textarea = document.createElement("textarea");
    textarea.value = dataValue;

    // Append the textarea element to the DOM
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Perform the copy operation
    document.execCommand("copy");

    // Remove the textarea element
    document.body.removeChild(textarea);

    // Set the copied status to true and update the button text
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div>
      <button
        className={`px-2.5 py-1 rounded-lg text-white ring-emerald-600 ring mt-3 ${
          copied ? `bg-emerald-800` : `bg-main`
        }`}
        onClick={handleCopyClick}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

export default ButtonCopy;
