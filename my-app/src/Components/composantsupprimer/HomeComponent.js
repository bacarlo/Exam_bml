// HomeComponent.js
import React, { useContext } from 'react';
import { useBudget } from './AuthContext';

const HomeComponent = () => {
  const { budget } = useBudget();

  return (
    <div>
      <h2>Page d'accueil</h2>
      <p>Bienvenue sur la page d'accueil de votre application.</p>
      <p>Montant actuel du budget : {budget} FCFA</p>
      {/* Le reste de votre composant */}
    </div>
  );
};

export default HomeComponent;

