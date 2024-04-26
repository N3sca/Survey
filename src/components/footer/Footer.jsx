import "./Footer.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-regular-svg-icons";
import {faLinkedin, faGithub, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
function Footer(){
    return(
        <footer>
            <div className="socials">
                <a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://github.com/N3sca" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <p>Copyright <FontAwesomeIcon icon={faCopyright} /> 2024, All rights reserved.</p>
        </footer>
    )
}
export default Footer;