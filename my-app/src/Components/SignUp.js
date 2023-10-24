import React, { useState } from 'react';

const SignUp = ({ onSignUp }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Effectuez la validation des entrées utilisateur et l'inscription ici
    if (!firstName || !lastName || !email || !phoneNumber || !password) {
      setError('Veuillez remplir tous les champs.');
    } else {
      // Vous pouvez appeler une fonction d'inscription ou une API pour gérer l'inscription
      // Si l'inscription réussit, appelez la fonction onSignUp pour mettre à jour l'état d'authentification de votre application
      onSignUp();
    }
  };

  return (
    <div>
      <h2>S'Inscrire</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="firstName">Prénom :</label>
        <input
          type="text"
          id="firstName"
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Nom :</label>
        <input
          type="text"
          id="lastName"
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

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

        <button type="submit">S'Inscrire</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
