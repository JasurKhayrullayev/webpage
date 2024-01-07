import React, { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (password === 'Oybek') {
      setLoggedIn(true);
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h1>Login to the Site</h1>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      ) : (
        <div>
          <h1>Welcome Oybek</h1>
        </div>
      )}
    </div>
  );
};

export default App;
