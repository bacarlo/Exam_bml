import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import Transactions from './Components/Transactions';
import Login from './Components/Login'; // Composant de connexion
import Logout from './Components/Logout'; // Composant de déconnexion

function App() {
  // État d'authentification
  const [authenticated, setAuthenticated] = useState(false);

  // Fonction de connexion
  const handleLogin = () => {
    // Définissez l'état d'authentification sur true lors de la connexion
    setAuthenticated(true);
  }

  return (
    <Router>
      <div>
        <Switch>
          {/* Page d'accueil accessible uniquement aux utilisateurs authentifiés */}
          <Route
            path="/home"
            render={() =>
              authenticated ? (
                <Home />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          {/* Page de transactions accessible uniquement aux utilisateurs authentifiés */}
          <Route
            path="/transactions"
            render={() =>
              authenticated ? (
                <Transactions />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          {/* Page de connexion */}
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          {/* Page de déconnexion */}
          <Route path="/logout">
            <Logout />
          </Route>
          {/* Redirigez vers la page de connexion par défaut si aucune route correspondante n'est trouvée */}
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
