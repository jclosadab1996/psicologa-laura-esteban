import React from 'react';

const Map = () => {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="text-primary font-medium mb-2">CC Pacific Mall</h3>
          <p className="text-text/70">Piso 11, Consultorio 1109</p>
          <p className="text-text/70">Santiago de Cali 760001</p>
          <a 
            href="https://www.google.com/maps/search/CC+Pacific+Mall+Cali" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-primary hover:text-accent transition-colors duration-300"
          >
            Ver en Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;