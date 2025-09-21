import React, { useState, useEffect } from "react";
import brochureImage from "../assets/Neurahack_brochure.jpg";

const BrochurePopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  const closeBrochure = () => setShow(false);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="relative rounded-lg shadow-lg max-w-3xl w-full bg-opacity-70">
        <button
          onClick={closeBrochure}
          className="absolute top-2 right-2 font-bold text-2xl text-red-500"
        >
          ✖
        </button>
        <img
          src={brochureImage}
          alt="Brochure"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default BrochurePopup;
