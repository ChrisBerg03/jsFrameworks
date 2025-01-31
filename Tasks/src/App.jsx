import { useState } from 'react';
import './App.css';

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div id="cardContainer">
        <h1>Log in with</h1>
        <div id="socialMediaContainer">
          <div className="socialMedia">
            <a href="#">Google</a>
          </div>
          <div className="socialMedia">
            <a href="#">Apple</a>
          </div>
        </div>

        <input type="email" placeholder="Email address" />

        <div className="input-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            placeholder="Password"
          />
          <button className="togglePassword" onClick={togglePassword}>
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
        </div>

        <p>
          <a href="#">Forgot password?</a>
        </p>
        <button id="loginBtn" onClick={() => console.log('hello')}>
          Log in
        </button>
        <p>
          Don't have an account? <a href="#">Signup</a>
        </p>
      </div>
    </>
  );
}

export default App;
