// ResetPasswordComponent.js
import React, { useState } from 'react';

const ResetPasswordComponent = ({ onResetPassword }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    onResetPassword(email);
  };

  return (
    <div>
      <h2>Réinitialisation du Mot de Passe</h2>
      <form onSubmit={handleResetPassword}>
        {/* Champ pour l'e-mail */}
        <button type="submit">Réinitialiser le Mot de Passe</button>
      </form>
    </div>
  );
};
export default ResetPasswordComponent
