import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/hero';
import './index.css'
import Blockchain from './pages/blockChain';
import Web3 from './pages/web3';
import Demo from './pages/demo';
import Connect from './pages/connect';

const basename = window.location.pathname.startsWith('/ChainLab') ? '/ChainLab' : '/';

const routes= (
  <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/web3" element={<Web3 />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </Router>
);

const App = () => {
  return <div> {routes} </div> ;
    
  
}

export default App
