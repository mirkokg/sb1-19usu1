import React from 'react';
import { Wifi, Coffee, Dumbbell, Utensils } from 'lucide-react';

const amenities = [
  { name: 'Free Wi-Fi', icon: Wifi },
  { name: 'Coffee Shop', icon: Coffee },
  { name: 'Fitness Center', icon: Dumbbell },
  { name: 'Restaurant', icon: Utensils },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Hotel Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity) => (
            <div key={amenity.name} className="flex flex-col items-center">
              <amenity.icon size={48} className="mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold text-center">{amenity.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;