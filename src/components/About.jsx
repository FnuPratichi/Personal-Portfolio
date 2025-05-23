import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <>
      {/* Intro Section: Full screen height */}
      <section
        id="about"
        className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-6 overflow-hidden"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-10 animate-pulse"></div>

        {/* Text content */}
        <div className="relative z-10 max-w-4xl text-center px-4 pt-24">
          {/* Added pt-24 for padding-top */}

          <h1 className="text-yellow-400 text-6xl md:text-8xl font-extrabold drop-shadow-lg leading-tight">
            Hello,{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
              I'm Pratichi{' '}
            </span>
            <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent whitespace-nowrap">
              <Typewriter
                words={['Software Engineer','CS Grad Student','Data Enthusiast']}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p className="mt-8 text-gray-300 text-2xl md:text-3xl drop-shadow-md max-w-3xl mx-auto">
            I enjoy building intelligent, scalable solutions that turn complexity into clarity.
          </p>

          <div className="mt-12 flex justify-center space-x-12 text-yellow-400 text-4xl">
            <a
              href="https://github.com/FnuPratichi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="relative hover:after:scale-125 after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-yellow-400 after:blur-sm after:transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pratichi11/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="relative hover:after:scale-125 after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-yellow-400 after:blur-sm after:transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/prat_noob/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="relative hover:after:scale-125 after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-yellow-400 after:blur-sm after:transition-transform"
            >
              <FaCode />
            </a>
          </div>

          {/* Profile Picture Section with same background, below social icons */}
          <div className="mt-8 flex justify-center relative w-full">
            <div className="relative flex items-center justify-center w-80 h-80 rounded-full overflow-hidden border-5 border-yellow-400 shadow-xl">
              {/* Background overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 pointer-events-none rounded-full"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-10 animate-pulse pointer-events-none rounded-full"></div>

              {/* Actual profile image */}
              <img
                src="profile.png"
                alt="Portrait of Fnu Pratichi"
                className="relative w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
