import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, ButtonAlt, Container, IconContainer, MainBody } from './components/styled-components/Global.styled';
import { SpaceParent } from './components/styled-components/Space.styled';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { theme } from './utils/Theme';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import MySkills from './components/MySkills';
import MyStats from './components/MyStats';
import MyProjects from './components/MyProjects';
import MyAchievements from './components/MyAchievements';
import MyContact from './components/MyContact';
import Stars from './components/Stars';
import Footer from './components/Footer';
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isBottomVisible, setIsBottomVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const toggleVisibility = () => {
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    // Appear when user scrolls down more than 250px
    if (scrolled > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Disappear when user is close to the bottom (less than 250px remaining)
    if (fullHeight - (scrolled + viewportHeight) > 250) {
      setIsBottomVisible(true);
    } else {
      setIsBottomVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  setTimeout(() => {
    setIsLoading(false)
  }, 2500);

  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Stars />
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
                <MyStats />
                <SpaceParent />
                <MyAchievements />
                <SpaceParent />
                <MyContact />
                <SpaceParent />
                {/* Scroll to Top Button */}
                <ButtonAlt
                  style={{
                    visibility: isVisible ? 'visible' : 'hidden',
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    position: "fixed",
                    bottom: "125px",
                    right: "25px",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: "1000",
                  }}
                  onClick={scrollToTop}
                >
                  <IconContainer $color="blue" $size="1rem"><FaArrowUp /></IconContainer>
                </ButtonAlt>
                {/* Scroll to Bottom Button */}
                <ButtonAlt
                  style={{
                    visibility: isBottomVisible ? 'visible' : 'hidden',
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    position: "fixed",
                    bottom: "75px",
                    right: "25px",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: "1000",
                  }}
                  onClick={scrollToBottom}
                >
                  <IconContainer $color="blue" $size="1rem"><FaArrowDown /></IconContainer>
                </ButtonAlt>
                <SpaceParent />
              </Container>
              <Footer />
            </>
        }
      </MainBody>
    </ThemeProvider>
  );
}

export default App;