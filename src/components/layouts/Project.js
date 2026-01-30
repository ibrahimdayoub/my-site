import { PaddingContainer, Heading, FlexContainer, ParaText, IconContainer, ButtonAlt2, } from '../styled-components/Global.styled';
import { ProjectContentContainer, ProjectImageContainer, TechStackCard, ProjectImage, ProjectImageLink, } from '../styled-components/MyProjects.styled';
import { FaGithub, FaLink, FaPenAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Project = ({ project, index, rowReverse }) => {
    return (
        <FlexContainer rowReverse={rowReverse ? true : false} fullWidthChild>
            <ProjectContentContainer
                as={motion.div}
                variants={rowReverse ? fadeInRightVariant : fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                <FlexContainer>
                    <Heading as="h3" size="h3" bottom="0.5rem" responsivealign="center">{index + 1}. {project.name}</Heading>
                </FlexContainer>
                {
                    project.description ?
                        <ParaText bottom="0.5rem" responsivealign="center"
                            dangerouslySetInnerHTML={{ __html: project.description }}
                        />
                        :
                        null
                }
                {/* {
                    project.description ?
                        <ParaText bottom="0.5rem" responsivealign="center">{project.description}</ParaText> :
                        null
                } */}
                <FlexContainer>
                    <Heading as="h4" size="h4" top="0.75rem" bottom="0.5rem" responsivealign="center" style={{ color: "#7eadfc" }}> <FaPenAlt style={{ marginRight: "5px" }} /> {project.role}</Heading>
                </FlexContainer>
                <PaddingContainer top="0.5rem">
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
                <FlexContainer gap="0.5rem" responsiveFlex responsivejustify="center" style={{ flexWrap: "wrap" }}>
                    {
                        project.source_code ?
                            <ButtonAlt2 href={project.source_code} target='_blank' setMXAuto_ style={{ marginTop: "1rem", display: "flex", gap: "5px", alignItems: "center", textDecoration: "none" }}>
                                <span style={{ marginRight: "5px" }}>Code</span>
                                <IconContainer color="blue" size="1rem"><FaGithub /></IconContainer>
                            </ButtonAlt2> :
                            null
                    }
                    {
                        project.live_link ?
                            <ButtonAlt2 href={project.live_link} target='_blank' setMXAuto_ style={{ marginTop: "1rem", display: "flex", gap: "5px", alignItems: "center", textDecoration: "none" }}>
                                <span style={{ marginRight: "5px" }}>Link</span>
                                <IconContainer color="blue" size="1rem"><FaLink /></IconContainer>
                            </ButtonAlt2> :
                            null
                    }
                </FlexContainer>
            </ProjectContentContainer>
            {
                project.image ?
                    <ProjectImageContainer
                        justify={rowReverse ? "flex-start" : "flex-end"}
                        as={motion.div}
                        variants={rowReverse ? fadeInLeftVariant : fadeInRightVariant}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <ProjectImageLink href={project.image} download={`Ibrahim Dayoub - ${project.name}`}>
                            <ProjectImage
                                src={project.image}
                                alt={project.image?.split("/")[3]?.split(".")[0]}
                                secret={project.is_secret}
                            />
                        </ProjectImageLink>
                    </ProjectImageContainer> :
                    null
            }
        </FlexContainer>
    )
}

export default Project