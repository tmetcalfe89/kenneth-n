import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function clearForm() {
    setUsername("");
    setPassword("");
  }

  function handleSignUp() {
    console.log("Signing Up", { username, password });
    clearForm();
  }

  function handleSignIn() {
    console.log("Signing In", { username, password });
    clearForm();
  }

  return (
    <div>
      <div>
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
      <div>
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
}

export default App;
