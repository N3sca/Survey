import "./TextBigInput.css";
import React, { useRef } from "react";
function TextBigInput(){

    const textareaRef = useRef(null);
    const autogrow = () => {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }

    return(
        <div className="card text-big-input">
            <h3>Text Big Input</h3>
            <div className="textbig">
                <textarea ref={textareaRef} rows={1} placeholder="Insira Aqui" onInput={autogrow}></textarea>
            </div>
        </div>
    );
}
export default TextBigInput;