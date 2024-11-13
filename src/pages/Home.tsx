import React from 'react';
import Slideshow from '../components/Slideshow';
import ScrollIndicator from '../components/ScrollIndicator';
import LocationCard from '../components/LocationCard';
import TreatmentCard from '../components/TreatmentCard';
import AboutSection from '../components/AboutSection';
import ResultsGallery from '../components/ResultsGallery';
import TeamMember from '../components/TeamMember';

const locations = [
  {
    location: 'Solna',
    treatments: [
      'Frisör och behandlingar',
      'Vaxning',
      'Laser',
      'Ansiktsbehandling',
      'Ögon och bryn',
      'Fettfrysning',
      'Cellulite massage'
    ],
    imagePath: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80'
  },
  {
    location: 'Södermalm',
    treatments: [
      'Frisör och behandlingar',
      'Vaxning',
      'Ögon och bryn',
      'Manikyr pedikyri'
    ],
    imagePath: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80'
  }
];

const treatments = [
  {
    title: 'Allt för Hår',
    description: ['Keratinbehandling', 'Slingor', 'Färgning', 'Hårbehandling'],
    imagePath: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80',
    color: 'rose'
  },
  {
    title: 'Vaxning och Laser',
    description: ['Brasiliansk Vaxning', 'Laser hårborttaning', 'Vaxning av ansikte'],
    imagePath: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&q=80',
    color: 'lavender'
  },
  {
    title: 'Bryn och Fransar',
    description: ['Brow lift', 'Lash lift', 'Fransfärgning', 'Plockning'],
    imagePath: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&q=80',
    color: 'mint'
  },
  {
    title: 'Ansiktsbehandlingar',
    description: ['Anti - Aging', 'Kemisk peeling', 'Ansiktslyft', 'Microneedling'],
    imagePath: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80',
    color: 'rose'
  },
  {
    title: 'Nagelvård',
    description: ['Klassisk Manikyr', 'Permanent Gellack', 'Snabbmanikyr', 'Lyx Pedikyr'],
    imagePath: 'https://images.unsplash.com/photo-1610992015732-2449b0dd2b8f?auto=format&fit=crop&q=80',
    color: 'lavender'
  },
  {
    title: 'Fettreducering',
    description: ['Coolshaping', 'Insculpt behandling', 'Radio Frequency', 'Power shape'],
    imagePath: 'https://images.unsplash.com/photo-1532446785438-1a6dd70a8470?auto=format&fit=crop&q=80',
    color: 'mint'
  }
];

const teamMembers = [
  {
    name: 'Rosangela Lima',
    title: 'Certifierad och utbildad Skönhetsterapeut',
    specialties: [
      'Frisör',
      'Skönhetsterapeut',
      'Brasiliansk vaxning',
      'Nagelterapeut',
      'Hudterapeut',
      'Kroppsvård',
      'Ansiktsbehandlingar',
      'Laser hårborttagning'
    ],
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80'
  },
  {
    name: 'Tatiana H.',
    title: 'Certifierad Hudterapeut',
    specialties: [
      'Hudterapeut',
      'Kroppsvård',
      'Ansiktsbehandlingar',
      'Laser hårborttagning'
    ],
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80'
  },
  {
    name: 'Justina Polivoda',
    title: 'Cidesco-diplomerad hudterapeut',
    specialties: [
      'Hudterapeut',
      'Lashlift och Browlift expert'
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
  },
  {
    name: 'Noir T.',
    title: 'Frisör 20 års erfarenhet',
    specialties: [
      'Frisör Herr och barn'
    ],
    image: 'https://images.unsplash.com/photo-1580618864180-f6d7d39b8ff6?auto=format&fit=crop&q=80'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Slideshow />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Välkommen till StylingByBrazil
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Din destination för professionell skönhetsvård och hårstyling
            </p>
            <a
              href="/boka"
              className="inline-block px-8 py-3 bg-rose-500 text-white rounded-full 
                hover:bg-rose-600 transform hover:scale-105 transition-all duration-300"
            >
              Boka Tid
            </a>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Locations Section */}
      <section id="locations-section" className="py-24 bg-neutral-50">
        <div className="container">
          <h2 className="text-4xl font-light text-center mb-16">Välj din salong</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-light text-center mb-16">Våra Behandlingar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <TreatmentCard key={index} {...treatment} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Team Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-light text-center mb-16">Vårt Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container">
          <h2 className="text-4xl font-light text-center mb-16">Våra Resultat</h2>
          <ResultsGallery />
        </div>
      </section>
    </div>
  );
}