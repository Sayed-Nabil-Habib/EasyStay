import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Hero() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  function handleSearch() {
    if (location.trim()) {
      navigate(`/?location=${encodeURIComponent(location.trim())}`);
    }
  }

  function handleClear() {
    setLocation('');
    navigate('/');
  }

  return (
    <section
      className="relative h-72 md:h-96 bg-cover bg-center"
      style={{ backgroundImage: "url('/easystay.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Easy find to your next stay
        </h2>

        <div className="bg-white rounded-md p-2 flex flex-col md:flex-row gap-2 w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search Here..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md text-black border focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            onClick={handleSearch}
            className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-70 transition"
          >
            Search
          </button>
          
         
        </div>
      </div>
    </section>
  );
}
