import React from 'react'
import heroImage from '../assets/hero.jpeg'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 100%;
  height: 90vh;
`

const HeroImage = () => {
  return <StyledImage src={heroImage} alt="Hero Image" />
}

export default HeroImage
