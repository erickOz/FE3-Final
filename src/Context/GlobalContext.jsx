import axios from "axios";
import { createContext, useContext, useEffect, useReducer} from "react";
import { reducer } from "../Reducers/reducer";

const DentistState = createContext()

const lsFavs = JSON.parse(localStorage.getItem("favs")) || []

const initialState = {
  dentists: [],
  favs: lsFavs,
  theme:  true
}

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = "https://jsonplaceholder.typicode.com/users"
 

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs])

  useEffect (() => {
  axios(url).then((res) => {
    console.log(res)
    dispatch ({ type: "GET_DENTISTS", payload: res.data})
  })
} , [])

  return (
    <DentistState.Provider value={ {state, dispatch}}>
      {children}
    </DentistState.Provider>
  );
};


export default GlobalContext;
export const useDentistState = () => useContext(DentistState)