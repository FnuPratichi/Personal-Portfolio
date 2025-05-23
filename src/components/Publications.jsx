import React from 'react';

const publications = [
  {
    title: 'Credit Card Fraud Detection Using Machine Learning',
    conference: 'International Journal of Advanced Scientific Research & Engineering Trends (IJASRET), 2020',
    link: 'https://www.ijasret.com/VolumeArticles/FullTextPDF/546_9.CREDIT_CARD_FRAUD_DETECTION_USING_MACHINE__LEARNING.pdf',
  },
];

const Publications = () => {
  return (
    <section
      id="publications"
      className="bg-yellow-50 dark:bg-black text-black dark:text-yellow-400 py-20 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Papers & Publications</h2>
        <ul className="space-y-8">
          {publications.map((pub, index) => (
            <li
              key={index}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{pub.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">{pub.conference}</p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-yellow-600 dark:text-yellow-400 hover:underline font-medium text-sm"
              >
                View Publication
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Publications;
