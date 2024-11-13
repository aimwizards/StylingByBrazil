import React from 'react';

interface TeamMemberProps {
  name: string;
  title: string;
  specialties: string[];
  image: string;
}

export default function TeamMember({ name, title, specialties, image }: TeamMemberProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Image */}
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-xl font-light mb-1">{name}</h3>
        <p className="text-sm text-white/80 mb-3">{title}</p>
        <ul className="space-y-1 text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {specialties.map((specialty, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-beige-400 rounded-full"></span>
              {specialty}
            </li>
          ))}
        </ul>
      </div>

      {/* Non-hover state info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-sm transform group-hover:translate-y-full transition-transform duration-500">
        <h3 className="text-xl font-light text-neutral-800">{name}</h3>
        <p className="text-sm text-neutral-600">{title}</p>
      </div>
    </div>
  );
}