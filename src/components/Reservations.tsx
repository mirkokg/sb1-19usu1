import React, { useState } from 'react';

const Reservations = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
    console.log('Reservation submitted:', { checkIn, checkOut, guests });
  };

  return (
    <section id="reservations" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Make a Reservation</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="checkIn" className="block text-gray-700 font-semibold mb-2">Check-in Date</label>
            <input
              type="date"
              id="checkIn"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="checkOut" className="block text-gray-700 font-semibold mb-2">Check-out Date</label>
            <input
              type="date"
              id="checkOut"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">Number of Guests</label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              min="1"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservations;