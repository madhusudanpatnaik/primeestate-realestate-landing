import React, { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "The Crestview",
    price: "$2,100,000",
    description: "Where elegance meets innovation—a seamless blend of architecture, luxury, and nature.",
    bedrooms: 5,
    bathrooms: 5.5,
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "The Willowbrook",
    price: "$1,250,000",
    description: "A serene retreat blending modern architecture with natural surroundings for effortless living.",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    title: "The Parkside Villa",
    price: "$1,850,000",
    description: "Offering panoramic views and open spaces for peace and tranquility.",
    bedrooms: 4,
    bathrooms: 4,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
  },
];



const FeaturedArticle: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
  };
  return (
    <section className="bg-white py-16 px-6">
       <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className="text-[3.5rem] font-normal leading-tight tracking-tight  max-w-[900px] mx-auto flex flex-wrap justify-center items-center gap-3 font-[400]">
        <span>Where your vision</span>
        <br />
        <span>finds its
        <img 
          src="https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Modern house"
          className="inline-block w-[140px] h-[70px] object-cover rounded-l-[40px] rounded-r-[8px] mx-3"
          style={{ clipPath: 'ellipse(50% 50% at 50% 50%)' }} // or use rounded-l and rounded-r as needed
        />
        home.</span>
      </h2>

      <p className="mt-6 max-w-[680px] mx-auto text-gray-600 text-lg   font-light tracking-tight">
        Haven offers more than just a place to live it's a space designed to reflect your unique style, crafted with timeless precision, and built to inspire for generations to come.
      </p>

      <form className="mt-10 max-w-md mx-auto flex rounded-lg overflow-hidden shadow-md text-md">
        <input 
          type="email" 
          placeholder="Your Email Address" 
          className="flex-grow px-4 py-3 text-gray-700 text-base focus:outline-none font-light"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg  hover:bg-gray-900 transition font-light "
        >
          Stay Updated
        </button>
      </form>
    </section>
    
    </section>
  );
};

export default FeaturedArticle;