import React, { useState } from 'react';
import original from "./NSIN_CAD_Assets/nucor_system.png";
import full_assem from "./NSIN_CAD_Assets/full_assem_labeled.png";

const BeforeAfterGraphic = () => {
  const [handlePosition, setHandlePosition] = useState('50%');

  const handleDrag = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const handleX = e.clientX - containerRect.left;

    const newPosition = Math.max(0, Math.min(handleX, containerRect.width));
    const newPositionPercentage = (newPosition / containerRect.width) * 100 + '%';

    setHandlePosition(newPositionPercentage);

    const afterImage = e.currentTarget.querySelector('.after-image');
    afterImage.style.opacity = newPosition / containerRect.width;
  };

  return (
    <div className="relative mt-8 mb-4">
      <div className="w-full h-[66.6666%] relative" onMouseMove={handleDrag}>
        <img
          src={original}
          alt="Before"
          className="rounded-lg w-full h-full object-cover border-4 border-black"
        />
        <img
          src={full_assem}
          alt="After"
          className="rounded-lg absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 after-image border-4 border-black"
        />
      </div>
    </div>
  );
};

export default BeforeAfterGraphic;
