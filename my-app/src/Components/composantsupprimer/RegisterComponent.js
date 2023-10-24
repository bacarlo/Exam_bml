// RegisterComponent.js
import React, { useState } from 'react';

const RegisterComponent = ({ onRegister }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = { firstName, lastName, email, phoneNumber, password };
    onRegister(userData);
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleRegister}>
        {/* Champs pour le nom, prénom, email, numéro de téléphone, mot de passe */}
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};
export default RegisterComponent
