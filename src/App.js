import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800)
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been Enabled.', 'success');
      // document.title = 'TextXpress - DarkMode';

      // setInterval(()=>{
      //   document.title = 'TextXpress is Amazing';
      // }, 2000);
      
      // setInterval(()=>{
      //   document.title = 'Install TextXpress Now';
      // }, 1500);

    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled.', 'success');
      // document.title = 'TextXpress - LightMode';
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextXpress" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About mode={mode} title={'TextXpress - About'}/>}></Route>	
        <Route path="/" element={<TextForm showAlert={showAlert} heading="TextXpress - Text Manipulation Tool" mode={mode} title={'TextXpress - Home'}/>}></Route>	
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
