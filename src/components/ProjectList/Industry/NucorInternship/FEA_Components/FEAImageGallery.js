import React from 'react';

const FEAImageGallery = ({ componentName, imageUrls, imageLabels }) => {
  return (
    <div className="flex flex-col bg-white text-black p-6 rounded-lg">
      <h1 className="text-2xl font-bold my-8 text-center">
        {componentName}
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3">
            <img
              src={imageUrl}
              alt={`FEA ${index}`}
              className="w-full h-auto rounded-lg border-2 border-black"
            />
            <p className="mt-2 text-center font-semibold">{imageLabels[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FEAImageGallery;










