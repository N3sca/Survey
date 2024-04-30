import React,{ useState, useEffect, useRef } from 'react';
import useLocalStorage from "use-local-storage";

import LHSurvey from './components/survey/LHSurvey.jsx';

import Change from './components/change/Change.jsx';
import Footer from './components/footer/Footer.jsx';
function LewisHamiltonSurvey(){
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [themeIsDark, setThemeIsDark] = useLocalStorage("themeIsDark", preference);
    return(
        <div className='App' data-theme={themeIsDark ? "dark" : "light"}>
      
        <LHSurvey />

        <Change />
        <Footer />
        </div>
    );
}
export default LewisHamiltonSurvey