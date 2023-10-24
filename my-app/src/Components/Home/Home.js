import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddTransaction from '../AddTransaction';

function Home() {
  // État pour gérer les transactions
  const [transactions, setTransactions] = useState([]);

  // Fonction pour ajouter une transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <h2>Page d'accueil</h2>
      <p>Bienvenue sur la page d'accueil de votre application.</p>

      {/* Affichez ici la liste des transactions */}
      <h3>Liste des transactions</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.description} : {transaction.amount} €
          </li>
        ))}
      </ul>

      {/* Composant pour ajouter une transaction */}
      <AddTransaction onAddTransaction={addTransaction} />

      {/* Lien vers la page de gestion des transactions */}
      <Link to="/transactions">Gérer les transactions</Link>
    </div>
  );
}

export default Home;
