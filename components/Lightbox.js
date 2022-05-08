import React, { useState } from 'react'
import Image from 'next/image'

export default function Lightbox() {

    const [lightboxImage, setLightboxImage] = useState(1)


  return (
    <div className='lightboxContainer'>
        <div>
            <div></div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}
