import React from 'react';

const TechnicalDrawing = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 border-2 border-black bg-white rounded-lg shadow-md my-8">
      <h2 className="text-lg text-black font-semibold mb-2">{title}</h2>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-contain border-2 border-black rounded-lg"
      />
      <p className="mt-2 text-black text-center">{description}</p>
    </div>
  );
};

export default TechnicalDrawing;

