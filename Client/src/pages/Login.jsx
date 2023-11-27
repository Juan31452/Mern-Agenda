import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const CargarDatos = async (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
    };

  return (
    <div className="">
    <h3>Inicio Sesion</h3>
    <form onSubmit={CargarDatos}>
      <div className="">
         <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
           />
        </div>
        <div className="">
         <input
              type="password"
              value={password}
              placeholder="paswword"
              onChange={(event) => setPassword(event.target.value)}
           />
        </div> 
      <button type="submit" >
        Iniciar Sesión
      </button>
    </form>
    <div className="contenedorEnlace">
     <p>
      <Link to="/UsuarioCrear"> Registrate</Link>
    </p>
  </div>

  </div>
  )
}

export default Login
