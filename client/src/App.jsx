import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import "bootswatch/dist/slate/bootstrap.min.css";
function App() {


  return (
    <BrowserRouter>
        <Routes>
       
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        </Routes>
    
    </BrowserRouter>
  )
}

export default App
