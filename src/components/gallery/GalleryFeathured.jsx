import React, { useState } from 'react';
import { FiFilter, FiX, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export function ImageGalleryWithFilters({ images }) {
  // Extract all unique categories from images
  const allCategories = ['all', ...new Set(images.map(img => img.category))];
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold text-[#2C3E50]">Our Gallery</h2>
          
          {/* Filter Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 bg-[#F8F9FA] border border-[#E9ECEF] rounded-lg px-4 py-2 text-[#2C3E50] hover:bg-gray-50 transition-colors"
            >
              <FiFilter className="text-[#5B8C5A]" />
              <span>{activeFilter === 'all' ? 'All Categories' : activeFilter}</span>
              <FiChevronDown className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-100 overflow-hidden"
                >
                  <div className="p-2 space-y-1">
                    {allCategories.map(category => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveFilter(category);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center justify-between ${activeFilter === category ? 'bg-[#5B8C5A]/10 text-[#5B8C5A]' : 'hover:bg-gray-50'}`}
                      >
                        {category}
                        {activeFilter === category && (
                          <span className="w-2 h-2 rounded-full bg-[#5B8C5A]"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Active filter chip */}
        {activeFilter !== 'all' && (
          <div className="mb-6 flex items-center gap-2">
            <span className="text-gray-600">Showing:</span>
            <div className="inline-flex items-center bg-[#E67E22]/10 text-[#E67E22] px-3 py-1 rounded-full text-sm">
              {activeFilter}
              <button 
                onClick={() => setActiveFilter('all')}
                className="ml-2 text-[#E67E22] hover:text-[#d36b1a]"
              >
                <FiX size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 transition-opacity">
                  <h3 className="text-white font-medium">{image.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
                  <span className="inline-block mt-2 bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-500">No images found in this category.</p>
            <button 
              onClick={() => setActiveFilter('all')}
              className="mt-4 text-[#5B8C5A] hover:underline flex items-center justify-center gap-1 mx-auto"
            >
              <FiX size={14} /> Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}