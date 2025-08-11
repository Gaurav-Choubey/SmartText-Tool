import React , {useState} from 'react'



export default function Textform(props) {
    const handleUpclick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
         setText(newText)
         props.showAlert("converted to uppercase!","success");

        
    }
        const handleLoclick = ()=>{
        // console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("converted to lowercase!","success");

        
    }
          const handleClearclick = ()=>{
        // console.log("Lowercase was clicked " + text);
        let newText = '';
         setText(newText)
         props.showAlert("Texted was clared!","success");
         

        
    }
     const handlecopy = () => {
    var text = document.getElementById("mybox");
    console.log("Lowercase was clicked " + text.value);
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied!", "success");
}


    const handleonchange =(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const handlespace = ()=>{
        // console.log("Lowercase was clicked " + text);
        let newText = text.split(/[ ]+/);
         setText(newText.join(" "))
          props.showAlert("Extra space was removed!","success");

        
    }







    const [text , setText] = useState('');
    // setText("Yaha se likhe");
  return (
    <>
    <div className="container"style ={{color:props.mode==='dark'?'white':' #01031d'}} >
          <h1>{props.heading}</h1>
          <div className="mb-3">
          
          <textarea className="form-control" value ={text} onChange ={handleonchange} style ={{backgroundColor:props.mode==='dark'?'#111535':'white', color:props.mode==='dark'?'white':' #01031d'}}  id="mybox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert to Uppercase </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 " onClick={handleLoclick}>Convert to Lowerrcase </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearclick}> Clear text </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopy}> Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 " onClick={handlespace}> Remove Extra space</button>
          
    </div>
        
    <div className="container my-2 mb-3"style ={{color:props.mode==='dark'?'white':' #01031d'}}>
        <h1>Your text summary </h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here!"}</p>

    </div>
    </>
  )
}
