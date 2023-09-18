import React, {useState} from 'react'


export default function TextForm(props) {
  
  const [text, setText] = useState("");
  
  const handleOnChange = (event) => {
      setText(event.target.value)
    }

  const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to UpperCase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to LowerCase!", "success");
    }

    const handleClearClick = (event) => {
        setText("");
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!", "success");
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
      const toogle = document.getElementById('toggle')
      if (toogle.textContent === "Speak") {
          toogle.innerHTML = "Stop"
      }
      else {
          if (toogle.innerHTML = "Speak") {
              window.speechSynthesis.cancel()
          }
      }
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed!", "success");
    }

    const capitalized = () => {
      var arr = text.split(" ")
      var c = arr.length
      var temp = ""
      while(c!==0){
          temp = arr[c-1].charAt(0).toUpperCase()+arr[c-1].substring(1).toLowerCase()+" "+temp
          c--;
      }
      setText(temp);
      props.showAlert("Text Captilized!", "success");
    }

    const reversed = () => {
      let str="";
      for (let index = text.length-1; index >=0; index--) {
        str+= text[index];
      }
      props.showAlert("Text Reversed!", "success");
       return setText(str);
    }
      
  return (
    <>
<div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} placeholder='write something' onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button type="submit" className="btn btn-primary mx-2 my-2" onClick={speak}id="toggle">Speak</button>
    <button className="btn btn-primary mx-2" onClick={capitalized}>Capitalize</button>
    <button className="btn btn-primary mx-2" onClick={reversed}>Reverse</button>
</div>

<div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
  <h2>Your Text Summary</h2>
  <p>{wordCount(text)} words and {text.length} characters.</p>
  <p>{0.008 * wordCount(text)} Minutes Read.</p>
  <h2>Preview</h2>
  <p>{text.length>0 ? text : "Enter Text To Preview It Here."}</p>
</div>

    </>
  )
}

const wordCount = (text) => {
  return text.replace(/\n/g, " ")
  .split(' ')
  .filter(text => text !== "")
  .length
};
