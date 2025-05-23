import React from 'react';

function Education() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-secondary text-center">
      <h2 className="text-3xl font-heading text-black dark:text-white mb-4">Education</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mx-auto w-11/12 max-w-4xl animate-fadeIn">
        <h3 className="text-2xl font-bold text-primary dark:text-yellow-400">The George Washington University</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300">Master of Science in Computer Science</p>
        <p className="text-md text-gray-600 dark:text-gray-300">GPA: 3.71/4.0</p>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Recipient of SEAS Merit Award</p>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Expected Graduation: May 2025</p>
      </div>
    </section>
  );
}

export default Education;
