import React, { useState } from "react";
import Message from "./Message";
import "../Styles/form.css"

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: ""
  })
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)


  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if(
      user.nombre.trim().length >= 5 &&
      emailRegex.test(user.email)
    ) {
      setShow(true)
      setError(false)
  
    } else {
      setError(true)
    }
  } 
    
    return (
      <> 
      <div className="form-container">
        {show ? (
          <Message nombre= {user.nombre} />
        ): (
          <form onSubmit={handleSubmit}>
            <label> Nombre completo:</label>
            <input type="text"
            value={user.nombre}
            name="nombre"
            onChange={handleChange}
            />
            <label> Email:</label>
            <input type="email"
            value={user.email}
            name="email"
            onChange={handleChange}
            />
            <button type="submit"> Enviar</button>
            {error ? (
              <h4>
                Por favor verifique su información nuevamente
              </h4>
            ) : null }
            
          
          </form>
        )}
       
      </div>
      </>
    );
  };
 
export default Form;
