import Home from './Components/pages/Home';
import './App.css';
import Navabr from './Components/Navabr';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import Services from './Components/pages/Services';
import Products from './Components/pages/Prodcuts';
import SignUp from './Components/pages/SignUp';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navabr />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/products' element={<Products />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
