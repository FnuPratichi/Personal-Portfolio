import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-6 overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-10 animate-pulse"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl text-center px-4 pt-24">
        {/* Static greeting */}
        <h1 className="text-yellow-400 text-5xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-lg leading-tight">
          Hey there!{' '}
          <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
            I'm Pratichi
          </span>
        </h1>

        {/* Typewriter line */}
        <h2 className="mt-4 text-yellow-200 text-2xl sm:text-3xl md:text-4xl font-semibold drop-shadow-md">
          <Typewriter
            words={['Software Engineer', 'CS Grad Student', 'Data Enthusiast']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        {/* Subtext */}
        <p className="mt-8 text-gray-300 text-xl sm:text-2xl drop-shadow-md max-w-3xl mx-auto">
          I enjoy building intelligent, scalable solutions that turn complexity into clarity.
        </p>

        {/* Social icons */}
        <div className="mt-12 flex justify-center space-x-8 sm:space-x-12 text-yellow-400 text-3xl sm:text-4xl">
          <a href="https://github.com/FnuPratichi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="relative hover:after:scale-125 after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-yellow-400 after:blur-sm after:transition-transform"
          >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pratichi11/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="relative hover:after:scale-125 after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-yellow-400 after:blur-sm after:transition-transform"
          >
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/prat_noob/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"
            className="relative hover:after:scale-125 after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-yellow-400 after:blur-sm after:transition-transform"
          >
            <FaCode />
          </a>
        </div>

        {/* Profile picture */}
        <div className="mt-12 flex flex-col items-center w-full">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 pointer-events-none rounded-full"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-10 animate-pulse pointer-events-none rounded-full"></div>
            <img
              src={`${process.env.PUBLIC_URL}/profile.png`}
              alt="Portrait of Fnu Pratichi"
              className="relative w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Email Call to Action */}
          <a
            href="mailto:pratichi.lnu@gwu.edu"
            className="mt-4 text-lg text-yellow-300 font-semibold hover:underline hover:text-yellow-400 transition"
          >
            📩 Send me an email at pratichi.lnu@gwu.edu
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
