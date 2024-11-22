import React from 'react';

const Achievementcard = ({ image, title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-gray-900 shadow-2xl shadow-slate-900 rounded-2xl">
      <img src={image} alt={title} className="p-4 rounded-lg" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
    </div>
  );
};

export default Achievementcard;
