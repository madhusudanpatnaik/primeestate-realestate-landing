import React from "react";

const FooterSection = () => {
  return (
    <section
      className="relative w-full min-h-[600px] flex flex-col justify-start items-center text-center text-white px-6 py-6  bg-gradient-to-b from-[#669EC2] via-[#8EBFDD] via-[#A6CBE2] to-transparent overflow-hidden"
     
    >
      <h2 className="text-6xl font-light max-w-3xl my-4  drop-shadow-lg tracking-tight leading-tighter">
        Your dream
        <br />
        home awaits.
      </h2>
      <p className="max-w-xl text-sm mb-6 drop-shadow-md">
        Whether you’re exploring our homes or  <br /> envisioning something custom, we’re here to bring your dream to life.
      </p>
      <button
        className="inline-flex items-center gap-2 bg-white text-black rounded-full px-3 py-2  hover:bg-gray-100 transition text-sm"
        aria-label="Get in touch"
      >
        Get In Touch
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
        </svg>
      </button>

      <img
      src="https://res.cloudinary.com/drwbjidkb/image/upload/v1752269594/Footer_wmlikk.png"
      className="absolute bottom-[-20%] left-0 right-0 w-[50%] mx-auto h-auto"
      />

      {/* Footer Bottom Text */}
      <footer className="absolute bottom-6 left-0 right-0 flex justify-between px-8 text-xs text-white/75">
        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
        </div>
        <div>Tried Copying Hamza Framer Template. All rights reserved.</div>
      </footer>
    </section>
  );
};

export default FooterSection;
