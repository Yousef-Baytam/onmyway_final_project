import './App.css';
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth';
import Pannel from './pages/Pannel';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Auth />}
        ></Route>
        <Route
          path="/contacts"
          element={<Pannel />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
