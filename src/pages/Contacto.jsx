import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Contacto = () => {
  const [name, setName] = useState('')  
const [correo, setCorreo] = useState('');
const [text, setText] = useState('')
const navigate = useNavigate();

const getName = (e) => {
setName(e.target.value)
}

const getCorreo = (e) => {
  setCorreo(e.target.value)
}

const getText = (e) => {
  setText(e.target.value)
}

const handleClick = () => {
  navigate("/");
}

const handleSubmit = (e) => {
  e.preventDefault();
  

  // Define regular expressions for validating username and password
  const nameRegex = /^[a-zA-Z]+$/;
  const correoRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const textRegex = /^[a-zA-Z0-9]+$/;
  // Test the entered username and password against the regular expressions
  if (!nameRegex.test(name)) {
    alert('Invalid name');
  } else if (!correoRegex.test(correo)) {
    alert('Invalid mail');
  } else if (!textRegex.test(text)) {
    alert('Invalid text');
  } 
  else {
    // If the username and password are valid, send a request to the server to create a new account
    // ...
    handleClick()

  }
};

  return (
    <div class="Login">
    <section>
        <form className='form' onSubmit={handleSubmit}>
            <span>CONTACTO</span>
            <h4>Si tienes alguna duda, consulta o problema, 
                puedes contactar con nosotros aqui</h4>
          <label>Nombre
          <input type="text" name="firstname" value={name} onChange={getName} placeholder="Tu nombre..." />
          </label>
          <label>Sexo

          <select id="sexo" name="sexo">
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="otro">Otro</option>
            <option value="NotIntroduced">Prefiero No Decirlo</option>
          </select>
          </label>
          <label>Correo
          <input type="text" id="correo" name="correo" value={correo} onChange={getCorreo} placeholder="Ingrese su correo..." />
          </label>
          <label for="subject">Problema
          <textarea id="problema" name="problema" value={text} onChange={getText} placeholder="Ingrese su problema..."></textarea>
          <br />
          </label>
          <div className="sendClean"><button type="submit" value="Enviar" >Enviar</button></div>
        </form>
    </section>
    </div>
  )
}

export default Contacto