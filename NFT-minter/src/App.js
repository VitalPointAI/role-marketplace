import React from 'react'
import { login, logout } from './utils'
import Homepage from './components/Mainpage/homepage'
import getConfig from './config'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutpage from './components/Aboutpage/about'
import Contactpage from './components/Contactspage/contact'
import Header from './components/Header/header'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

 function App() {
    return (
    <div style={{ backgroundColor: '#302d2d', position:'absolute', left:'0px', right:'0px', top:'0px', bottom:'0px'}}>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage style={{backgroundColor: '#302d2d'}}/>} />
          <Route path='/about' element={<Aboutpage/>} />
          <Route path='/contact' element={<Contactpage/>} />
        </Routes>
      </Router>
    </div>
    )
}
export default App