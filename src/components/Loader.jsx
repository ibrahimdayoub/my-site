import { motion } from 'framer-motion';
import { LoaderLogo, LoaderParent, LoadingBar } from './styled-components/Loader.styled';
import { zoomInVariant } from '../utils/Variants';
import MyLogo from "../assets/logo.webp";

const Loader = () => {
  return (
    <LoaderParent>
      <LoaderLogo
        src={MyLogo}
        alt="logo"
        as={motion.img}
        variants={zoomInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      />
      <LoadingBar>
        <div />
      </LoadingBar>
    </LoaderParent>
  )
}

export default Loader;