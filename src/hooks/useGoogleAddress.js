import { useState } from 'react';
// import axios from 'axios';
import { geoMock } from '../mocks/geoApiMock';

export const useGoogleAddress = () => {
  const [map, setMap] = useState({});
  setMap(geoMock.results[0].geometry.location);

  return map;
};
