import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { PaddingContainer, FlexContainer, Heading, BlueText, ParaText, Particle, Button, IconContainer, FlexContainerAlt } from './styled-components/Global.styled';
import { ShowcaseImageCard, ShowcaseParticleContainer, IconContainerAlt } from './styled-components/Showcase.styles';
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import ShowcaseImg from '../assets/showcase-img.webp';
import ParticleImg from '../assets/particle.webp';

const Showcase = () => {
    const Resume = "./Ibrahim-Dayoub-Resume.pdf";

    return (
        <PaddingContainer $left="1%" $right="1%" $responsiveleft="1rem" $responsiveright="1rem">
            <FlexContainerAlt $responsivealign="center" $fullwidthchild>
                <motion.div
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                >
                    <Heading as="h4" $size="h4" $top="0.25rem" $bottom="0.5rem" $responsivealign="center">Hello!</Heading>
                    <Heading as="h2" $size="h2" $top="0.25rem" $bottom="1rem" $responsivealign="center">
                        I'm <BlueText>Ibrahim Dayoub</BlueText>
                    </Heading>
                    <Heading as="h3" $size="h3" $responsivealign="center">
                        I'm a
                        {" "}
                        <BlueText>
                            <TypeAnimation
                                sequence={[
                                    'Software Engineer',
                                    1000,
                                    'Full-Stack Developer',
                                    1000,
                                    'Back-End Developer',
                                    1000,
                                    'Front-End Developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={20}
                                repeat={Infinity}
                            />
                        </BlueText>
                    </Heading>
                    <ParaText as="p" $top="1.5rem" $bottom="2.5rem" $responsivealign="center">
                        Solution-oriented Full-Stack Engineer with <b>3+ years</b> of experience delivering scalable digital ecosystems. Expert at transforming complex business logic into seamless user experiences using modern frameworks. Proven track record in fast-paced environments, focusing on robust architecture, team collaboration, and high-standard execution.
                    </ParaText>
                    <FlexContainer $responsiveflex $justify="space-between" $align="center" $gap="5px">
                        <FlexContainer $gap="20px" $responsivegap2="5px" $responsiveflex>
                            <IconContainerAlt
                                href='https://linkedin.com/in/ibrahimdayoub'
                                target='_blank'
                                rel="noreferrer"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <BsLinkedin />
                            </IconContainerAlt>
                            <IconContainerAlt
                                href='https://github.com/ibrahimdayoub'
                                target='_blank'
                                rel="noreferrer"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <BsGithub />
                            </IconContainerAlt>
                            <FloatingWhatsApp
                                phoneNumber="+963997791807"
                                accountName="Ibrahim Dayoub"
                                avatar={ShowcaseImg}
                                placeholder="Type your message here..."
                                statusMessage="Online - Replies within 1 hour"
                                chatMessage="Hello! How can I help you today?"
                                messageDelay={0.75}
                            />
                        </FlexContainer>
                        <Button
                            download
                            href={Resume}
                            style={{ display: "flex", gap: "5px", alignItems: "center", textDecoration: "none" }}
                            $responsivepadding2="0.25rem 0.5rem"
                        >
                            <span style={{ marginRight: "5px" }}>Resume</span>
                            <IconContainer $color="blue" $size="1.5rem"><FaCloudDownloadAlt /></IconContainer>
                        </Button>
                    </FlexContainer>
                </motion.div>
                <FlexContainer $justify="flex-end">
                    <ShowcaseParticleContainer
                        as={motion.div}
                        variants={fadeInRightVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.35 }}
                    >
                        <ShowcaseImageCard $background={ShowcaseImg}>
                            <img src={ShowcaseImg} alt="showcase" loading="lazy" />
                        </ShowcaseImageCard>
                        <Particle src={ParticleImg} $initialtop="-40px" $initialleft="20px" $rotate="60deg" $delay="-1" />
                        <Particle src={ParticleImg} $initialtop="120px" $initialright="-80px" $rotate="40deg" $delay="-2" />
                        <Particle src={ParticleImg} $initialbottom="10px" $initialleft="-10px" $rotate="50deg" $delay="-3" />
                    </ShowcaseParticleContainer>
                </FlexContainer>
            </FlexContainerAlt>
        </PaddingContainer>
    )
}

export default Showcase;