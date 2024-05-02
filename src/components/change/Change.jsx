import "./Change.css"
import React,{ useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
function Change() {
    const [className, setClassName] = useState("change");
    const buttonChange = useRef(null);
    const changeDiv = useRef(null);

    useEffect(() => {
        document.getElementById('changediv').addEventListener("click", handleChangeClick);
      return() => {/*when dismantle do this;*/
        document.getElementById('changediv').removeEventListener("click", handleChangeClick);
      }
    })
  
    function handleChangeClick(){
      if(changeDiv.current.className == "change-open")setClassName("change");
      else setClassName("change-open");
    }


    return(
        <div id="changediv" className={className} ref={changeDiv}>
            <div className="info">
                <h2>Which one?</h2>
                <div id="croll" className="croll" ><img src="/croll.png" alt="" /></div>
                <div className="info-row">
                    <Link to="/" className="card">
                        <img src="/s.jpg" alt="" />
                        <h3>Global</h3>
                    </Link>
                    <Link to="/lh" className="card">
                        <img src="/lh.jpg" alt="" />
                        <h3>Lewis&nbsp;Hamilton</h3>
                    </Link>
                    <Link to="/cl" className="card">
                        <img src="/cl.jpg" alt="" />
                        <h3>Charles&nbsp;Leclerc</h3>
                    </Link>
                </div>
                <div className="info-row">
                    <Link to="/cs" className="card">
                        <img src="/cs.jpg" alt="" />
                        <h3>Carlos&nbsp;Sainz</h3>
                    </Link>
                    <Link to="/mv" className="card">
                        <img src="/mv.jpg" alt="" />
                        <h3>Max&nbsp;Verstappen</h3>
                    </Link>
                </div>
            </div>
            <input type="button" value={"Whoops?"} ref={buttonChange}/>
        </div>
    );
}
export default Change