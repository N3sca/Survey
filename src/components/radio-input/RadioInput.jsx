import "./RadioInput.css";
function RadioInput(){

    return(
        <div className="card radio-input">
            <h3>Radio Input</h3>
            <div className="radio2">
                <div className="radio">
                    <label></label>
                    <label>Very Bad</label>
                </div>
                <div className="radio">
                    <label>1</label>
                    <input type="radio" name="" />
                </div>
                <div className="radio">
                    <label>2</label>
                    <input type="radio" name="" />
                </div>
                <div className="radio">
                    <label>3</label>
                    <input type="radio" name="" />
                </div>
                <div className="radio">
                    <label>4</label>
                    <input type="radio" name="" />
                </div>
                <div className="radio">
                    <label></label>
                    <label>Very Good</label>
                </div>
            </div>
        </div>
    );
}
export default RadioInput