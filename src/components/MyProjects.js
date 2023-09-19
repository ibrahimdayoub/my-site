import { useState } from 'react';
import { motion } from 'framer-motion';
import {PaddingContainer,Heading,BlueText} from './styled-components/Global.styled';
import { fadeInBottomVariant, fadeInTopVariant } from '../utils/Variants';
import { TopProjects, MoreProjects } from "../utils/Data"
import { FaChevronDown } from 'react-icons/fa';
import Project from './layouts/Project';

const MyProjects = () => {
    const [openMore, setOpenMore] = useState(false)
    return (
        <PaddingContainer id="my-projects" left="1%" right="1%" responsiveTop="20%" responsiveLeft="1rem" responsiveRight="1rem">
            <Heading
                as={motion.h4}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                size="h4"
                responsivealign="center"
            >
                MY PROJECTS
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
                    <BlueText>I have built <span style={{ fontSize: "16px" }}>({TopProjects.length})</span></BlueText>
                </motion.p>
            </Heading>
            {TopProjects.map((project, idx) => {
                return (
                    <PaddingContainer top="2.5rem" bottom="2.5rem">
                        <Project project={project} rowReverse={idx % 2 === 0 ? true : false} />
                    </PaddingContainer>
                )
            })}
            <Heading
                as={motion.h4}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                size="h2"
                top="0.5rem"
                responsivealign="center"
                onClick={()=>setOpenMore(!openMore)}
            >
                Click to
                <motion.p style={{ display: "inline", marginLeft: "10px" }} variants={fadeInBottomVariant} initial="hidden" whileInView="visible">
                    <BlueText>see {openMore ? "less" : "more"}
                        <span style={{ fontSize: "16px", marginLeft: "5px" }}>
                            {
                                openMore ?
                                    `(${MoreProjects.length})` :
                                    <FaChevronDown />
                            }
                        </span>
                    </BlueText>
                </motion.p>
            </Heading>
            {openMore && MoreProjects.map((project, idx) => {
                return (
                    <PaddingContainer top="2.5rem" bottom="2.5rem">
                        <Project project={project} rowReverse={idx % 2 === 1 ? true : false} />
                    </PaddingContainer>
                )
            })}
        </PaddingContainer>
    )
}

export default MyProjects