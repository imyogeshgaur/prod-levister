import React,{useState} from "react";
import Home from "./Components/Home";
import Service from "./Components/Service";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./assets/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Alert from "./assets/Alert";



const App = () => {
  const [mode, setMode] = useState("light");

  const ToggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="black"
    }else{
      setMode("light");
      document.body.style.backgroundColor="white"
    }
  }

  const showAlert = (message,type)=>{
      <Alert message={message} type={type} />
  }
  return (
    <>
      <Navbar mode={mode} ToggleMode={ToggleMode}/>
      <Switch>
        <Route exact path="/">
            <Home mode={mode} />
        </Route>
        <Route exact path="/about">
          <About mode={mode} />
        </Route>
        <Route exact path="/service">
            <Service mode={mode}/>
        </Route>
        <Route exact path="/contact">
          <Contact mode={mode} showAlert={showAlert}/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
