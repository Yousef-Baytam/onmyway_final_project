import './App.css';
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth';
import Pannel from './pages/Pannel';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Auth username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}
        ></Route>
        <Route
          path="/pannel"
          element={<Pannel />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
