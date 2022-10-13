import React from 'react'
import Image from 'next/image';
function Banner() {
  return (
      <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
        <Image
              src='https://links.papareact.com/0fm'
              layout='fill'
              objectFit="cover"
        />
    </div>
  )
}

export default Banner