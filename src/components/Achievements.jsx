import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'GWU Merit Award Recipient',
    description: 'Received merit-based financial award for academic excellence during Master’s in Computer Science at George Washington University.',
  },
  {
    title: 'Rookie Rock Star Award',
    description: 'Awarded at Amdocs India for outstanding performance in project delivery and testing efficiency (March 2021).',
  },
  {
    title: 'Star of the Month Award',
    description: 'Recognized for consistent high performance and collaboration across teams at Amdocs.',
  },
  {
    title: 'Barclays Tech Innovation Recognition',
    description: 'Selected among 240 students in the first year of undergrad to represent in the Barclays Innovation Program.',
  },
  {
    title: 'GWU Merit Award Recipient',
    description: 'Received merit-based financial award for academic excellence during Master’s in Computer Science at George Washington University.',
  },
  
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-gray-900 text-white py-6 px-3 md:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-2xl font-semibold text-yellow-400 mb-3"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Achievements
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-3 rounded-lg border border-yellow-500 text-left text-xs"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-yellow-300 font-semibold mb-0.5">{item.title}</h3>
              <p className="text-gray-300 leading-snug">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
