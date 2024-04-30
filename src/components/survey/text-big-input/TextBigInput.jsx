import "./TextBigInput.css";
import React, { useRef } from "react";
import propTypes from "prop-types";
function TextBigInput(props){

    const textareaRef = useRef(null);
    const autogrow = () => {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }

    if(props.title){
        return(
            <div className="card text-big-input">
                <h3>{props.title}</h3>
                <div className="textbig">
                    <textarea ref={textareaRef} rows={1} placeholder="Insira Aqui" onInput={autogrow}></textarea>
                </div>
            </div>
        );
    }else{
        return(
            <div className="card text-big-input">
                <div className="textbig">
                    <textarea ref={textareaRef} rows={1} placeholder="Insira Aqui" onInput={autogrow}></textarea>
                </div>
            </div>
        );
    }
    
}
TextBigInput.propTypes = {
    title: propTypes.string,
}
export default TextBigInput;