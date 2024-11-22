import React from 'react'

import Projectcard from './Projectcard';

const Projects = () => {
  
    return (
        <div id="Projects" className="p-10 md:p-24 md:pt-8 text-white">
          <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
          <div className="py-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <Projectcard 
              githubLink="https://github.com/AnshikaaAgarwal/BhagavadGita-Sentiment-analysis"
              title="Sentiment Analysis of Bhagavad Gita Using BERT" 
              main="This project applies BERT (Bidirectional Encoder Representations from Transformers) to perform sentiment analysis on the Bhagavad Gita. It classifies the sentiment of its verses into positive, negative, or neutral categories by fine-tuning BERT on the text. The project explores how modern NLP techniques can reveal emotional tones in philosophical literature." 
            />
            <Projectcard
              githubLink="https://github.com/AnshikaaAgarwal/Image_Compression_Using_Clustering"
              title="Image Compression Model Using Clustering" 
              main="This project uses K-means clustering to compress images, achieving a 65% compression ratio while maintaining compatibility with various image formats. The approach clusters pixel values to reduce image size without significant quality loss. This technique is effective for reducing storage and improving transmission efficiency, making it suitable for real-time applications." 
            />
            <Projectcard
              githubLink="https://github.com/AnshikaaAgarwal/ArzooFoundation_"
              title="Arzoo Foundation : Har Jeevan Amulya" 
              main="Arzoo Foundation is a website focused on raising awareness about human trafficking and offering a donation gateway to support survivors. Built with HTML, CSS, and JavaScript, it features impactful awareness campaigns, a secure donation platform, educational resources, and a responsive design for accessibility across all devices.The site empowers users to take action against human trafficking while providing essential resources for survivors." 
            />
          </div>
        </div>
      );
  
}

export default Projects