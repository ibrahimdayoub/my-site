import { PaddingContainer, Heading, FlexContainer, ParaText, Container } from '../styled-components/Global.styled';
import { AchievementContentContainer, AchievementImageContainer, SkillCard, AchievementImage, AchievementImageLink } from '../styled-components/MyAchievements.styled';
import { FaCertificate, FaIdCard, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { theme } from '../../utils/Theme';
import { zoomInVariant, flipVariant } from '../../utils/Variants';

const Achievement = ({ achievement, $rowreverse }) => {
    return (
        <FlexContainer $rowreverse={$rowreverse ? true : false} $fullwidthchild $hasbg>
            <AchievementContentContainer
                as={motion.div}
                variants={zoomInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
            >
                <FlexContainer>
                    <Heading as="h3" $size="h3" $bottom="0.5rem" $responsivealign="center"><FaCertificate style={{ marginBottom: -2.5, color: theme.colors.secondary }} /> {achievement.title}</Heading>
                </FlexContainer>
                {
                    achievement.description ?
                        <ParaText as="p" $bottom="0.5rem" $responsivealign="center"
                            dangerouslySetInnerHTML={{ __html: achievement.description }}
                        />
                        :
                        null
                }
                <Container>
                    <ParaText as="p" $top="0.25rem" $bottom="0.25rem" $responsivealign="center" style={{ color: theme.colors.secondary }}>
                        <FaCalendarAlt style={{ margin: "0px 2px -2px 0px" }} /> {achievement.date}
                    </ParaText>
                    <ParaText as="p" $bottom="0.25rem" $responsivealign="center" style={{ color: theme.colors.secondary }}>
                        <FaIdCard style={{ margin: "0px 2px -2px 0px" }} /> {achievement.credentialId}
                    </ParaText>
                    <ParaText as="p" $bottom="0.25rem" $responsivealign="center" style={{ color: theme.colors.secondary }}>
                        <FaAward style={{ margin: "0px 2px -2px 0px" }} /> {achievement.issuer}
                    </ParaText>
                </Container>
                <PaddingContainer $top="0.5rem">
                    <FlexContainer $responsivegap="0.25rem" $gap="0.5rem" $responsiveflex $responsivejustify="center" style={{ flexWrap: "wrap" }}>
                        {
                            achievement.skills.map((tool, index) => {
                                return (
                                    <SkillCard key={index} $bg={achievement.color}>{tool}</SkillCard>
                                )
                            })
                        }
                    </FlexContainer>
                </PaddingContainer>
            </AchievementContentContainer>
            {
                achievement.image ?
                    <AchievementImageContainer
                        $justify={$rowreverse ? "flex-start" : "flex-end"}
                        as={motion.div}
                        variants={flipVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.35 }}
                    >
                        <AchievementImageLink href={achievement.file ? achievement.file : achievement.image} download={achievement.file ? true : `Ibrahim Dayoub - ${achievement.title}`}>
                            <AchievementImage
                                src={achievement.image}
                                alt={achievement.image?.split("/")[3]?.split(".")[0]}
                                loading="lazy"
                            />
                        </AchievementImageLink>
                    </AchievementImageContainer> :
                    null
            }
        </FlexContainer>
    )
}

export default Achievement