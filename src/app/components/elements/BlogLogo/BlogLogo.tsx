import styled from 'styled-components'
import logo from '../../../assets/logo.png'

const LogoContainer = styled.div`
  img {
    flex: 1;
    width: 100%;
    max-width: 300px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const BlogLogo = () => {
  return (
    <LogoContainer>
      <img
        src={logo}
        alt="Blog Logo"
      />
    </LogoContainer>
  )
}

export default BlogLogo
