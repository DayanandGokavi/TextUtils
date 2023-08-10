import React, {useState/*Hooks*/} from "react"; //rfc shortcut
export default function TextFrom(props) {
  const handleUpClick = () =>{
    // console.log("Upper case was clicked" +text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () =>{
    // console.log("Lower case was clicked" +text);
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleClrClick = () =>{ 
    let newText=('');
    setText(newText);
  }
  const handleCpyClick = () =>{
    console.log("Text has been copied" +text);
    navigator.clipboard.writeText(text)
    alert("Copied");
    //let newText=text.c;
    //setText(newText);
  }
  const handleOnChange = (event) =>{
    console.log("on changed");
    setText(event.target.value);
  }
  const[text,setText]=useState('');//state and hooks
  //text="ajadsjk"; Wrong way to change the text
  //setText("ajfdkj"); Correct way to change the text
  return (  
    <>
      <div className="container"style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea  className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2"  onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2"  onClick={handleClrClick}>Clear Text</button>
        <button className="btn btn-primary mx-2"  onClick={handleCpyClick}>Copy Text</button>
      </div>  
      <div className="container my-3"style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2> 
        <p>words {text.split (" ").length} and {text.length}</p>
        <p>{0.008 * text.split (" ").length}  Minutes to read the word</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Your text'}</p>
      </div>
    </>
  );
}
