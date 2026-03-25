import PlantillaAuth from "../../componentes/PlantillaAuth";
import "../../styles/auth/RegistrarUsuario.css";
import { Link} from "react-router-dom";

function RegistrarUsuario() {
    return (
        <PlantillaAuth>
            <p className="logo-frase">"dgfbdfgdgfhdghdfhf"</p>
            <Link className="boton-tienes-cuenta" to="/">¿Ya tienes cuenta? Inicia sesión</Link>
        </PlantillaAuth>
    );
}
export default RegistrarUsuario;