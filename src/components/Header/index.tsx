import { HeaderContainer } from './styled'
import blogLogo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={blogLogo} alt="github blog logo" />
    </HeaderContainer>
  )
}
