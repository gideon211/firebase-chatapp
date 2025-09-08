import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

function AppRoutes() {
  return (
    <div>
        <Router>
                <Routes>
                        {/* <Route path="/" element={<Home />} />
                        <Route path="/" element={<Login />} /> */}
                        <Route path="/" element={<Register />} />
                </Routes>
        </Router>
    </div>
  )
}

export default AppRoutes