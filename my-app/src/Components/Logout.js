import React from 'react';

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    // Supprimer les informations d'authentification du stockage local (à adapter à votre implémentation d'authentification)
    localStorage.removeItem('authToken');

    // Appeler la fonction onLogout pour réinitialiser l'état d'authentification dans votre application
    onLogout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
};

export default Logout;
