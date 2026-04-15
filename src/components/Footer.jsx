import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Footer, Socials, Copyright } from "./styled-components/Footer.styled";

const FooterComponent = () => {
    return (
        <Footer>
            <Socials>
                <a href="https://wa.me/963997791807" target="_blank"><FaWhatsapp /></a>
                <a href="mailto:ibrahimdayoub619@gmail.com" target="_blank"><FaEnvelope /></a>
                <a href="https://github.com/ibrahimdayoub" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/ibrahimdayoub" target="_blank"><FaLinkedin /></a>
                <a href="https://www.youtube.com/@ibrahimdayoub619" target="_blank"><FaYoutube /></a>
            </Socials>
            <Copyright>
                © {new Date().getFullYear()} Ibrahim Dayoub | Code. Create. Inspire.
            </Copyright>
        </Footer>
    );
};

export default FooterComponent;