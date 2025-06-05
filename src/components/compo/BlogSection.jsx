import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'How to Raise Emotionally Resilient Kids',
    image: 'assets/b3.jpg',
    excerpt: 'Learn practical steps and heartfelt advice to help your children grow up with emotional intelligence.',
    slug: 'emotionally-resilient-kids',
    category: 'Parenting'
  },
  {
    id: 2,
    title: 'Creative Play Ideas for All Ages',
    image: 'assets/b2.jpg',
    excerpt: 'Unlock creativity with age-appropriate play that fuels imagination, learning, and joy.',
    slug: 'creative-play-ideas',
    category: 'Activities'
  },
  {
    id: 3,
    title: 'Balancing Work and Parenting Like a Pro',
    image: 'assets/b1.jpg',
    excerpt: 'Juggling work and kids? Here\'s how to find balance and stay sane in the process.',
    slug: 'work-parenting-balance',
    category: 'Lifestyle'
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#f6f4f1] py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2b2b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#E67E22]">Read our blogs</span> designed for you
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Discover insightful articles on parenting, child development, and family wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-transparent hover:border-[#ff4848]/20"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#f4cc15] text-[#2b2b2b] px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#2b2b2b] mb-3 group-hover:text-[#ff4848] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#4a4a4a] mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-2 text-[#E67E22] font-semibold inline-flex items-center hover:text-[#e63e3e] transition-colors group/readmore"
                >
                  Read More
                  <span className="ml-2 group-hover/readmore:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block bg-[#E67E22] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e63e3e] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;