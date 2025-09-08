import React, { useContext } from 'react'
import AppRoutes from './routes/AppRoutes'
import { AuthContext } from './context/AuthContext'

const App = () => {

        const {currentUser} = useContext(AuthContext)
        console.log(currentUser)
  return (
    <div>
        <AppRoutes />
    </div>
  )
}

export default App