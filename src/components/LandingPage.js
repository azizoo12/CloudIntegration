import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px',
  margin: '0 auto', // Center the map
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

function LandingPage() {
  return (
    <div>
      <h1>Welcome to My Awesome Map App!</h1>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, can be added here */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default LandingPage;
