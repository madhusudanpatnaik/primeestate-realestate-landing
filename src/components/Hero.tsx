import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white py-20 px-6 min-h-screen bg-gradient-to-b from-[#669EC2] via-[#8EBFDD] via-[#A6CBE2] to-transparent relative overflow-hidden">

      <nav className="flex justify-between items-center absolute top-0 left-0 right-0 z-20 p-8">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl text-white">Hair</h1>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-white"><Plus className="w-6 h-6" /></p>
        </div>
      </nav>



      <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-b from-transparent via-zinc-100/80 to-white  z-20"/>
      <div className="max-w-7xl mx-auto text-center  relative max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl  font-light text-white mb-8 tracking-tight">
          Extraordinary <br /> living Begins Here
        </h1>
        <p className="text-md text-zinc-50 max-w-md mx-auto leading-relaxed font-light ">
          Explore the world of luxury real estate through carefully curated stories, 
          market insights, and design inspiration.
        </p>
      </div>
      <div className='mask-b-from-20% mask-b-to-80% '>

     
      <img
        src="https://res.cloudinary.com/drwbjidkb/image/upload/v1752269595/Home_xhxdh2.png"
        alt="Hero"
        className="absolute bottom-[-20%] left-0 right-0 w-[80%] h-auto mx-auto z-19 "
        style={{ transform: `translateY(-${offsetY * 0.15}px)` }} // adjust multiplier for parallax speed
      />
       </div>
    </section>
  );
};

export default Hero;
