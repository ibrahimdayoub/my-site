import {PaddingContainer,Heading,FlexContainer,ParaText,IconContainer,ButtonAlt2,} from '../styled-components/Global.styled';
import {ProjectContentContainer,ProjectImageContainer,TechStackCard,ProjectImage,} from '../styled-components/MyProjects.styled';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Project = ({ project, rowReverse }) => {
    return (
        <FlexContainer rowReverse={rowReverse ? true : false} fullWidthChild>
            <ProjectContentContainer
                as={motion.div}
                variants={rowReverse ? fadeInRightVariant : fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                <FlexContainer gap="1rem">
                    <Heading as="h3" size="h3" bottom="0.5rem" responsivealign="center">{project.id + 1}- {project.name}</Heading>
                </FlexContainer>
                <PaddingContainer top="1rem">
                    <FlexContainer gap="0.5rem" responsiveFlex responsivejustify="center" style={{ flexWrap: "wrap" }}>
                        {
                            project.tools.map((tool) => {
                                return (
                                    <TechStackCard>{tool}</TechStackCard>
                                )
                            })
                        }
                    </FlexContainer>
                </PaddingContainer>
                {
                    project.description ?
                        <ParaText top="1rem" responsivealign="center">{project.description}</ParaText> :
                        null
                }
                <ButtonAlt2 href={project.source_code} target='_blank' setMXAuto style={{ marginTop:"1rem", display: "flex", gap: "5px", alignItems: "center", textDecoration: "none" }}>
                    <span style={{ marginRight: "5px" }}>Source Code</span>
                    <IconContainer color="blue" size="1rem"><FaGithub /></IconContainer>
                </ButtonAlt2>
            </ProjectContentContainer>
            <ProjectImageContainer
                justify={rowReverse ? "flex-start" : "flex-end"}
                as={motion.div}
                variants={rowReverse ? fadeInLeftVariant : fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
            >
                <ProjectImage src={project.image} alt="project" />
            </ProjectImageContainer>
        </FlexContainer>
    )
}

export default Project