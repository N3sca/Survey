import "./survey-main.css";

import CheckboxInput from "./checkbox-input/CheckboxInput.jsx";
import DateInput from "./date-input/DateInput.jsx";
import RadioInput from "./radio-input/RadioInput.jsx";
import TextBigInput from "./text-big-input/TextBigInput.jsx";
import TextInput from "./text-input/TextInput.jsx";
import TimerInput from "./timer-input/TimerInput.jsx";

function survey(){
    return(
        <div className='survey'>
            <div className='header'>
                <img src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg" alt="Banner" />
                <div className="info">
                    <h1>New Survey</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique lectus metus, non maximus turpis tempus iaculis. Curabitur faucibus consectetur sapien, ac vestibulum felis vulputate ac. Sed tempus viverra tellus ut luctus. Fusce rutrum turpis quis pharetra congue. Fusce id ligula eu lectus auctor pellentesque. Morbi porttitor volutpat risus, facilisis sagittis risus dictum vitae. Fusce condimentum accumsan justo vitae mollis.</p>
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
export default survey