import { motion } from 'framer-motion';
import { PaddingContainer, Heading, BlueText } from './styled-components/Global.styled';
import { StatsGrid, StatCard, StatNumber, StatTitle } from './styled-components/MyStats.styled';
import { fadeInBottomVariant, fadeInTopVariant, staggerContainerVariant } from '../utils/Variants';
import { Stats } from "../utils/Data"


import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const MyStats = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.35
    });

    return (
        <PaddingContainer id="my-stats" $left="1%" $right="1%" $responsivetop="20%" $responsiveleft="1rem" $responsiveright="1rem">
            <Heading
                as={motion.h4}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                $size="h4"
                $responsivealign="center"
            >
                MY STATS
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
                <BlueText> I've lived</BlueText>
            </Heading>
            <StatsGrid
                as={motion.div}
                variants={staggerContainerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
            >
                {Stats.map((stat, index) => (
                    <StatCard
                        key={stat.id}
                        as={motion.div}
                        variants={fadeInBottomVariant}
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{ once: true, amount: 0.35 }}
                    >
                        <div className="bg-icon">{stat.icon}</div>
                        <StatNumber ref={ref}>
                            {
                                inView ? (
                                    <CountUp
                                        end={parseInt(stat.number)}
                                        duration={2.5}
                                        delay={index * 0.35}
                                        suffix={stat.number.includes('+') ? '+' : ''}
                                    // enableScrollSpy
                                    // scrollSpyOnce
                                    />
                                ) : (
                                    '0'
                                )
                            }
                        </StatNumber>
                        <StatTitle>{stat.title}</StatTitle>
                    </StatCard>
                ))}
            </StatsGrid>
        </PaddingContainer>
    );
}

export default MyStats;