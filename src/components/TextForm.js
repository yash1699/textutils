import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLcClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleClearClick = ()=> {
        setText("");
        props.showAlert("Text cleared", "success");
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", "success");
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const onMouseOverEvent = (event)=>{
        event.target.style.caretColor = props.mode==='dark'?'white':'black';
    }

    const [text, setText] = useState("");
    console.log(document.body.style.backgroundColor);
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter text here" style={{backgroundColor: props.mode==='dark'?'#8f8f8f':'white',
                   color: props.mode==='dark'?'white':'black' }} onMouseOver={onMouseOverEvent}></textarea>
            </div>
            <button className={`btn btn-${props.darkColor==='blue'?'primary': props.darkColor==='red'?'danger': props.darkColor==='green'?'success':'dark'} mx-1 my-1`} onClick={handleUpClick}>Convert to UpperCase</button>
            <button className={`btn btn-${props.darkColor==='blue'?'primary': props.darkColor==='red'?'danger': props.darkColor==='green'?'success':'dark'} mx-1 my-1`} onClick={handleLcClick}>Convert to LowerCase</button>
            <button className={`btn btn-${props.darkColor==='blue'?'primary': props.darkColor==='red'?'danger': props.darkColor==='green'?'success':'dark'} mx-1 my-1`} onClick={handleClearClick}>Clear</button>
            <button className={`btn btn-${props.darkColor==='blue'?'primary': props.darkColor==='red'?'danger': props.darkColor==='green'?'success':'dark'} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
            <button className={`btn btn-${props.darkColor==='blue'?'primary': props.darkColor==='red'?'danger': props.darkColor==='green'?'success':'dark'} mx-1 my-1`} onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>

        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{(text.match(/\S+/g))?(text.match(/\S+/g)).length:0} words and {text.length} characters</p>
            <p>{0.008 * (text.split(" ").length)} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"/*Enter something to preview it here.*/"}</p>
        </div>
        </>
    )
}
 