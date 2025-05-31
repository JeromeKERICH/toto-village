// Removed unused import { motion } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const galleryImages = [
  {
    id: 1,
    src: "assets/g.jpg",
    alt: "Community center opening day",
    category: "facilities"
  },
  {
    id: 2,
    src: "assets/g2.jpg",
    alt: "Children learning in our center",
    category: "education"
  },
  {
    id: 3,
    src: "assets/g3.jpg",
    alt: "Caregiver training session",
    category: "training"
  },
  {
    id: 4,
    src: "assets/g4.jpg",
    alt: "Children playing in playground",
    category: "facilities"
  },
  {
    id: 5,
    src: "assets/g5.jpg",
    alt: "Caregiver graduation ceremony",
    category: "events"
  },
  {
    id: 6,
    src: "assets/g6.jpg",
    alt: "Staff planning meeting",
    category: "team"
  },
  {
    id: 7,
    src: "assets/g7.jpg",
    alt: "Parent workshop session",
    category: "education"
  },
  {
    id: 8,
    src: "assets/g8.jpg",
    alt: "Children outdoor activities",
    category: "activities"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const categories = [
    { id: "all", name: "All" },
    { id: "facilities", name: "Our Centers" },
    { id: "education", name: "Education" },
    { id: "training", name: "Training" },
    { id: "activities", name: "Activities" },
    { id: "events", name: "Events" }
  ];

  return (
    <section className="bg-[#f6f4f1] py-16 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2b2b2b] mb-4">OUR GALLERY</h2>
          <p className="text-xl text-[#4a4a4a] max-w-2xl mx-auto">
            See the impact we're making through the eyes of our community
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-[#ff4848] text-white"
                  : "bg-white text-[#2b2b2b] hover:bg-[#fff0f0]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-sm truncate">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-3xl hover:text-[#ff4848] transition"
            >
              <FiX />
            </button>
            
            <div className="relative max-w-6xl w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[80vh] w-full object-contain"
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
              
              <button 
                onClick={() => {
                  const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                  const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
                  setSelectedImage(filteredImages[prevIndex]);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-[#ff4848] transition"
              >
                <FiChevronLeft size={24} />
              </button>
              
              <button 
                onClick={() => {
                  const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                  const nextIndex = (currentIndex + 1) % filteredImages.length;
                  setSelectedImage(filteredImages[nextIndex]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-[#ff4848] transition"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;