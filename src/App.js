import React, { useContext } from 'react';
import {Auth0Context} from './context/auth0-context';
import 'bulma/css/bulma.css';

function App() {
  const auth0 = useContext(Auth0Context);
  return (
    <div className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          {auth0.message}
        </div>
      </div>
    </div>
  );
}

export default App;