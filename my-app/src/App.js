import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginComponent from './Components/LoginComponent';
import RegisterComponent from './Components/RegisterComponent';
import ResetPasswordComponent from './Components/ResetPasswordComponent';
import HomeComponent from './Components/HomeComponent';
import BudgetComponent from './Components/BudgetComponent';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { AuthProvider } from './Components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Route path="/login" component={LoginComponent} />
          <Route path="/register" component={RegisterComponent} />
          <Route path="/reset-password" component={ResetPasswordComponent} />
          <Route exact path="/" component={HomeComponent} />
          <Route path="/budget" component={BudgetComponent} />
          <Route path="/transactions" component={TransactionList} />
          <Route path="/add-transaction" component={AddTransaction} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
