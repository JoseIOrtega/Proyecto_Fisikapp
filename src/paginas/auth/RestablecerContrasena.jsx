import PlantillaAuth from "../../componentes/PlantillaAuth";
import "../../styles/auth/RestablecerContrasena.css";
import { Link} from "react-router-dom";

function RestablecerContrasena() {
    return (
        <PlantillaAuth>
            <p className="logo-frase">"Restablecer Contraseña"</p>
            <Link className="boton-volver-iniciar-sesion" to="/">Volver a iniciar sesión</Link>
            <div className="Contenedor_Padre" id="contenedor_principal">
                <div className="contenedor_hijo" id="contenedor_secundario">
                    <h2>Nueva contraseña:</h2>
                    <input type="password" placeholder="Ingrese una contraseña"></input>
                    <br />
                    <h2>Confirmar contraseña:</h2>
                    <input type="password" placeholder="Repita la contraseña"></input>
                    <br />
                    <button className="botonGuardar">Guardar nueva contraseña</button>
                </div>
            </div>
        </PlantillaAuth>
    );
}
export default RestablecerContrasena;