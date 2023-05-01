import React from 'react'
import heroImage from '../assets/hero.jpeg'
import styled from 'styled-components'
import LazyLoad from 'react-lazy-load'

const StyledImage = styled.img`
  width: 100%;
  height: 90vh;
`

const HeroImage = () => {
  return (
    <div className="m--5">
      <LazyLoad offset={40}>
        <StyledImage src={heroImage} alt="Hero Image" />
      </LazyLoad>
    </div>
  )
}

export default HeroImage
