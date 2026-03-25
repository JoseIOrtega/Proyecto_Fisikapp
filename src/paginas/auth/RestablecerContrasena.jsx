import PlantillaAuth from "../../componentes/PlantillaAuth";
import "../../styles/auth/RestablecerContrasena.css";
import { Link} from "react-router-dom";

function RestablecerContrasena() {
    return (
        <PlantillaAuth>
            <p className="logo-frase">"dgfbdfgdgfhdghdfhf"</p>
            <Link className="boton-volver-iniciar-sesion" to="/">Volver a iniciar sesión</Link>
        </PlantillaAuth>
    );
}
export default RestablecerContrasena;