import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home'
import Contato from './pages/contato/contato'
import ReceberAjuda from './pages/receber-ajuda/receber-ajuda'
import Doar from './pages/doar/doar'
import './main.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/receber-ajuda" element={<ReceberAjuda />} />
        <Route path="/doar" element={<Doar />} />
      </Routes>
    </Router>
  </React.StrictMode>
)


