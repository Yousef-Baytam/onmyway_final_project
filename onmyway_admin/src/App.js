import './App.css';
import { Route, Routes } from 'react-router-dom'

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
          element={<Contacts />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
