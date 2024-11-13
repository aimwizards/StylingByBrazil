import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Alla', 'Frisör', 'Keratin', 'Ögon & Bryn', 'Vaxning', 'Laser'];

const results = [
  // Frisör
  {
    id: 1,
    category: 'Frisör',
    description: 'Balayage & Styling',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    category: 'Frisör',
    description: 'Färgning & Klippning',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    category: 'Frisör',
    description: 'Modern Styling',
    image: 'https://images.unsplash.com/photo-1580618864180-f6d7d39b8ff6?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    category: 'Frisör',
    description: 'Herrklippning',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    category: 'Frisör',
    description: 'Slingor & Highlights',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    category: 'Frisör',
    description: 'Brud Styling',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80'
  },

  // Keratin
  {
    id: 7,
    category: 'Keratin',
    description: 'Brazilian Keratin Treatment',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80'
  },
  {
    id: 8,
    category: 'Keratin',
    description: 'Keratin Behandling',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80'
  },
  {
    id: 9,
    category: 'Keratin',
    description: 'Silkeslent Resultat',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80'
  },
  {
    id: 10,
    category: 'Keratin',
    description: 'Anti-Frizz Behandling',
    image: 'https://images.unsplash.com/photo-1549236177-97d455975da9?auto=format&fit=crop&q=80'
  },
  {
    id: 11,
    category: 'Keratin',
    description: 'Långvarigt Resultat',
    image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?auto=format&fit=crop&q=80'
  },
  {
    id: 12,
    category: 'Keratin',
    description: 'Glansigt Hår',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80'
  },

  // Ögon & Bryn
  {
    id: 13,
    category: 'Ögon & Bryn',
    description: 'Browlift & Lashlift',
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&q=80'
  },
  {
    id: 14,
    category: 'Ögon & Bryn',
    description: 'Ögonbrynsstyling',
    image: 'https://images.unsplash.com/photo-1577644802434-0f31217f3811?auto=format&fit=crop&q=80'
  },
  {
    id: 15,
    category: 'Ögon & Bryn',
    description: 'Fransar & Bryn',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80'
  },
  {
    id: 16,
    category: 'Ögon & Bryn',
    description: 'Naturlig Look',
    image: 'https://images.unsplash.com/photo-1588512285341-c481fb6de19d?auto=format&fit=crop&q=80'
  },
  {
    id: 17,
    category: 'Ögon & Bryn',
    description: 'Ögonbrynsmappning',
    image: 'https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&q=80'
  },
  {
    id: 18,
    category: 'Ögon & Bryn',
    description: 'Perfekt Form',
    image: 'https://images.unsplash.com/photo-1600442715817-4d9c8b6c729f?auto=format&fit=crop&q=80'
  },

  // Vaxning
  {
    id: 19,
    category: 'Vaxning',
    description: 'Professionell Vaxning',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80'
  },
  {
    id: 20,
    category: 'Vaxning',
    description: 'Len Hud',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80'
  },
  {
    id: 21,
    category: 'Vaxning',
    description: 'Skonsam Behandling',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80'
  },
  {
    id: 22,
    category: 'Vaxning',
    description: 'Långvarigt Resultat',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80'
  },
  {
    id: 23,
    category: 'Vaxning',
    description: 'Professionell Service',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80'
  },
  {
    id: 24,
    category: 'Vaxning',
    description: 'Mjuk & Slät',
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80'
  },

  // Laser
  {
    id: 25,
    category: 'Laser',
    description: 'Permanent Hårborttagning',
    image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&q=80'
  },
  {
    id: 26,
    category: 'Laser',
    description: 'Modern Teknologi',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80'
  },
  {
    id: 27,
    category: 'Laser',
    description: 'Effektiv Behandling',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80'
  },
  {
    id: 28,
    category: 'Laser',
    description: 'Säker Metod',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80'
  },
  {
    id: 29,
    category: 'Laser',
    description: 'Professionell Utrustning',
    image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&q=80'
  },
  {
    id: 30,
    category: 'Laser',
    description: 'Avancerad Behandling',
    image: 'https://images.unsplash.com/photo-1518563259479-d003c05a6507?auto=format&fit=crop&q=80'
  }
];

export default function ResultsGallery() {
  const [selectedCategory, setSelectedCategory] = useState('Alla');

  const filteredResults = results.filter(
    result => selectedCategory === 'Alla' || result.category === selectedCategory
  );

  // Only show 3 items for 'Alla' category
  const displayResults = selectedCategory === 'Alla' 
    ? filteredResults.slice(0, 3) 
    : filteredResults;

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 text-sm
              ${selectedCategory === category 
                ? 'bg-gradient-to-r from-rose-500 to-lavender-500 text-white shadow-lg scale-105' 
                : 'bg-white text-neutral-600 hover:bg-neutral-50 hover:scale-105'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayResults.map((result) => (
            <motion.div
              key={result.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-100"
            >
              <img
                src={result.image}
                alt={result.description}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm mb-2">{result.category}</p>
                  <h3 className="text-white text-lg font-light">{result.description}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* "And more" message for 'Alla' category */}
        {selectedCategory === 'Alla' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center aspect-square rounded-xl bg-gradient-to-br from-rose-50 to-lavender-50 border border-neutral-100"
          >
            <div className="text-center p-6">
              <p className="text-xl font-light text-neutral-600 mb-2">Och mycket mer...</p>
              <p className="text-sm text-neutral-500">Välj en kategori för att se fler resultat</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}