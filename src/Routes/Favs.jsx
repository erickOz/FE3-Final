import React from "react";
import Card from "../Components/Card";
import { useDentistState } from "../Context/GlobalContext";
import "../Styles/index.css"


const Favs = () => {
 const {
 state: {favs }} = useDentistState()


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
       {favs.length === 0 ? (
        <p className="favs"> No tienes agregado ningun dentista en favoritos.</p> 
        ) : (
        favs.map(( dentist  ) => (
          <Card key={dentist.id} dentist={dentist} />
          ))
        )}

  
      </div>
    </>
  );
};

export default Favs;
