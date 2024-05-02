import "./survey-main.css";

import CheckboxInput from "./checkbox-input/CheckboxInput.jsx";
import DateInput from "./date-input/DateInput.jsx";
import RadioInput from "./radio-input/RadioInput.jsx";
import TextBigInput from "./text-big-input/TextBigInput.jsx";
import TextInput from "./text-input/TextInput.jsx";
import TimerInput from "./timer-input/TimerInput.jsx";
function CLSurvey(){
    return(
        <div className='survey'>
            <div className='header'>
                <img src="/ch.jpg" alt="Banner" />
                <div className="info">
                    <h1>Charles Leclerc</h1>
                    <p>Charles Marc Hervé Perceval Leclerc (French pronunciation: born 16 October 1997) is a Monégasque racing driver, currently racing in Formula One for Scuderia Ferrari. He won the GP3 Series championship in 2016 and the FIA Formula 2 Championship in 2017.</p>
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
export default CLSurvey;