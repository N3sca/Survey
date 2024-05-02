import "./survey-main.css";

import CheckboxInput from "./checkbox-input/CheckboxInput.jsx";
import DateInput from "./date-input/DateInput.jsx";
import RadioInput from "./radio-input/RadioInput.jsx";
import TextBigInput from "./text-big-input/TextBigInput.jsx";
import TextInput from "./text-input/TextInput.jsx";
import TimerInput from "./timer-input/TimerInput.jsx";
function LHSurvey(){
    return(
        <div className='survey'>
            <div className='header'>
                <img src="/ca.png" alt="Banner" />
                <div className="info">
                    <h1>Carlos Sainz</h1>
                    <p>Carlos Sainz Vázquez de Castro (Spanish pronunciation: born 1 September 1994) is a Spanish racing driver currently competing in Formula One for Scuderia Ferrari.</p>
                </div>
            </div>

            <TextInput title="Text Input"/>
            <TextBigInput title="Big Text Input"/>
            <TimerInput title="Timer Input"/>
            <DateInput title="Date Input"/>
            <CheckboxInput title="CheckBox Input"/>
            <RadioInput title="Radio Input"/>

            <div className='footer'>
                <h4>We thanks for the Colaboration!</h4>
                <input type="button" value="Submit"/>
            </div>
        </div>
    );
}
export default LHSurvey;