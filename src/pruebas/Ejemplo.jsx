import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Ejemplo = () => {
    const [dentists, setDentists] = useState({})
        const url = "https://jsonplaceholder.typicode.com/users"


        useEffect(() => {
           
            axios(url).then((respuesta) => {
                console.log(respuesta)
                console.log(respuesta.data)
                setDentists(respuesta.data)
            })
        }, []);
    
    // useEffect(() => {
    //     fetch(url)
    //     .then((respuesta) => {
    //     console.log(respuesta);
    //     return respuesta.json();
    // })
    //     .then((data) => {
    //         console.log(data)
    //         setDentists(data)
    //     })
    // },[]);

    return (
        <div>
        {dentists.length > 0 ? (
            dentists.map((dentist) => (
              <div key={dentist.id}>
                <h3>{dentist.name}</h3>
                <p>{dentist.username}</p>
              </div>
            ))
          ) : (
            <p>Cargando dentistas...</p>
          )}
        </div>
      );
    }
    
export default Ejemplo
