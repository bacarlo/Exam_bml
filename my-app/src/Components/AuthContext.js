// AuthContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Créez un contexte d'authentification
const AuthContext = createContext();

// Créez un contexte pour gérer le budget
const BudgetContext = createContext();

// Créez un contexte pour gérer les transactions
const TransactionContext = createContext();

const initialState = {
  user: null, // Utilisateur connecté
  budget: 0, // Budget actuel
  transactions: [], // Liste des transactions
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'SET_BUDGET':
      return { ...state, budget: action.payload };
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [...state.transactions, action.payload] };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user) => {
    dispatch({ type: 'LOGIN', payload: user });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const setBudget = (budget) => {
    dispatch({ type: 'SET_BUDGET', payload: budget });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      <BudgetContext.Provider value={{ budget: state.budget, setBudget }}>
        <TransactionContext.Provider value={{ transactions: state.transactions, addTransaction }}>
          {children}
        </TransactionContext.Provider>
      </BudgetContext.Provider>
    </AuthContext.Provider>
  );
};


const useAuth = () => useContext(AuthContext);
const useBudget = () => useContext(BudgetContext);
const useTransactions = () => useContext(TransactionContext);

export { AuthProvider, useAuth, useBudget, useTransactions };
