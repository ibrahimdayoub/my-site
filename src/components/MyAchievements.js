import { motion } from 'framer-motion';
import { PaddingContainer, Heading, BlueText } from './styled-components/Global.styled';
import { fadeInBottomVariant, fadeInTopVariant } from '../utils/Variants';
import { Achievements } from "../utils/Data"
import Achievement from './layouts/Achievement';

const MyAchievements = () => {
    return (
        <PaddingContainer id="my-achievements" left="1%" right="1%" responsiveTop="20%" responsiveLeft="1rem" responsiveRight="1rem">
            <Heading
                as={motion.h4}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                size="h4"
                responsivealign="center"
            >
                MY ACHIEVEMENTS
            </Heading>
            <Heading
                as={motion.h4}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                size="h2"
                top="0.5rem"
                responsivealign="center"
            >
                What
                <motion.p style={{ display: "inline", marginLeft: "10px" }} variants={fadeInBottomVariant} initial="hidden" whileInView="visible">
                    <BlueText> I've earned <span style={{ fontSize: "16px" }}>({Achievements.length})</span></BlueText>
                </motion.p>
            </Heading>
            {Achievements.map((achievement, index) => (
                <PaddingContainer top="2.5rem" bottom="2.5rem">
                    <Achievement achievement={achievement} rowReverse={index % 2 === 0 ? true : false} />
                </PaddingContainer>
            ))}
        </PaddingContainer>
    );
};

export default MyAchievements;