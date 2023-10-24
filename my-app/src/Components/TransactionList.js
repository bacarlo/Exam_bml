// TransactionList.js
import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2>Liste des Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TransactionList;
