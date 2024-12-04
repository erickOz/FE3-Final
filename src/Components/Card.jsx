import React from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css"
import { useDentistState } from "../Context/GlobalContext";


const Card = ({ dentist } ) => {
  const {name , username, id} = dentist;
  const {setFavs } = useDentistState()



  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavs(( favs) => [...favs,dentist])
    
  }

  return (
    <div className="card">
      <Link to={`/detail/${dentist.id}`}>
        <img src="/images/doctor.jpg" alt= {name} className="card-image"/>
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>

        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐️</button>
    </div>
  );
};

export default Card;
