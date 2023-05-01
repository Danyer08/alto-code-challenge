import React, { useState } from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazy-load'

const StyledImage = styled.img`
  width: 100%;
  height: 90vh;
`

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 16px solid var(--primary);
  border-radius: 50%;
  border-top: 16px solid var(--primary-light);
  border-right: 16px solid var(--primary-light);
  border-bottom: 16px solid var(--primary-light);
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  z-index: 1;
`

const HeroImage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }
  return (
    <div className="m--5">
      <LazyLoad>
        <React.Fragment>
          {isLoading && <StyledLoader></StyledLoader>}
          <StyledImage
            src="https://picsum.photos/2560/1440"
            alt="Hero Image"
            onLoad={handleImageLoad}
          />
        </React.Fragment>
      </LazyLoad>
    </div>
  )
}

export default HeroImage
