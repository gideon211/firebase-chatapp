import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { AuthContext } from "../context/AuthContext" 
import { useContext } from "react"

function AppRoutes() {

        const { currentUser } = useContext(AuthContext);
        const ProtectedRoute = ({children}) => {
                if(!currentUser){
                        return <Navigate to="/Login"/>
                }

                return children
        }
  return (
    <div>
                <BrowserRouter>
                        <Routes>
                                <Route
                                path="/"
                                element={
                                <ProtectedRoute>
                                        <Home />
                                </ProtectedRoute>
                                }
                                />
                                <Route path="Login" element={<Login />} />
                                <Route path="Register" element={<Register />} />
                        </Routes>
                </BrowserRouter>
    </div>
  )
}

export default AppRoutes