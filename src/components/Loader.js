import { LoaderLogo, LoaderParent, LoadingBar } from './styled-components/Loader.styled'
import MyLogo from "../assets/logo.png"

const Loader = () => {
  return (
      <LoaderParent>
          <LoaderLogo src={MyLogo} alt="Logo"></LoaderLogo>
          <LoadingBar>
            <div/>
          </LoadingBar>
      </LoaderParent>
  )
}

export default Loader