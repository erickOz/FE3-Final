
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Layout from "./Layout/Layout";
import Form from "./Components/Form";
import { ThemeContext } from "./Context/ThemeContext";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false); 

  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };


  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
    {/* <Navbar toggleTheme={toggleTheme} isDark={isDark}/> */}
        <Routes>
        <Route path="/" element={ <Layout/>}> 
          <Route path="/" element= {<Home />} /> 
          <Route path="/favs" element= {<Favs />} /> 
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contact" element= {<Form />} /> 
        </Route>
        </Routes>

          
      </div>
  );
}

export default App;
