import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { FlexContainer, Heading, PaddingContainer, IconContainer, ParaText, BlueText } from './styled-components/Global.styled'
import { SkillsCardContainer, SkillsCard, SkillsTabsContainer, SkillsTabButton } from './styled-components/MySkills.styled'
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'
import { FrontSkills, BackSkills, DatabaseSkills, ToolSkills } from '../utils/Data'

import { HiCode, HiDatabase, HiTerminal, HiLightningBolt, HiCog, HiAcademicCap, HiColorSwatch, HiPuzzle } from 'react-icons/hi';

const MySkills = () => {
  const [activeTab, setActiveTab] = useState('Frontend')

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
    switch (activeTab) {
      case 'Frontend': return FrontSkills;
      case 'Backend': return BackSkills;
      case 'Databases': return DatabaseSkills;
      case 'Tools': return ToolSkills;
      default: return FrontSkills;
    }
  };

  return (
    <PaddingContainer id="my-skills" left="1%" right="1%" responsiveLeft="1rem" responsiveRight="1rem">
      <FlexContainer responsiveDirection="column-reverse" responsiveFlex fullWidthChild>
        <div >
          <SkillsTabsContainer as={motion.div} variants={fadeInLeftVariant} initial="hidden" whileInView="visible">
            {data.map((tab) => (
              <SkillsTabButton
                key={tab.title}
                active={activeTab === tab.title}
                onClick={() => setActiveTab(tab.title)}
                title={tab.title}
              >
                {tab.icon}
                <span className='title'>{tab.title}</span>
              </SkillsTabButton>
            ))}
          </SkillsTabsContainer>

          <SkillsCardContainer
            as={motion.div}
            layout
            variants={fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
          >
            <AnimatePresence mode='wait'>
              {getActiveData().map((skill) => (
                <SkillsCard
                  key={skill.tech}
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  title={skill.tech}
                >
                  <IconContainer size="1.5rem" responsivesize2="1.5rem" color="blue">
                    {skill.icon}
                  </IconContainer>
                  <Heading as="h5" size="h5" weight="300">{skill.tech}</Heading>
                </SkillsCard>
              ))}
            </AnimatePresence>
          </SkillsCardContainer>
        </div>
        <motion.div variants={fadeInRightVariant} initial="hidden" whileInView="visible">
          <Heading as="h4" size="h4" responsivealign="center">MY SKILLS</Heading>
          <Heading as="h2" size="h2" top="0.5rem" responsivealign="center">
            What
            <motion.p style={{ display: "inline", marginLeft: "10px" }} variants={fadeInBottomVariant} initial="hidden" whileInView="visible">
              <BlueText>I can do</BlueText>
            </motion.p>
          </Heading>
          <ParaText top="2rem" bottom="1.5rem" responsivealign="center">
            As a <b>Full-stack Developer</b>, I specialize in crafting high-performance front-end experiences. By leveraging <b>JavaScript</b> and <b>React.js</b>, I build responsive, dynamic user interfaces that are as functional as they are visually compelling. With a deep mastery of <b>Redux</b> and modern <b>CSS frameworks</b>, I transform complex designs into interactive, fluid web applications.
          </ParaText>
          <ParaText responsivealign="center">
            On the server side, I architect robust back-end systems using <b>Node.js</b> and <b>Laravel</b>. My expertise spans both <b>Relational</b> and <b>NoSQL</b> databases, enabling me to design efficient schemas, build secure APIs, and manage data workflows that scale. I don’t just write code; I build the digital backbone that powers seamless user experiences.
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills