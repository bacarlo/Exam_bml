import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Effectuez la validation de l'entrée utilisateur et la connexion ici
    if (!phoneNumber || !password) {
      setError('Veuillez remplir tous les champs.');
    } else {
      // Vous pouvez appeler une fonction d'authentification ou une API pour gérer la connexion
      // Si la connexion réussit, appelez la fonction onLogin pour mettre à jour l'état d'authentification de votre application
      onLogin();
    }
  };

  return (
    <div>
      <h2>Se Connecter</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="phoneNumber">Numéro de téléphone :</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder="Numéro de téléphone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Se Connecter</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
