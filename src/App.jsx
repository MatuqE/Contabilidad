import "./App.css";
import Crud from "./componentes/Crud";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./componentes/Home";



function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/Crud" element={<Crud/>}/>
            {/* <Route  path="/Factura" element={<Factura/>}/> */}
          </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
