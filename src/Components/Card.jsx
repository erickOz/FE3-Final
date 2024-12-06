import React from "react";
import { Link } from "react-router-dom";
import "../Styles/card.css"


import { useDentistState } from "../Context/GlobalContext";



const Card = ({ dentist } ) => {
 const {dispatch , state } = useDentistState()


  const findFav =  state.favs.some((fav) => fav.id === dentist.id)
  
  const toggleFav = () => {
    dispatch ({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: dentist})
  }
  

  return (
    <div className="card">
      <Link to={`/detail/${dentist.id}`}>
        <img src="/images/doctor.jpg" alt= {dentist.name} className="card-image"/>
        <h3>{dentist.name}</h3>
        <p>{dentist.username}</p>
      </Link>
        <button className="favButton" onClick={toggleFav}> {findFav ? "🌟 Agregado a favorito" : "⭐"}</button>
    </div>
  );
};

export default Card;
