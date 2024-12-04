
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Layout from "./Layout/Layout";

function App() {
  return (
      <div className="App">
        
        <Routes>
        <Route path="/" element={ <Layout/>}> 
          <Route path="/" element= {<Home />} /> 
          <Route path="/favs" element= {<Favs />} /> 
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
        </Routes>
          
          
      </div>
  );
}

export default App;
