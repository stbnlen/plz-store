import React, { useContext } from 'react';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import { useGoogleAddress } from '../hooks/useGoogleAddress';

import '../styles/components/Success.scss';

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);
  // const location = useGoogleAddress(buyer[0].address);
  const location = useGoogleAddress();
  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
