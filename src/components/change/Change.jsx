import "./Change.css"
import React,{ useState, useEffect, useRef } from 'react';
function Change() {
    const [className, setClassName] = useState("change");
    const buttonChange = useRef(null);
    const changeDiv = useRef(null);

    useEffect(() => {
        buttonChange.current.addEventListener("click", handleChangeClick);
      return() => {//when dismantle do this;
        buttonChange.current.removeEventListener("click", handleChangeClick);
      }
    }, [])
  
    function handleChangeClick(){
      if(changeDiv.current.className == "change-open") {
        setClassName("change");
        document.getElementById("croll").style.display = "none";
        }else{ 
            setClassName("change-open");
            setTimeout(() => {
                document.getElementById("croll").style.display = "block";
            }, 1000);
        }
    }


    return(
        <div className={className} ref={changeDiv}>
            <div className="info">
                <h2>Which one?</h2>
                <div id="croll" className="croll" ><img src="/croll.png" alt="" /></div>
                <div className="info-row">
                    <div className="card">
                        <img src="/s.jpg" alt="" />
                        <h3>Lewis&nbsp;Hamilton</h3>
                    </div>
                    <div className="card">
                        <img src="/s.jpg" alt="" />
                        <h3>Max&nbsp;Verstappen</h3>
                    </div>
                    <div className="card">
                        <img src="/s.jpg" alt="" />
                        <h3>Charles&nbsp;Leclerc</h3>
                    </div>
                </div>
                <div className="info-row">
                    <div className="card">
                        <img src="/s.jpg" alt="" />
                        <h3>Carlos&nbsp;Sainz</h3>
                    </div>
                    <div className="card">
                        <img src="/s.jpg" alt="" />
                        <h3>Charles&nbsp;Leclerc</h3>
                    </div>
                </div>
            </div>
            <input type="button" value={"Whoops?"} ref={buttonChange}/>
        </div>
    );
}
export default Change