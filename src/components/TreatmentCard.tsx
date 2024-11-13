import React from 'react';

interface TreatmentCardProps {
  title: string;
  description: string[];
  imagePath: string;
  color?: 'rose' | 'lavender' | 'mint' | 'beige';
}

export default function TreatmentCard({ 
  title, 
  description, 
  imagePath,
  color = 'beige' 
}: TreatmentCardProps) {
  const gradientColors = {
    rose: 'from-rose-500/40 via-rose-400/30 to-transparent',
    lavender: 'from-lavender-500/40 via-lavender-400/30 to-transparent',
    mint: 'from-mint-500/40 via-mint-400/30 to-transparent',
    beige: 'from-beige-500/40 via-beige-400/30 to-transparent',
  };

  return (
    <div className="group relative overflow-hidden rounded-xl">
      {/* Image Background */}
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={imagePath} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${gradientColors[color]} group-hover:opacity-80 transition-opacity duration-300`}></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-light mb-3 transform group-hover:-translate-y-2 transition-transform duration-300">
          {title}
        </h3>
        <ul className="space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-4 group-hover:translate-y-0">
          {description.map((item, index) => (
            <li key={index} className="text-sm text-white/90 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}