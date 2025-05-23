import React from 'react';
import { FaMediumM } from 'react-icons/fa';

const Blog = () => {
  const articles = [
    {
      title: 'Data Preprocessing & Column Normalization',
      url: 'https://medium.com/@pratichi3/data-preprocessing-column-normalization-cc1adc068e7d',
    },
    {
      title: 'Automate WordPress Deployment on AWS Using Terraform',
      url: 'https://medium.com/@pratichi3/automate-your-wordpress-deployment-on-aws-using-terraform-bca4c9aea30a',
    },
    {
      title: 'Overfitting and Underfitting in Machine Learning',
      url: 'https://medium.com/@pratichi3/overfitting-and-underfitting-in-machine-learning-8694f926a90f',
    },
    {
      title: 'Dimensionality Reduction Techniques: A Comparative Analysis',
      url: 'https://medium.com/@pratichi3/exploring-dimensionality-reduction-techniques-a-comparative-analysis-using-the-kaggle-digit-fcc33738a75e',
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          My Writings on Tech
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 border border-yellow-500/30 rounded-xl bg-black/30 backdrop-blur hover:backdrop-blur-lg hover:bg-yellow-500/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <FaMediumM className="text-yellow-400 text-3xl mr-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-yellow-300 group-hover:text-yellow-100">
                  {article.title}
                </h3>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 text-sm">
                Read more on Medium →
              </p>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <a
            href="https://medium.com/@pratichi3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
