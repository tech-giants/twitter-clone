import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import LoginForm from './components/forms/loginForm';
import RegistrationForm from './components/forms/registrationForm';
import ErrorPage from './pages/errorPage';
import ProtectedRoute from './services/hocFunctions/protectedRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route path="/login" component={LoginForm} exact />
        <Route path="/register" component={RegistrationForm} exact />
        <Route component={ErrorPage} />
      </Switch>

    </div>
  );
}

export default App;
