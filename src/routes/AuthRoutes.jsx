import { Routes, Route } from "react-router-dom";
import Login from "../paginas/auth/Login";
import RegistrarUsuario from "../paginas/auth/RegistrarUsuario";
import RecuperarContrasena from "../paginas/auth/RecuperarContrasena";
import RestablecerContrasena from "../paginas/auth/RestablecerContrasena";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registrar-usuario" element={<RegistrarUsuario/>} />
      <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
      <Route path="/restablecer-contrasena" element={<RestablecerContrasena />} />
    </Routes>
  );
}

export default AuthRoutes;