import "./TextInput.css";
import propTypes from "prop-types";
function TextInput(props){
    if(props.title){
        return(
            <div className="card text-input">
                <h3>{props.title}</h3>
                <div className="text">
                    <input type="text" name="" id="" placeholder="Insira Aqui" />
                </div>
            </div>
        );
    }else{
        return(
            <div className="card text-input">
                <div className="text">
                    <input type="text" name="" id="" placeholder="Insira Aqui" />
                </div>
            </div>
        );
    }
}
TextInput.propTypes = {
    title: propTypes.string,
}
export default TextInput;