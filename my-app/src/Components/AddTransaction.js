// AddTransaction.js
import React, { useState } from 'react';

const AddTransaction = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const newTransaction = { description, amount };
    onAddTransaction(newTransaction);

    // Réinitialisez les champs après avoir ajouté la transaction
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h2>Ajouter une Transaction</h2>
      <form onSubmit={handleAddTransaction}>
        {/* Champ de description de la transaction */}
        <div>
          <label htmlFor="description">Description :</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Champ de montant de la transaction */}
        <div>
          <label htmlFor="amount">Montant :</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button type="submit">Ajouter Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
