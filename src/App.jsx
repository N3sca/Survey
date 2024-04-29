import React,{ useState, useEffect, useRef } from 'react';
import useLocalStorage from "use-local-storage";


import TextInput from './components/text-input/TextInput.jsx';
import TimerInput from './components/timer-input/TimerInput.jsx';
import DateInput from './components/date-input/DateInput.jsx';
import CheckboxInput from './components/checkbox-input/CheckboxInput.jsx';
import TextBigInput from './components/text-big-input/TextBigInput.jsx';
import RadioInput from './components/radio-input/RadioInput.jsx';

import Change from './components/change/Change.jsx';
import Footer from './components/footer/Footer.jsx';
function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [themeIsDark, setThemeIsDark] = useLocalStorage("themeIsDark", preference);

  return (
    <div className='App' data-theme={themeIsDark ? "dark" : "light"}>
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

      <Change />
      <Footer />
    </div>
  )
}
export default App
