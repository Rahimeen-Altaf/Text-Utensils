import React, {useState} from 'react'


export default function TextForm(props) {
  
  const [text, setText] = useState("");
  
  const handleOnChange = (event) => {
      setText(event.target.value)
    }

  const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = (event) => {
        setText("");
      }

      const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent == "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            if (toogle.innerHTML = "Speak") {
                window.speechSynthesis.cancel()
            }
        }
    }

    function capitalized(){
      var arr = text.split(" ")
      var c = arr.length
      var temp = ""
      while(c!==0){
          temp = arr[c-1].charAt(0).toUpperCase()+arr[c-1].substring(1).toLowerCase()+" "+temp
          c--;
      }
    
      setText(temp)
    }

    const reversed = () => {
      let str="";
      for (let index = text.length-1; index >=0; index--) {
        str+= text[index];
        
      }
      
       return setText(str);
    }
      
  return (
    <>
<div className="container">
    <h1>{props.heading}</h1>

 <form>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
 </form>

    <button className="btn btn-primary mx-2" onClick={handleUpClick}>UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button type="submit" className="btn btn-primary mx-2 my-2" onClick={speak}id="toggle">Speak</button>
    <button className="btn btn-primary mx-2" onClick={capitalized}>Capitalize</button>
    <button className="btn btn-primary mx-2" onClick={reversed}>Reverse</button>
</div>

<div className="container my-3">
  <h2>Your Text Summary</h2>
  <p>{wordCount(text)} words and {text.length} characters.</p>
  <p>{0.008 * wordCount(text)} Minutes Read.</p>
  <h2>Preview</h2>
  <p>{text}</p>
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
