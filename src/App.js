import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [darkColor, setDarkColor] = useState('light');

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toogleMode = (color)=>{
    if(color === 'light'){
      setMode('light');
      setDarkColor('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
    else{
      setMode('dark');
      if(color === 'blue'){
        setDarkColor('blue');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark Blue mode has been enabled", "success");
      }
      else if(color === 'red') {
        setDarkColor('red');
        document.body.style.backgroundColor = "#850909";
        showAlert("Dark Red mode has been enabled", "success");
      }
      else{
        setDarkColor('green');
        document.body.style.backgroundColor = "#106115";
        showAlert("Dark Green mode has been enabled", "success");
      }
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3"> 
      <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
            <TextForm showAlert= {showAlert} heading="Enter the Text to analyze below" mode={mode} darkColor={darkColor}/>
            </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
 