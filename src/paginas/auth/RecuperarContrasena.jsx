import PlantillaAuth from "../../componentes/PlantillaAuth";
import "../../styles/auth/RecuperarContrasena.css";
import { Link} from "react-router-dom";

function RecuperarContrasena() {
    return (
        <PlantillaAuth>
            <p className="logo-frase">"dgfbdfgdgfhdghdfhf"</p>
            <Link className="boton-volver-iniciar-sesion" to="/">Volver a iniciar sesión</Link>
        </PlantillaAuth>
    );
}
export default RecuperarContrasena;