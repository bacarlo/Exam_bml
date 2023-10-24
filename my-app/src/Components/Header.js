import React from 'react';

const Header = ({ userName }) => {
  return (
    <header>
      <h1>Depense</h1>
      {userName && <p>Bienvenue, {userName} !</p>}
    </header>
  );
};

export default Header;
