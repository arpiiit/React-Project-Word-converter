import React, {useState} from 'react';


export default function TextForm(props){
    const handleUpClick=()=>{
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handledownClick=()=>{
        console.log("Lowecase was clicked");
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        console.log("clear text was clicked");
        let newText='';
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const [text, setText]=useState('');
    return (
        <>
        <div className='container'>
           <h1>{props.heading}</h1>
  
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>convert to Uppercase</button>
<button className='btn btn-primary mx-2' onClick={handledownClick}>convert to Lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>

        </div>

        <div className="container my-2">
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length-1} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} reading time in Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
    );
}

 