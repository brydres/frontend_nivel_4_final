import "./App.css";
import Register from "./register/Register";


/* import { Dropdown } from "flowbite-react"; */
import Login from "./login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Perfil from "./perfil/Perfil";
import Dashboard from "./dashboard/Dashboard";
import Usuarios from "./opciones/Usuarios";
import Roles from "./opciones/Roles";
import Parametros from "./opciones/Parametros";

import Bitacoras from "./opciones/Bitacoras";
import EditPerfil from "./perfil/EditPerfil";
import Paginas from "./opciones/Paginas";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil/:id" element={<Perfil />} />
          <Route path="/editarperfil/:id" element={<EditPerfil />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/roles/:id" element={<Roles />} />
          <Route path="/usuarios/:id" element={<Usuarios />} />
          <Route path="/bitacoras/:id" element={<Bitacoras />} />
          <Route path="/paginas/:id" element={<Paginas />} />
          <Route path="/parametros" element={<Parametros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
