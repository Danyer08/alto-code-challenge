import React, { useState } from 'react'
import LazyLoad from 'react-lazy-load'

const Image = ({ src, alt }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <LazyLoad className='d-flex justify-content-center'>
      <React.Fragment>
        {isLoading && <div className="loader"></div>}
        <img src={src} alt={alt} onLoad={handleImageLoad} />
      </React.Fragment>
    </LazyLoad>
  )
}

export default Image
