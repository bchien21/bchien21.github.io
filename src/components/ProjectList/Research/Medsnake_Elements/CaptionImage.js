import React from 'react';

const CaptionImage = ({ imageUrl, text, caption }) => {
  return (
    <div className="border border-cyan-400 p-4">
      <div className="flex items-center pb-4">
        <img src={imageUrl} alt="image" className="mr-4 w-1/2 h-auto rounded border border-cyan-400" />
        <div className="border-l border-cyan-400 h-full"></div>
        <p className="ml-4 text-white">
        <span className="font-bold text-cyan-400" > {caption}</span><br />{text}</p>
      </div>
    </div>
  );
};

export default CaptionImage;