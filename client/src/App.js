import React from "react";
import "./App.css";
import User from  "./components/User";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to MuckIn!!</p>
        <User/>
      </header>
    </div>
  );
}

export default App;
