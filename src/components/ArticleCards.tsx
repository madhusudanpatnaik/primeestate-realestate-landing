import React, { useState, useRef, useEffect } from "react";

const dropdownData = [
  {
    title: "Unparalleled Craftsmanship",
    content:
      "Details about unparalleled craftsmanship will be here.",
    imageUrl:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Personalized Design",
    content:
      "Details about personalized design will be here.",
    imageUrl:
      "https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Exclusive Locations",
    content:
      "Details about exclusive locations will be here.",
    imageUrl:
      "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Modern Innovation",
    content:
      "Details about modern innovation will be here.",
    imageUrl:
      "https://images.unsplash.com/photo-1642440781966-37a8d240c41c?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Seamless Experience",
    content:
      "From the first conversation to the final detail, we ensure a smooth and stress-free process. Our team is dedicated to bringing your vision to life with clarity, precision, and care at every step.",
    imageUrl:
      "https://images.unsplash.com/photo-1640806558716-74cf3ef7bf05?q=80&w=1457&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const DetailsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const contentRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      setMaxHeight(contentRefs.current[openIndex]!.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [openIndex]);

  const toggleDropdown = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
 
    <section className="max-w-4xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
      <div className=" w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-4 text-center">
          The art of exceptional
          <br />
          living begins in the details.
        </h2>
        <p className="text-gray-500 mb-12">
          Discover the details that make every Haven home a masterpiece.
        </p>


        <div className="flex items-center justify-between">

        <ul className="space-y-6">
          {dropdownData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <li key={index} className="border-b border-gray-200/50">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full text-left py-3 text-xl font-normal flex justify-between items-center"
                  aria-expanded={isOpen}
                >
                  {item.title}
                 
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? maxHeight : 0,
                    transition: "max-height 0.5s ease",
                    overflow: "hidden",
                  }}
                >
                  <p
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="text-gray-500 text-sm pb-2 max-w-md"
                  >
                    {item.content}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      

      <div className="flex-1 rounded-xl overflow-hidden shadow-lg max-w-lg ml-12  ">
        <img
          src={
            openIndex !== null
              ? dropdownData[openIndex].imageUrl
              : dropdownData[0].imageUrl
          }
          alt={openIndex !== null ? dropdownData[openIndex].title : "Image"}
          className="object-cover w-full h-full rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"

          key={openIndex} // to trigger fade transition if you add opacity logic
        />
      </div>
      </div>
      </div>
      
    </section>

    <section className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover rounded-3xl"
      >
        <source
          src="https://res.cloudinary.com/drwbjidkb/video/upload/v1752264219/3859438-uhd_2560_1440_24fps_1_meh65n.mp4"
          type="video/mp4"
        />
        {/* Fallback if video is not supported */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-snug max-w-4xl">
          Step inside a world where exceptional
          <br />
          design and timeless luxury meet.
        </h2>
      </div>

      {/* Play button on bottom right */}
      <button
        aria-label="Play video"
        className="absolute bottom-6 right-6 bg-white bg-opacity-80 hover:bg-opacity-100 text-black rounded-full p-3 shadow-lg transition"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </section>

    </>
  );
};

export default DetailsSection;
