import React, { useEffect, useRef } from 'react';
import './hero.css';
import vedio from '../assets/hero.mp4' 

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Ensure video plays automatically
    video.play().catch(error => {
      console.error('Video playback failed:', error);
      // Fallback: Ensure the poster image is visible if video fails
      video.style.display = 'none';
      const heroSection = video.parentElement;
      heroSection.style.backgroundImage = `url(${video.poster})`;
      heroSection.style.backgroundSize = 'cover';
      heroSection.style.backgroundPosition = 'center';
    });

    // Handle window resize to maintain video aspect ratio
    const adjustVideoSize = () => {
      const windowRatio = window.innerWidth / window.innerHeight;
      const videoRatio = 16 / 9; // Assuming standard HD video ratio
      if (windowRatio > videoRatio) {
        video.style.width = '100%';
        video.style.height = 'auto';
      } else {
        video.style.width = 'auto';
        video.style.height = '100%';
      }
    };

    window.addEventListener('resize', adjustVideoSize);
    adjustVideoSize(); // Initial adjustment

    return () => {
      window.removeEventListener('resize', adjustVideoSize);
    };
  }, []);

  return (
    <section className="hero-section">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        poster="https://images.pexels.com/photos/35665/wolf-predator-animal-grey-wolf.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <source src={vedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Charleson® Creative</h1>
        <p class="hero-title"> Global brands often miss the mark in Africa</p>

      </div>
      
    </section>
  );
};

export default Hero;