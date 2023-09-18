import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
    }, 1500)
  };

  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been Enabled.', 'success');
      document.title = 'TextXpress - DarkMode';

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
      document.title = 'TextXpress - LightMode';
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
