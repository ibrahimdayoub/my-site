import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCode, HiDatabase, HiLightningBolt, HiPuzzle } from 'react-icons/hi';
import { FlexContainer, Heading, PaddingContainer, IconContainer, ParaText, BlueText } from './styled-components/Global.styled';
import { SkillsCardContainer, SkillsCard, SkillsTabsContainer, SkillsTabButton } from './styled-components/MySkills.styled';
import { fadeInTopVariant, fadeInBottomVariant, flipVariant } from '../utils/Variants';
import { FrontSkills, BackSkills, DatabaseSkills, ToolSkills } from '../utils/Data';

const MySkills = () => {
  const [$activeTab, setActiveTab] = useState('Frontend');

  const data = [
    {
      title: 'Frontend',
      icon: <HiCode />
    },
    {
      title: 'Backend',
      icon: <HiLightningBolt />
    },
    {
      title: 'Databases',
      icon: <HiDatabase />
    },
    {
      title: 'Tools',
      icon: <HiPuzzle />
    }
  ];

  const getActiveData = () => {
    switch ($activeTab) {
      case 'Frontend': return FrontSkills;
      case 'Backend': return BackSkills;
      case 'Databases': return DatabaseSkills;
      case 'Tools': return ToolSkills;
      default: return FrontSkills;
    }
  };

  return (
    <PaddingContainer id="my-skills" $left="1%" $right="1%" $responsiveleft="1rem" $responsiveright="1rem">
      <FlexContainer $responsivedirection="column-reverse" $responsiveflex $fullwidthchild>
        <motion.div
          variants={fadeInBottomVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <SkillsTabsContainer>
            {data.map((tab) => (
              <SkillsTabButton
                key={tab.title}
                title={tab.title}
                $active={$activeTab === tab.title}
                onClick={() => setActiveTab(tab.title)}
              >
                {tab.icon}
                <span className='title'>{tab.title}</span>
              </SkillsTabButton>
            ))}
          </SkillsTabsContainer>
          <SkillsCardContainer>
            <AnimatePresence mode='sync'>
              {getActiveData().map((skill) => (
                <SkillsCard
                  key={skill.tech}
                  title={skill.tech}
                  as={motion.div}
                  variants={flipVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                >
                  <IconContainer $size="1.5rem" $responsivesize2="1.5rem" $color="blue">
                    {skill.icon}
                  </IconContainer>
                  <Heading as="h5" $size="h5" $weight="300">{skill.tech}</Heading>
                </SkillsCard>
              ))}
            </AnimatePresence>
          </SkillsCardContainer>
        </motion.div>
        <motion.div
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <Heading as="h4" $size="h4" $responsivealign="center">MY SKILLS</Heading>
          <Heading as="h2" $size="h2" $top="0.5rem" $responsivealign="center">
            What
            <BlueText> I can do</BlueText>
          </Heading>
          <ParaText as="p" $top="2rem" $bottom="1.5rem" $responsivealign="center">
            <b>Front-End Specialist:</b> Engineering high-performance, responsive UIs with React.js and Redux, transforming complex designs into fluid, interactive experiences using modern CSS frameworks.
          </ParaText>
          <ParaText as="p" $bottom="1.5rem" $responsivealign="center">
            <b>Back-End Architect:</b> Designing robust server-side systems with Node.js and Laravel, focusing on scalable database schemas (SQL/NoSQL) and secure, efficient API workflows.
          </ParaText>
          <ParaText as="p" $bottom="1.5rem" $responsivealign="center">
            <b>System Visionary:</b> Building the "digital backbone" of applications by bridging the gap between scalable back-end architecture and seamless, production-ready user experiences.
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills;