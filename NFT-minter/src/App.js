import React from 'react'
import { login, logout } from './utils'


import getConfig from './config'

import Dashboard from './components/dashboard/daashboard'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

 function App() {
    return (
    <div style={{overflowX: "hidden", position:'absolute', left:'0px', right:'0px', top:'0px', bottom:'0px'}}>
      <Dashboard/>
    </div>
    )
}
export default App