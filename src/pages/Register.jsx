import Select from 'react-select'
import React, { useState, useMemo, useEffect } from 'react';
import countryList from 'react-select-country-list'
import { useNavigate } from 'react-router-dom';

function RegisterForm() {

  const [name, setName] = useState('')  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [edad, setEdad] = useState(0)
  const [inputError, setInputError] = useState('')
  const [formData, setFormData] = useState({})
  const [gender, setGender] = useState('hombre')
  const [country, setCountry] = useState('ES')
  const Paises = useMemo(() => countryList().getData(), []);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleChangeCountry = (e) => {
    setFormData({ ...formData, "Pais": e.value});
  } 

  useEffect(() => {
  }, [country])
  

  const countryChanger = (e) => {
    setCountry(e.value)
    handleChangeCountry(e)
  }

  const genderChanger = (e) => {
    setGender(e.target.value)
    handleChange(e)
  } 

  const edadChanger = (e) => {
    setEdad(e.target.value)
    handleChange(e)
  }

  const handleClick = () => {
    navigate("/Login");
  }

  const nameChanger = (e) => {
    setName(e.target.value)
    handleChange(e)
  }

  const usernameChanger = (e) => {
    setUsername(e.target.value)
    handleChange(e)
  }

  const passwordChange = (e) => {
    setPassword(e.target.value)
    handleChange(e)
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Define regular expressions for validating username and password
    const nameRegex = /^[a-zA-Z]+$/;
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const numberRegex = /^(1[6-9]|[2-9][0-9]|100)$/

    // Test the entered username and password against the regular expressions
    if (!usernameRegex.test(username)) {
      setInputError('The username cant stay empty, and it only can have letters and numbers')
    } else if (!passwordRegex.test(password)) {
      setInputError('Invalid password. Please use at least 8 characters, including one uppercase and one lowercase letter, and one number.');
    } else if (!nameRegex.test(name)) {
      setInputError('The name cant stay empty, and it only can have letters')  
    } else if (!numberRegex.test(edad)){
      setInputError('Insert an age, you have to be at least 16')
    } else if (typeof country === undefined){
      setInputError('Select a Country')
    }
    else {
      // If the username and password are valid, send a request to the server to create a new account
      // ...
      localStorage.setItem("formData", JSON.stringify(formData));
      handleClick()

    }
  };

  return (
    <div className='Login' id='Register'>
    <form onSubmit={handleSubmit}>
    <span className='title'>Register</span>
      {inputError && <div className='error'>{inputError}</div>}
      <label>
        Name: 
        <input type="text" name='name' onChange={nameChanger} />
      </label>
      <br />
      <label>
        Username:
        <input type="text" name="username" onChange={usernameChanger} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" onChange={passwordChange} />
      </label>
      <br />
      <label>
      <input
        type="radio"
        value="hombre"
        checked={gender === 'hombre'}
        onChange={genderChanger}
      />
    
      Hombre
      <input
        type="radio"
        value="mujer"
        checked={gender === 'mujer'}
        onChange={genderChanger}
      />
      Mujer
      <input
        type="radio"
        value="otro"
        checked={gender === 'otro'}
        onChange={genderChanger}
      />
      Otro

      </label>
      <br />
      <label>
      EDAD: {edad}
        <input type="range" min={0}  max={100}  value={edad} name="edad" onChange={edadChanger} />
      </label>
      <br />
      <label>
      <i class="fa-solid fa-flag"></i>
      <Select options={Paises} className="SelectorPais" name="pais" onChange={countryChanger} placeholder="Seleccione pais..."/>
</label>

      <button type="submit">Register</button>
    </form>
    </div>
  );
}

export default RegisterForm;