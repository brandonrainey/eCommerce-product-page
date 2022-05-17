import React, { useState } from 'react'
import Image from 'next/image'

export default function MobileProductImages() {
  const [mobileImage, setMobileImage] = useState(1)

  function handleNextClick() {
    if (mobileImage != 4) {
      setMobileImage(mobileImage + 1)
    } else {
      setMobileImage(1)
    }
  }

  function handlePreviousClick() {
    if (mobileImage != 1) {
      setMobileImage(mobileImage - 1)
    } else {
      setMobileImage(4)
    }
  }

  return (
    <div className="mobileImageContainer">
      <div className="iconWrapper">
        <div className="imgPrevious">
          <button
            className="imgCircle prevButton"
            onClick={handlePreviousClick}
          >
            <Image
              src="/icon-previous.svg"
              layout="fixed"
              height={18}
              width={12}
              className="arrowIcon"
              alt="previous arrow icon"
            />
          </button>
        </div>
        <div className="imgNext">
          <button className="imgCircle nextButton" onClick={handleNextClick}>
            <Image
              src="/icon-next.svg"
              layout="fixed"
              height={18}
              width={12}
              alt="next arrow icon"
            />
          </button>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Image
          src={`/image-product-${mobileImage}.jpg`}
          layout="responsive"
          height={300}
          width={300}
          alt="product image"
          placeholder="blur"
          blurDataURL={`/image-product-${mobileImage}.jpg`}
          priority={true}
        />
      </div>
    </div>
  )
}
