import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Luxury hotel exterior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-bold mb-4">Experience Luxury Redefined</h2>
        <p className="text-xl mb-8">Welcome to LuxeStay, where comfort meets elegance</p>
        <a
          href="#reservations"
          className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default Hero;