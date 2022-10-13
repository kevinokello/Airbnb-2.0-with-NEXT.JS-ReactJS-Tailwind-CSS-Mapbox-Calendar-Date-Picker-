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
        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm sm:text-lg">cool banner</p>
              <button className="text-red-500 bg-white px-10 py-4 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-150 " >Flexible</button>
        </div>
    </div>
  )
}

export default Banner