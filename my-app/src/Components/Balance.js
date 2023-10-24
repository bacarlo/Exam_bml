import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div>
      <h2>Votre Solde</h2>
      <h1 id="balance">{balance}</h1>
    </div>
  );
};

export default Balance;
