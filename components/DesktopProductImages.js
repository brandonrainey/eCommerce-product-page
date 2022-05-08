import React, { useState } from 'react'
import Image from 'next/image'

export default function DesktopProductImages() {
  const [desktopImage, setDesktopImage] = useState(1)

  return (
    <div className="desktopProductContainer">
      <div
        style={{
          width: '100%',
          marginBottom: 60,
          borderRadius: '14px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={`/image-product-${desktopImage}.jpg`}
          layout="responsive"
          width={300}
          height={300}
        />
      </div>

      <div className="imageThumbnails">
        <div
          className="thumbWrapper"
          style={{
            outline: desktopImage == 1 ? '5px solid var(--Orange)' : '',
            borderRadius: 14,
          }}
        >
          <div
            style={{
              width: '100%',
              borderRadius: '14px',
              overflow: 'hidden',
              opacity: desktopImage == 1 ? '0.5' : '',
            }}
            onClick={() => setDesktopImage(1)}
          >
            <Image
              src="/image-product-1-thumbnail.jpg"
              layout="responsive"
              width={30}
              height={30}
            />
          </div>
        </div>

        <div
          className="thumbWrapper"
          style={{
            outline: desktopImage == 2 ? '5px solid var(--Orange)' : '',
            borderRadius: 14,
          }}
        >
          <div
            style={{
              width: '100%',
              borderRadius: '14px',
              overflow: 'hidden',
              opacity: desktopImage == 2 ? '0.5' : '',
            }}
            onClick={() => setDesktopImage(2)}
          >
            <Image
              src="/image-product-2-thumbnail.jpg"
              layout="responsive"
              width={30}
              height={30}
            />
          </div>
        </div>

        <div
          className="thumbWrapper"
          style={{
            outline: desktopImage == 3 ? '5px solid var(--Orange)' : '',
            borderRadius: 14,
          }}
        >
          <div
            style={{
              width: '100%',
              borderRadius: '14px',
              overflow: 'hidden',
              opacity: desktopImage == 3 ? '0.5' : '',
            }}
            onClick={() => setDesktopImage(3)}
          >
            <Image
              src="/image-product-3-thumbnail.jpg"
              layout="responsive"
              width={30}
              height={30}
            />
          </div>
        </div>

        <div
          className="thumbWrapper"
          style={{
            outline: desktopImage == 4 ? '5px solid var(--Orange)' : '',
            borderRadius: 14,
          }}
        >
          <div
            style={{
              width: '100%',
              borderRadius: '14px',
              overflow: 'hidden',
              opacity: desktopImage == 4 ? '0.5' : '',
            }}
            onClick={() => setDesktopImage(4)}
          >
            <Image
              src="/image-product-4-thumbnail.jpg"
              layout="responsive"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
