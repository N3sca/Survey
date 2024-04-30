import "./RadioInput.css";
import propTypes from "prop-types";
function RadioInput(props){

    if(props.title){
        return(
            <div className="card radio-input">
                <h3>{props.title}</h3>
                <div className="radio2">
                    <div className="radio">
                        <label></label>
                        <label>Very Bad</label>
                    </div>
                    <div className="radio">
                        <label>1</label>
                        <input type="radio" name={props.title} />
                    </div>
                    <div className="radio">
                        <label>2</label>
                        <input type="radio" name={props.title} />
                    </div>
                    <div className="radio">
                        <label>3</label>
                        <input type="radio" name={props.title} />
                    </div>
                    <div className="radio">
                        <label>4</label>
                        <input type="radio" name={props.title} />
                    </div>
                    <div className="radio">
                        <label></label>
                        <label>Very Good</label>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div className="card radio-input">
                <div className="radio2">
                    <div className="radio">
                        <label></label>
                        <label>Very Bad</label>
                    </div>
                    <div className="radio">
                        <label>1</label>
                        <input type="radio" name={props.title} />
                    </div>
                    <div className="radio">
                        <label>2</label>
                        <input type="radio" name={props.title} />
                    </div>
                    <div className="radio">
                        <label>3</label>
                        <input type="radio" name={props.title} />
                    </div>
                    <div className="radio">
                        <label>4</label>
                        <input type="radio" name={props.title} />
                    </div>
                    <div className="radio">
                        <label></label>
                        <label>Very Good</label>
                    </div>
                </div>
            </div>
        );
    }
}
RadioInput.propTypes = {
    title: propTypes.string,
}
export default RadioInput