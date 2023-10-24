// HomeComponent.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const HomeComponent = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Page d'accueil</h2>
      <p>Bienvenue, {user}!</p>
      <button onClick={logout}>Se déconnecter</button>
    </div>
  );
};

export default HomeComponent;
