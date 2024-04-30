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
                <img src="/lw.png" alt="Banner" />
                <div className="info">
                    <h1>Lewis Hamilton</h1>
                    <p>Sir Lewis Carl Davidson Hamilton (born 7 January 1985) is a British racing driver competing in Formula One, driving for Mercedes. Hamilton has won a joint-record seven Formula One World Drivers' Championship titles (tied with Michael Schumacher), and holds the records for most number of wins (103), pole positions (104), and podium finishes (197), among other records.</p>
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