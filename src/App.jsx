import Panel from "./dashboard/Panel"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'


function App() {
  const API = 'https://fakestoreapi.com' //Anexando API

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Panel API={API}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
