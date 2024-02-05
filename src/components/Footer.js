import { PaddingContainer } from "./styled-components/Global.styled"
import { Contact, Footer as FooterElement } from "./styled-components/Footer.styled"
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"

const Footer = () => {
    return (
        <PaddingContainer>
            <FooterElement>
                <Contact>
                    <FaPhoneAlt style={{ fontSize: "16px", marginRight: "5px" }} />
                    <a
                        href="tel:+963997791807"
                        style={{
                            textDecoration: "none",
                            color: "white"
                        }}
                    >
                        +963997791807
                    </a>
                </Contact>
                <Contact>
                    <FaEnvelope style={{ fontSize: "16px", marginRight: "5px" }} />
                    <a
                        href="mailto:ibrahimdayoub@gmail.com"
                        style={{
                            textDecoration: "none",
                            color: "white"
                        }}
                    >
                        ibrahimdayoub@gmail.com
                    </a>
                </Contact>
            </FooterElement>
        </PaddingContainer>
    )
}

export default Footer