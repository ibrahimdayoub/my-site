import { motion } from 'framer-motion';
import { PaddingContainer, Heading, BlueText } from './styled-components/Global.styled';
import Achievement from './layouts/Achievement';
import { fadeInTopVariant, fadeInBottomVariant } from '../utils/Variants';
import { Achievements } from "../utils/Data";

const MyAchievements = () => {
    return (
        <PaddingContainer id="my-achievements" $left="1%" $right="1%" $responsivetop="20%" $responsiveleft="1rem" $responsiveright="1rem">
            <Heading
                as={motion.h4}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                $size="h4"
                $responsivealign="center"
            >
                MY ACHIEVEMENTS
            </Heading>
            <Heading
                as={motion.h4}
                variants={fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                $size="h2"
                $top="0.5rem"
                $responsivealign="center"
            >
                What
                <BlueText> I've earned <span style={{ fontSize: "16px" }}>({Achievements.length})</span></BlueText>
            </Heading>
            {Achievements.map((achievement, index) => (
                <PaddingContainer key={index} $top="2.5rem" $bottom="2.5rem">
                    <Achievement achievement={achievement} $rowreverse={index % 2 === 0 ? true : false} />
                </PaddingContainer>
            ))}
        </PaddingContainer>
    );
};

export default MyAchievements;