import React, { useState } from 'react';

const Budget = ({ onSaveBudget }) => {
  const [budget, setBudget] = useState(''); // État local pour stocker la valeur du budget

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleSaveBudget = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter des validations ici pour vous assurer que la valeur du budget est valide

    // Appelez la fonction onSaveBudget pour enregistrer la valeur du budget dans votre application
    onSaveBudget(parseFloat(budget));

    // Réinitialisez l'état local
    setBudget('');
  };

  return (
    <div>
      <h2>Définir le Budget</h2>
      <form onSubmit={handleSaveBudget}>
        <label htmlFor="budget">Budget : </label>
        <input
          type="number"
          id="budget"
          placeholder="Entrez le montant du budget"
          value={budget}
          onChange={handleBudgetChange}
        />
        <button type="submit">Enregistrer le Budget</button>
      </form>
    </div>
  );
};

export default Budget;
