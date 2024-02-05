import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, Container, IconContainer, MainBody } from './components/styled-components/Global.styled';
import { SpaceParent } from './components/styled-components/Space.styled';
import { FaArrowUp } from 'react-icons/fa';
import { theme } from './components/Theme';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import MyContact from './components/MyContact';
import Footer from './components/Footer';
import "./App.css"

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [matches, setMatches] = useState(window.matchMedia("(max-width: 350px)").matches)

  const toggleVisibility = () => {
    if (window.scrollY > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [])

  setTimeout(() => {
    setIsLoading(false)
  }, 2500);

  useEffect(() => {
    window
      .matchMedia("(max-width: 350px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        {
          isLoading ?
            <Loader /> :
            <>
              <Container>
                <Navbar />
                <SpaceParent />
                <Showcase />
                <SpaceParent />
                <MySkills />
                <SpaceParent />
                <MyProjects />
                <SpaceParent />
                <MyContact />
                <Button
                  style={{
                    visibility: isVisible ? 'visible' : 'hidden',
                    padding: matches ?  "5px" :"10px",
                    width: matches ? "30px" : "50px",
                    height: matches ? "30px" : "50px",
                    borderRadius: "100%",
                    position: "fixed",
                    bottom: "50px",
                    right: "25px",
                    border: "1px solid #fff",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: "1000",
                  }}
                  onClick={scrollToTop}
                >
                  <IconContainer color="blue" size="1.5rem" responsivesize2="1rem"><FaArrowUp /></IconContainer>
                </Button>
              </Container>
              <SpaceParent />
              <Footer />
            </>
        }
      </MainBody>
    </ThemeProvider>
  );
}

export default App;