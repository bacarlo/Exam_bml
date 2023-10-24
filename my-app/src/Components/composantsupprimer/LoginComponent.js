// LoginComponent.js
import React, { useState } from 'react';

const LoginComponent = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(phoneNumber, password);
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        {/* Champs pour le numéro de téléphone et le mot de passe */}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};
export default LoginComponent;