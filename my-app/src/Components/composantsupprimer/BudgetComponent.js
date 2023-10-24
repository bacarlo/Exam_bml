// BudgetComponent.js
import React, { useContext, useState } from 'react';

const BudgetComponent = ({ onUpdateBudget, currentBudget }) => {
  const [newBudget, setNewBudget] = useState('');
  const handleUpdateBudget = (e) => {
    e.preventDefault();
    onUpdateBudget(newBudget);
  };

  return (
    <div>
      <h2>Budget Actuel</h2>
      <p>Montant actuel du budget : {currentBudget}</p>
      <form onSubmit={handleUpdateBudget}>
        <input type="number" placeholder="Nouveau budget" value={newBudget} onChange={(e) => setNewBudget(e.target.value)} />
        <button type="submit">Mettre à jour le budget</button>
      </form>
    </div>
  );
};
export default BudgetComponent
