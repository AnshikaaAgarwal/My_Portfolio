import React from 'react';
import { FaPython, FaJsSquare, FaHtml5, FaReact, FaJava, FaFigma, FaCss3 } from "react-icons/fa";
import { SiBootstrap, SiPytorch, SiScikitlearn, SiOpencv, SiMongodb } from "react-icons/si";
import drdologo from "../../assets/drdo-logo-.png";
import iglogo from "../../assets/igdtuw.jpg";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold"> Skills and Experience </h1>

      <div className="flex flex-wrap items-start justify-between">
        {/* Left Section: Skills */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaHtml5 color="#E34F26" size={50} />
            </span>
            <span className="text-white font-semibold mt-2">HTML</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaCss3 color="#1572b6" size={50} />
            </span>
            <span className="text-white font-semibold mt-2">CSS</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiBootstrap color="#563d7c" size={50} />
            </span>
            <span className="text-white font-semibold mt-2">Bootstrap</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaJsSquare color="#F7DF1E" size={50} />
            </span>
            <span className="text-white font-semibold mt-2">JavaScript</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaReact color="#61DAFB" size={50} />
            </span>
            <span className="text-white font-semibold mt-2">React</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaPython color="#306998" size={50} />
            </span>
            <span className="text-white font-semibold mt-2">Python</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiMongodb color="#47A248" size={50} />
            </span>
            <span className="text-white font-semibold mt-2">MongoDB</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaFigma color="#E34F26" size={50} />
            </span>
            <span className="text-white font-semibold mt-2">Figma</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaJava color="#E34F26" size={50} />
            </span>
            <span className="text-white font-semibold mt-2">Java</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiPytorch color="#EE4C2C" size={50} />
            </span>
            <span className="text-white font-semibold mt-2">Pytorch</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiScikitlearn color="#F7931E" size={50} />
            </span>
            <span className="text-white font-semibold mt-2">Scikit-learn</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiOpencv color="#5C5C5C" size={50} />
            </span>
            <span className="text-white font-semibold mt-2">OpenCV</span>
          </div>
        </div>

        {/* Right Section: Experience */}
        <div className="flex flex-col pt-10 md:w-2/5">
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img src={drdologo} alt="DRDO Logo" className="h-29 w-24 object-contain" />
            <div className="text-white">
              <h2 className="leading-tight font-bold text-xl">Research Intern, DRDO</h2>
              <p className="text-sm leading-tight font-thin">June 2024 - July 2024</p>
              <ul className="text-sm p-2">
                <li>- Worked on an Image Compression Model using Clustering Techniques</li>
                <li>- Achieved an average compression rate of 65% in image size based on RGB values.</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img src={iglogo} alt="IG Logo" className="h-29 w-24 object-contain" />
            <div className="text-white">
              <h2 className="leading-tight font-bold text-xl">Summer Intern, IGDTUW</h2>
              <p className="text-sm leading-tight font-thin">May 2023 - July 2023</p>
              <ul className="text-sm p-2">
                <li>- Built a Brain Tumor Detection model using CNN and VGG-16.</li>
                <li>- Conducted a comparative study between the results of both models.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

