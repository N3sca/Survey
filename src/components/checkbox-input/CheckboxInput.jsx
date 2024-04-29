import "./CheckboxInput.css";
import propTypes from "prop-types";
function CheckboxInput(props){

    if(props.title){
        return(
            <div className="card checkbox-input">
                <h3>{props.title}</h3>
                <div className="checkbox">
                    <label><input type="checkbox" name="" id="" /> CheckBox 1</label>
                    <label><input type="checkbox" name="" id="" /> CheckBox 2</label>
                    <label><input type="checkbox" name="" id="" /> CheckBox 3</label>
                    <label><input type="checkbox" name="" id="" /> Other: <input type="text" /></label>
                </div>
            </div>
        );
    }else{
        return(
            <div className="card checkbox-input">
                <div className="checkbox">
                    <label><input type="checkbox" name="" id="" /> CheckBox 1</label>
                    <label><input type="checkbox" name="" id="" /> CheckBox 2</label>
                    <label><input type="checkbox" name="" id="" /> CheckBox 3</label>
                    <label><input type="checkbox" name="" id="" /> Other: <input type="text" /></label>
                </div>
            </div>
        );
    }
}
CheckboxInput.propTypes = {
    title: propTypes.string,
}
export default CheckboxInput;