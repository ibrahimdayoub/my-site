import { PaddingContainer, Heading, FlexContainer, ParaText, Container } from '../styled-components/Global.styled';
import { AchievementContentContainer, AchievementImageContainer, SkillCard, AchievementImage, AchievementImageLink } from '../styled-components/MyAchievements.styled';
import { FaCertificate, FaIdCard, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Achievement = ({ achievement, rowReverse }) => {
    return (
        <FlexContainer rowReverse={rowReverse ? true : false} fullWidthChild bg={achievement.bg}>
            <AchievementContentContainer
                as={motion.div}
                variants={rowReverse ? fadeInRightVariant : fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                <FlexContainer>
                    <Heading as="h3" size="h3" bottom="0.5rem" responsivealign="center"><FaCertificate style={{ marginBottom: -2.5, color: "#7eadfc" }} /> {achievement.title}</Heading>
                </FlexContainer>
                {
                    achievement.description ?
                        <ParaText bottom="0.5rem" responsivealign="center"
                            dangerouslySetInnerHTML={{ __html: achievement.description }}
                        />
                        :
                        null
                }
                <Container>
                    <Heading as="h4" size="h4" top="0.25rem" bottom="0.25rem" responsivealign="center" style={{ color: "#7eadfc" }}> <FaAward style={{ marginRight: "5px" }} /> {achievement.issuer}</Heading>
                    <Heading as="h4" size="h4" top="0.25rem" bottom="0.25rem" responsivealign="center" style={{ color: "#7eadfc" }}> <FaCalendarAlt style={{ marginRight: "5px" }} /> {achievement.date}</Heading>
                    <Heading as="h4" size="h4" top="0.25rem" bottom="0.25rem" responsivealign="center" style={{ color: "#7eadfc" }}> <FaIdCard style={{ marginRight: "5px" }} /> {achievement.credentialId}</Heading>
                </Container>
                <PaddingContainer top="0.5rem">
                    <FlexContainer gap="0.5rem" responsiveFlex responsivejustify="center" style={{ flexWrap: "wrap" }}>
                        {
                            achievement.skills.map((tool) => {
                                return (
                                    <SkillCard>{tool}</SkillCard>
                                )
                            })
                        }
                    </FlexContainer>
                </PaddingContainer>
            </AchievementContentContainer>
            {
                achievement.image ?
                    <AchievementImageContainer
                        justify={rowReverse ? "flex-start" : "flex-end"}
                        as={motion.div}
                        variants={rowReverse ? fadeInLeftVariant : fadeInRightVariant}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <AchievementImageLink href={achievement.file ? achievement.file : achievement.image} download={achievement.file ? true : `Ibrahim Dayoub - ${achievement.title}`}>
                            <AchievementImage
                                src={achievement.image}
                                alt={achievement.image?.split("/")[3]?.split(".")[0]}
                            />
                        </AchievementImageLink>
                    </AchievementImageContainer> :
                    null
            }
        </FlexContainer>
    )
}

export default Achievement