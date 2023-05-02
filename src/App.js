import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import Details from "./components/details";
import Error from "./components/error";

import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/deatails" element={<Details/>} />
      <Route path="*" element={<Error/>} />

     </Routes>
     
    </>
  );
}

export default App;
