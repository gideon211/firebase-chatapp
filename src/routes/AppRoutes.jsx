import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

function AppRoutes() {
  return (
    <div>
        <BrowserRouter>
                <Routes>
                        <Route path="/">
                                <Route index element={<Home />} />
                                <Route path="Login" element={<Login />} />  
                                <Route path="Register" element={<Register />} />
                        </Route>
                </Routes>    
        </BrowserRouter>
    </div>
  )
}

export default AppRoutes