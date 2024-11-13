import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Frisor from './pages/Frisor';
import Keratin from './pages/Keratin';
import OgonBryn from './pages/OgonBryn';
import Vaxning from './pages/Vaxning';
import Laser from './pages/Laser';
import Behandlingar from './pages/Behandlingar';
import Priser from './pages/Priser';

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frisor" element={<Frisor />} />
        <Route path="/keratin" element={<Keratin />} />
        <Route path="/ogon-bryn" element={<OgonBryn />} />
        <Route path="/vaxning" element={<Vaxning />} />
        <Route path="/laser" element={<Laser />} />
        <Route path="/behandlingar" element={<Behandlingar />} />
        <Route path="/priser" element={<Priser />} />
      </Routes>
    </div>
  );
}

export default App;