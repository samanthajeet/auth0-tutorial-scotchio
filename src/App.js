import React from 'react';
import 'bulma/css/bulma.css';
import { useAuth0 } from './context/auth0-context';

function App() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          {!isLoading && !user && (
            <>
              <h1>Click Below!</h1>
              <button onClick={loginWithRedirect} className="button is-danger">
                Login
              </button>
            </>
          )}
          {/* this is the new section */}
          {!isLoading && user && (
            <>
              <h1>You are logged in!</h1>
              <p>Hello {user.name}</p>

              {user.picture && <img src={user.picture} alt="My Avatar" />}
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="button is-small is-dark"
              >
                Logout
          </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;