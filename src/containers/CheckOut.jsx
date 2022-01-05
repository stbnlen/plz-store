import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/components/CheckOut.scss';

const CheckOut = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (product, idx) => () => {
    removeFromCart(product, idx);
  };

  const handleSumTotal = () => {
    const reducer = (acc, curr) => acc + curr.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="CheckOut">
      <div className="CheckOut-content">
        {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item, idx) => (
          <div className="CheckOut-item" key={idx}>
            <div className="CheckOut-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item, idx)}>
              <i className="fas fa-trash-alt fa-2x" title="Eliminar" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <aside className="CheckOut-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar Pedido</button>
          </Link>
        </aside>
      )}
    </div>
  );
};

export default CheckOut;
