import React from "react";
import Card from "../Components/Card";
import { useDentistState } from "../Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
 const {favs } = useDentistState()


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">

        {favs.map(( dentist  ) => (
          <Card key={dentist.id} dentist={dentist} />

        ))}

        
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
