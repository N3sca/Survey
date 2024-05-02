import React,{ useState, useEffect, useRef } from 'react';
import useLocalStorage from "use-local-storage";

import SurveyMain from './components/survey/survey-main.jsx';

import {Outlet} from 'react-router-dom'

import Change from './components/change/Change.jsx';
import Footer from './components/footer/Footer.jsx';
function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [themeIsDark, setThemeIsDark] = useLocalStorage("themeIsDark", preference);

  return (
    <div className='App' data-theme={themeIsDark ? "dark" : "light"}>
      
      <Outlet />
      
      <Change />
      <Footer />
    </div>
  )
}
export default App
