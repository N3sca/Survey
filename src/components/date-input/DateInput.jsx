import "./DateInput.css";
import propTypes from "prop-types";
function DateInput(props){

    if(props.title){
        return(
            <div className="card date-input">
                <h3>{props.title}</h3>
                <div className="date">
                    <input type="date" name="" id="" />
                </div>
            </div>
        );
    }else{
        return(
            <div className="card date-input">
                <div className="date">
                    <input type="date" name="" id="" />
                </div>
            </div>
        );
    }
}
DateInput.propTypes = {
    title: propTypes.string,
}
export default DateInput;