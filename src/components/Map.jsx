import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    widht: '100%',
  };

  const defaultCenter = {
    lat: 101.23122,
    lng: -98.123212,
  };

  return (
    <LoadScript googleMapsApiKey={String(process.env.GOOGLE_API)}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
