import PlantillaAuth from "../../componentes/PlantillaAuth";
import { Link} from "react-router-dom";
import "../../styles/auth/Login.css";

function Login() {
    return (
        <PlantillaAuth>
            <p className="logo-frase">"dgfbdfgdgfhdghdfhf"</p>
            <Link className="olvidaste-contrasena" to="/recuperar-contrasena">¿Olvidaste tu contraseña?</Link>
            <Link className="boton-registrarse" to="/registrar-usuario">Registrarse</Link>
        </PlantillaAuth>
        
    );
}
export default Login;
