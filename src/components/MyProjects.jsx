import { useState } from 'react';
import { motion } from 'framer-motion';
import { PaddingContainer, Heading, BlueText } from './styled-components/Global.styled';
import { fadeInTopVariant, fadeInBottomVariant } from '../utils/Variants';
import { TopProjects, MoreProjects } from "../utils/Data"
import Project from './layouts/Project';

const MyProjects = () => {
    const [openMore, setOpenMore] = useState(false)
    return (
        <PaddingContainer id="my-projects" $left="1%" $right="1%" $responsivetop="20%" $responsiveleft="1rem" $responsiveright="1rem">
            <Heading
                as={motion.h4}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                $size="h4"
                $responsivealign="center"
            >
                MY PROJECTS
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
                <BlueText> I've built {/*<span style={{ fontSize: "16px" }}>({TopProjects.length})</span>*/}</BlueText>
            </Heading>
            {TopProjects.map((project, index) => {
                return (
                    <PaddingContainer key={index} $top="2.5rem" $bottom="2.5rem">
                        <Project project={project} index={index} $rowreverse={index % 2 === 0 ? true : false} />
                    </PaddingContainer>
                )
            })}
            {
                !openMore && <Heading
                    as={motion.h4}
                    variants={fadeInTopVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    $size="h2"
                    $top="0.5rem"
                    $responsivealign="center"
                    onClick={() => setOpenMore(!openMore)}
                    style={{ cursor: "pointer" }}
                >
                    See
                    <BlueText> more..</BlueText>
                </Heading>
            }
            {openMore && MoreProjects.map((project, index) => {
                return (
                    <PaddingContainer key={index} $top="2.5rem" $bottom="2.5rem">
                        <Project index={index} project={project} $rowreverse={index % 2 === 1 ? true : false} />
                    </PaddingContainer>
                )
            })}
        </PaddingContainer>
    )
}

export default MyProjects;