import { LoaderLogo, LoaderParent, LoadingBar } from './styled-components/Loader.styled'
import MyLogo from "../assets/logo.webp"
import { motion } from 'framer-motion'
import { blurVariant } from '../utils/Variants'

const Loader = () => {
  return (
    <LoaderParent>
      <LoaderLogo
        src={MyLogo}
        alt="logo"
        as={motion.img}
        variants={blurVariant}
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

export default Loader