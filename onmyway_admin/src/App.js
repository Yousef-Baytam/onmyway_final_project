import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Auth from './pages/Auth';
import Pannel from './pages/Pannel';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { url } from './constants/vars'
import { me } from './controllers/userController';

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  const handleLoggedinUser = async () => {
    const storedToken = localStorage.getItem('token')
    if (!storedToken) return
    try {
      const res = await me(storedToken)
      axios.defaults.headers.common['Authorization'] = `bearer ${ storedToken }`
      setUser(res.user)
      setToken(storedToken)
      navigate('/pannel')
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    axios.defaults.baseURL = `${ url }`
    handleLoggedinUser()
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
            setUser={setUser} user={user}
            setToken={setToken} />}
        ></Route>
        <Route
          path="/pannel"
          element={<Pannel user={user} setUser={setUser} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
