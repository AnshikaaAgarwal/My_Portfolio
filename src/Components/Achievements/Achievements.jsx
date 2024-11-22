import React from 'react';
import Achievementcard from './Achievementcard';
import adobelog from "../../assets/adobe.jpg";
import gslog from "../../assets/GoldmanSachs.jpg";
import ghcs from "../../assets/GHC.jpg";

const Achievements = () => {
  return (
    <div id="Achievements" className="p-10 md:p-24 md:pt-8 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Achievements</h1>
      <div className="py-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <Achievementcard 
          image={adobelog} 
          title="Adobe Career Academy" 
          main="Selected among the top 200 applicants for this exclusive mentorship program focused on creative problem solving, professional development, and enhancing technical and leadership skills under the guidance of industry experts." 
        />
        <Achievementcard 
          image={gslog} 
          title="Goldman Sachs Women Possibilities Summit" 
          main="Selected among the top 50 women across diverse backgrounds including finance and engineering to attend this prestigious summit organised by Goldman Sachs." 
        />
        <Achievementcard 
          image={ghcs} 
          title="GHC Scholar'24" 
          main="Awarded the prestigious scholarship to attend the world's largest gathering of women technologists, recognizing excellence in technology and leadership." 
        />
      </div>
    </div>
  );
};

export default Achievements;

