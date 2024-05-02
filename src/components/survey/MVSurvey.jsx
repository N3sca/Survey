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
                <img src="/ma.jpg" alt="Banner" />
                <div className="info">
                    <h1>Max Verstappen</h1>
                    <p>Max Emilian Verstappen (Dutch pronunciation: born 30 September 1997) is a Belgian and Dutch racing driver competing in Formula One under the Dutch flag for Red Bull Racing, with whom he is the 2021, 2022, and 2023 World Champion.</p>
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