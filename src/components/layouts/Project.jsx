import { PaddingContainer, Heading, FlexContainer, ParaText, IconContainer, ButtonAlt2, } from '../styled-components/Global.styled';
import { ProjectContentContainer, ProjectImageContainer, TechStackCard, ProjectImage, ProjectImageLink, } from '../styled-components/MyProjects.styled';
import { FaGithub, FaLink, FaPlay, FaMagic, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { theme } from '../../utils/Theme';
import { zoomInVariant, blurVariant } from '../../utils/Variants';

const Project = ({ project, index, $rowreverse }) => {
    return (
        <FlexContainer $rowreverse={$rowreverse ? true : false} $fullwidthchild>
            <ProjectContentContainer
                as={motion.div}
                variants={zoomInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
            >
                <FlexContainer>
                    <Heading as="h3" $size="h3" $bottom="0.5rem" $responsivealign="center">{index + 1}. {project.name}</Heading>
                </FlexContainer>
                {
                    project.description ?
                        <ParaText as="p" $bottom="0.5rem" $responsivealign="center"
                            dangerouslySetInnerHTML={{ __html: project.description }}
                        />
                        :
                        null
                }
                <ParaText as="p" $top="0.25rem" $bottom="0.25rem" $responsivealign="center" style={{ color: theme.colors.secondary }}>
                    <FaBriefcase style={{ margin: "0px 2px -2px 0px" }} /> {project.role}
                </ParaText>
                <PaddingContainer $top="0.5rem">
                    <FlexContainer $responsivegap="0.25rem" $gap="0.5rem" $responsiveflex $responsivejustify="center" style={{ flexWrap: "wrap" }}>
                        {
                            project.tools.map((tool, index) => {
                                return (
                                    <TechStackCard key={index}>{tool}</TechStackCard>
                                )
                            })
                        }
                    </FlexContainer>
                </PaddingContainer>
                <FlexContainer $responsivegap="0.25rem" $gap="0.5rem" $responsiveflex $responsivejustify="center" style={{ flexWrap: "wrap" }}>
                    {
                        project.source_code ?
                            <ButtonAlt2 href={project.source_code} target='_blank' $setmxauto_ style={{ marginTop: "1rem", display: "flex", gap: "5px", alignItems: "center", textDecoration: "none" }}>
                                <span style={{ marginRight: "5px" }}>Code</span>
                                <IconContainer $color="blue" $responsivesize="0.75rem" $size="1rem"><FaGithub /></IconContainer>
                            </ButtonAlt2> :
                            null
                    }
                    {
                        project.live_link ?
                            <ButtonAlt2 href={project.live_link} target='_blank' $setmxauto_ style={{ marginTop: "1rem", display: "flex", gap: "5px", alignItems: "center", textDecoration: "none" }}>
                                <span style={{ marginRight: "5px" }}>Link</span>
                                <IconContainer $color="blue" $responsivesize="0.75rem" $size="1rem"><FaLink /></IconContainer>
                            </ButtonAlt2> :
                            null
                    }
                    {
                        project.related_link ?
                            <ButtonAlt2 href={project.related_link} target='_blank' $setmxauto_ style={{ marginTop: "1rem", display: "flex", gap: "5px", alignItems: "center", textDecoration: "none" }}>
                                <span style={{ marginRight: "5px" }}>Related</span>
                                <IconContainer $color="blue" $responsivesize="0.75rem" $size="1rem"><FaMagic /></IconContainer>
                            </ButtonAlt2> :
                            null
                    }
                    {
                        project.demo_link ?
                            <ButtonAlt2 href={project.demo_link} target='_blank' $setmxauto_ style={{ marginTop: "1rem", display: "flex", gap: "5px", alignItems: "center", textDecoration: "none" }}>
                                <span style={{ marginRight: "5px" }}>Demo</span>
                                <IconContainer $color="blue" $responsivesize="0.75rem" $size="1rem"><FaPlay /></IconContainer>
                            </ButtonAlt2> :
                            null
                    }
                </FlexContainer>
            </ProjectContentContainer>
            {
                project.image ?
                    <ProjectImageContainer
                        $justify={$rowreverse ? "flex-start" : "flex-end"}
                        as={motion.div}
                        variants={blurVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.35 }}
                    >
                        <ProjectImageLink href={project.image} download={`Ibrahim Dayoub - ${project.name}`}>
                            <ProjectImage
                                src={project.image}
                                alt={project.image?.split("/")[3]?.split(".")[0]}
                                loading="lazy"
                                $secret={project.is_$secret}
                            />
                        </ProjectImageLink>
                    </ProjectImageContainer> :
                    null
            }
        </FlexContainer>
    )
}

export default Project;