import React, { useState } from 'react'
import Image from 'next/image'

export default function Lightbox({ setOpenLightbox }) {
  const [lightboxImage, setLightboxImage] = useState(1)

  const [closeIcon, setCloseIcon] = useState('/icon-close-white.svg')

  const [previousIcon, setPreviousIcon] = useState('/icon-previous.svg')

  const [nextIcon, setNextIcon] = useState('/icon-next.svg')

  function handleNextClick() {
    if (lightboxImage != 4) {
      setLightboxImage(lightboxImage + 1)
    } else {
      setLightboxImage(1)
    }
  }

  function handlePreviousClick() {
    if (lightboxImage != 1) {
      setLightboxImage(lightboxImage - 1)
    } else {
      setLightboxImage(4)
    }
  }

  function changeBackground(e) {
    e.target.style.background = 'red'
  }

  return (
    <div className="lightboxContainer">
      <div className="lightboxWrapper">
        <div
          style={{ width: '40%', marginBottom: '-30px', textAlign: 'right' }}
        >
          <Image
            src={`${closeIcon}`}
            layout="fixed"
            width={20}
            height={20}
            onMouseEnter={() => setCloseIcon('/icon-close-orange.svg')}
            onMouseLeave={() => setCloseIcon('/icon-close-white.svg')}
            onClick={() => setOpenLightbox(false)}
            style={{ cursor: 'pointer' }}
            alt="close icon"
          />
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '-20px',
          }}
        >
          <div
            style={{
              width: 'auto',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <div
              className="imgCircleDesktop"
              onClick={handlePreviousClick}
              onMouseEnter={() => setPreviousIcon('/icon-previous-orange.svg')}
              onMouseLeave={() => setPreviousIcon('/icon-previous.svg')}
            >
              <Image
                src={`${previousIcon}`}
                layout="fixed"
                width={10}
                height={15}
                alt="previous arrow icon"
              />
            </div>
          </div>
          <div
            style={{ width: '40%', borderRadius: '10px', overflow: 'hidden' }}
          >
            <Image
              src={`/image-product-${lightboxImage}.jpg`}
              layout="responsive"
              width={300}
              height={300}
              alt="lightbox product image"
            />
          </div>
          <div
            style={{
              width: 'auto',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <div
              className="imgCircleDesktop"
              style={{ marginLeft: '-20px' }}
              onClick={handleNextClick}
              onMouseEnter={() => setNextIcon('/icon-next-orange.svg')}
              onMouseLeave={() => setNextIcon('/icon-next.svg')}
            >
              <Image
                src={`${nextIcon}`}
                layout="fixed"
                width={10}
                height={15}
                alt="next arrow icon"
              />
            </div>
          </div>
        </div>

        <div className="lightboxThumbnailWrapper">
          <div
            style={{
              width: '100%',
              outline: lightboxImage == 1 ? '3px solid var(--Orange)' : '',
              borderRadius: '10px',
            }}
          >
            <div
              style={{ width: '100%', overflow: 'hidden', cursor: 'pointer' }}
              className={`thumbImg ${
                lightboxImage == 1 ? 'thumbSelected' : ''
              }`}
              onClick={() => setLightboxImage(1)}
            >
              <Image
                src={`/image-product-1-thumbnail.jpg`}
                layout="responsive"
                width={30}
                height={30}
                alt="product-1-thumbnail"
              />
            </div>
          </div>

          <div
            style={{
              width: '100%',
              outline: lightboxImage == 2 ? '3px solid var(--Orange)' : '',
              borderRadius: '10px',
            }}
          >
            <div
              style={{ width: '100%', overflow: 'hidden', cursor: 'pointer' }}
              className={`thumbImg ${
                lightboxImage == 2 ? 'thumbSelected' : ''
              }`}
              onClick={() => setLightboxImage(2)}
            >
              <Image
                src={`/image-product-2-thumbnail.jpg`}
                layout="responsive"
                width={30}
                height={30}
                alt="product-2-thumbnail"
              />
            </div>
          </div>

          <div
            style={{
              width: '100%',
              outline: lightboxImage == 3 ? '3px solid var(--Orange)' : '',
              borderRadius: '10px',
            }}
          >
            <div
              style={{ width: '100%', overflow: 'hidden', cursor: 'pointer' }}
              className={`thumbImg ${
                lightboxImage == 3 ? 'thumbSelected' : ''
              }`}
              onClick={() => setLightboxImage(3)}
            >
              <Image
                src={`/image-product-3-thumbnail.jpg`}
                layout="responsive"
                width={30}
                height={30}
                alt="product-3-thumbnail"
              />
            </div>
          </div>

          <div
            style={{
              width: '100%',
              outline: lightboxImage == 4 ? '3px solid var(--Orange)' : '',
              borderRadius: '10px',
            }}
          >
            <div
              style={{ width: '100%', overflow: 'hidden', cursor: 'pointer' }}
              className={`thumbImg ${
                lightboxImage == 4 ? 'thumbSelected' : ''
              }`}
              onClick={() => setLightboxImage(4)}
            >
              <Image
                src={`/image-product-4-thumbnail.jpg`}
                layout="responsive"
                width={30}
                height={30}
                alt="product-4-thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
