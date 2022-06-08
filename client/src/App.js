import './App.css';
import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Pages/Home'
import Cart from './Components/Pages/Cart'
import AdminPanel from './Components/Pages/AdminPanel';


function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/cart' element={<Cart />} />
          <Route path='/admin-panel/*' element={<AdminPanel />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
