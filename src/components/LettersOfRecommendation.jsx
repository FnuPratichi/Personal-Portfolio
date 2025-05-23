import React, { useState } from 'react';

const letters = [
  {
    id: 1,
    title: 'Letter of Recommendation - Abdelghani Bellaachia',
    content: `
The George Washington University
Department of Computer Science
E-mail: bell@gwu.edu
January 30, 2025

Dear Sir/Madame:
This is a letter of recommendation for Miss Fnu Pratichi. I have known Miss Fnu for about one year. She took my Data Mining course in the fall of 2024. She was one of the best students in my class. She has demonstrated the capacity to carry out independent projects and worked very hard to finish extra assignments for the course.
In this course, Miss Fnu had to write a research term paper and develop and present a data science project. I sensed clarity of thought and an ease of communication necessary for successful software engineer.
I am impressed with Miss Fnu’s intelligence, scientific abilities, and hard work.
She is very apt and highly prepared for a software internship position. She also has the seriousness and diligence necessary for completing assigned tasks.
In all, I believe that Miss Fnu will be a highly qualified software engineer at your organization. If you have further questions, please do not hesitate to contact me at Tel: (703) 507-1736.
Sincerely,
Abdelghani Bellaachia, Ph.D.
    `,
    pdfUrl: 'https://drive.google.com/file/d/1R5gTLR4IcS1DCv3hRmP2bIZN9kAmGjnn/view?usp=drive_link',
  },
];

const LOR = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="recommendation-letter"
      className="bg-yellow-50 dark:bg-black text-black dark:text-yellow-400 py-20 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Letters of Recommendation</h2>

        <div className="space-y-8">
          {letters.map(({ id, title, content, pdfUrl }) => (
            <div
              key={id}
              className="border border-yellow-400 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                className="w-full text-left px-8 py-4 bg-yellow-400 dark:bg-yellow-600 text-black dark:text-gray-100 font-semibold hover:bg-yellow-500 dark:hover:bg-yellow-700 transition"
                onClick={() => toggle(id)}
                aria-expanded={openId === id}
                aria-controls={`letter-content-${id}`}
                id={`letter-button-${id}`}
              >
                {title}
              </button>
              {openId === id && (
                <div
                  id={`letter-content-${id}`}
                  aria-labelledby={`letter-button-${id}`}
                  className="px-8 py-6 whitespace-pre-line bg-white dark:bg-gray-900 text-base leading-relaxed text-gray-900 dark:text-yellow-400"
                >
                  {content}
                  {pdfUrl && (
                    <div className="mt-6">
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-3 bg-yellow-400 dark:bg-yellow-600 text-black dark:text-gray-100 rounded-lg hover:bg-yellow-500 dark:hover:bg-yellow-700 font-medium transition"
                      >
                        View Original PDF
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LOR;
