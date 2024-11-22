import React from 'react'

const Projectcard = ({ title, main,githubLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-gray-900 shadow-2xl shadow-slate-900 rounded-2xl">
      
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>

      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-4 px-6 py-2  bg-[#465697] hover:bg-blue-700 text-white font-semibold rounded-md text-center"
      >
        View on GitHub
        </a>

    </div>
  )
}

export default Projectcard