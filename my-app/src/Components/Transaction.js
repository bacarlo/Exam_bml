import React from 'react';

const Transaction = ({ transaction, onDelete }) => {
  const { id, text, amount } = transaction;
  const transactionType = amount < 0 ? 'expense' : 'income';

  const handleDelete = () => {
    // Vous pouvez appeler une fonction onDelete pour supprimer la transaction
    onDelete(id);
  };

  return (
    <li className={transactionType}>
      {text} <span>${Math.abs(amount)}</span>
      <button className="delete-btn" onClick={handleDelete}>Supprimer</button>
    </li>
  );
};

export default Transaction;
