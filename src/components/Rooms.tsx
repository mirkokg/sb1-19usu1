import React from 'react';

const rooms = [
  {
    name: 'Deluxe Suite',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Spacious suite with a king-size bed and city views.',
  },
  {
    name: 'Executive Room',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Modern room with a work area and premium amenities.',
  },
  {
    name: 'Family Suite',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    description: 'Spacious suite perfect for families, with separate living area.',
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-600">{room.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;