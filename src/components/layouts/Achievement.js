import { PaddingContainer, Heading, FlexContainer, ParaText, Container } from '../styled-components/Global.styled';
import { AchievementContentContainer, AchievementImageContainer, SkillCard, AchievementImage, AchievementImageLink } from '../styled-components/MyAchievements.styled';
import { FaCertificate, FaIdCard, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Achievement = ({ achievement, rowReverse }) => {
    return (
        <FlexContainer rowReverse={rowReverse ? true : false} fullWidthChild hasBg>
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
                    <Heading as="h5" size="h5" top="0.25rem" bottom="0.25rem" responsivealign="center" style={{ color: "#7eadfc", textTransform: "uppercase" }}> <FaCalendarAlt style={{ marginRight: "5px" }} /> {achievement.date}</Heading>
                    <Heading as="h5" size="h5" top="0.25rem" bottom="0.25rem" responsivealign="center" style={{ color: "#7eadfc", textTransform: "uppercase" }}> <FaIdCard style={{ marginRight: "5px" }} /> {achievement.credentialId}</Heading>
                    <Heading as="h5" size="h5" top="0.25rem" bottom="0.25rem" responsivealign="center" style={{ color: "#7eadfc", textTransform: "uppercase" }}> <FaAward style={{ marginRight: "5px" }} /> {achievement.issuer}</Heading>
                </Container>
                <PaddingContainer top="0.5rem">
                    <FlexContainer gap="0.5rem" responsiveFlex responsivejustify="center" style={{ flexWrap: "wrap" }}>
                        {
                            achievement.skills.map((tool,index) => {
                                return (
                                    <SkillCard key={index} bg={achievement.color}>{tool}</SkillCard>
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