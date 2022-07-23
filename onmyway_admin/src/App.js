import './App.css';
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth';
import Pannel from './pages/Pannel';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { url } from './constants/vars'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    axios.defaults.baseURL = `${ url }`
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Auth username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            setUser={setUser}
            setToken={setToken} />}
        ></Route>
        {user &&
          <Route
            path="/pannel"
            element={<Pannel />}
          ></Route>
        }
      </Routes>
    </div>
  );
}

export default App;
