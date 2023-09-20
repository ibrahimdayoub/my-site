import { motion } from 'framer-motion'
import { FlexContainer, Heading, PaddingContainer, IconContainer, ParaText, BlueText } from './styled-components/Global.styled'
import { SkillsCardContainer, SkillsCard } from './styled-components/MySkills.styled'
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'
import { Skills } from '../utils/Data'

const MySkills = () => {
  return (
    <PaddingContainer id="my-skills" left="1%" right="1%" responsiveLeft="1rem" responsiveRight="1rem">
      <FlexContainer responsiveDirection="column-reverse" responsiveFlex fullWidthChild>
        <SkillsCardContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          {Skills.map((skill) => (
            <SkillsCard key={skill.id}>
              <IconContainer size="2.5rem" responsivesize2="1.5rem" color="blue">
                {skill.icon}
              </IconContainer>
              <Heading as="h4" size="h4">{skill.tech}</Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>
        <motion.div variants={fadeInRightVariant} initial="hidden" whileInView="visible">
          <Heading as="h4" size="h4" responsivealign="center">MY SKILLS</Heading>
          <Heading as="h2" size="h2" top="0.5rem" responsivealign="center">
            What
            <motion.p style={{ display: "inline", marginLeft: "10px" }} variants={fadeInBottomVariant} initial="hidden" whileInView="visible">
              <BlueText>I can do</BlueText>
            </motion.p>
          </Heading>
          <ParaText top="2rem" bottom="1.5rem" responsivealign="center">As a developer, I have extensive experience in front-end web development. I am skilled in JavaScript and ReactJs. My strong experience in building responsive and dynamic user interfaces using Redux and CSS frameworks like Bootstrap has allowed me to create attractive and interactive web applications.</ParaText>
          <ParaText responsivealign="center">Also, I have extensive experience in back-end web development. I am skilled in NodeJs and Laravel, and I have knowledge of both relational and non-relational databases. I can build and develop web servers, create APIs, and efficiently manage databases.</ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills