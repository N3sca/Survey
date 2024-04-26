import "./CheckboxInput.css";
function CheckboxInput(){

    return(
        <div className="card checkbox-input">
            <h3>Check box Input</h3>
            <div className="checkbox">
                <label><input type="checkbox" name="" id="" /> CheckBox 1</label>
                <label><input type="checkbox" name="" id="" /> CheckBox 2</label>
                <label><input type="checkbox" name="" id="" /> CheckBox 3</label>
                <label><input type="checkbox" name="" id="" /> Other: <input type="text" /></label>
            </div>
        </div>
    )
}
export default CheckboxInput;