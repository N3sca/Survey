import "./TimerInput.css";
import propTypes from "prop-types";
function TimerInput(props){
    if(props.title){
        return(
            <div className="card timer-input">
                <h3>{props.title}</h3>
                <div className="time">
                    <input type="time" name="" id="" />
                </div>
            </div>
        );
    }else{
        return(
            <div className="card timer-input">
                <div className="time">
                    <input type="time" name="" id="" />
                </div>
            </div>
        )
    }
}
TimerInput.propTypes = {
    title: propTypes.string,
}
export default TimerInput;