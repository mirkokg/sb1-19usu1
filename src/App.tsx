import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Reservations from './components/Reservations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Amenities />
        <Reservations />
      </main>
      <Footer />
    </div>
  );
}

export default App;