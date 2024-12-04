import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// const initialState = {
//   dentists: [],
//   theme: "",
//    data: []
// }

const DentistState = createContext()

const lsFavs = JSON.parse(localStorage.getItem("favs")) || []
// export const ContextGlobal = createContext(undefined);

const GlobalContext = ({ children }) => {
  const [favs , setFavs] = useState(lsFavs)
  const [dentists, setDentists] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect (() => {
  axios(url).then((res) => {
    console.log(res)
    setDentists(res.data)
  })
} , [])

useEffect(() => {
  localStorage.setItem("favs", JSON.stringify(favs))
}, [favs])


  return (
    <DentistState.Provider value={ {dentists, favs,setFavs}}>
      {children}
    </DentistState.Provider>
  );
};
export default GlobalContext;

export const useDentistState = () => useContext(DentistState)