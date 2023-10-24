import React, { useState } from 'react';

const AddTransaction = ({ onAddTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleAddTransaction = (e) => {
    e.preventDefault();

    // Effectuez la validation des entrées utilisateur et ajoutez la transaction ici
    if (!text || !amount) {
      setError('Veuillez remplir tous les champs.');
    } else if (isNaN(parseFloat(amount))) {
      setError('Le montant doit être un nombre.');
    } else {
      // Vous pouvez appeler une fonction pour ajouter la transaction à votre application
      // Si l'ajout réussit, appelez la fonction onAddTransaction pour mettre à jour les transactions
      onAddTransaction({ text, amount: parseFloat(amount) });
      // Réinitialisez les champs
      setText('');
      setAmount('');
      setError('');
    }
  };

  return (
    <div>
      <h2>Ajouter une Transaction</h2>
      <form onSubmit={handleAddTransaction}>
        <label htmlFor="text">Description :</label>
        <input
          type="text"
          id="text"
          placeholder="Description de la transaction"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label htmlFor="amount">Montant :</label>
        <input
          type="number"
          id="amount"
          placeholder="Montant de la transaction"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Ajouter Transaction</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default AddTransaction;
