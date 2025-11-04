import './App.css'
import Home from "./pages/Home/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/home" element = {<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App;



