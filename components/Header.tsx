import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
            {/* left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain' objectPosition='left'
                />
            </div>
            {/* search */}
            <div>
                <input type="text" />
            </div>

            <div>

            </div>
        </header>

    )
}

export default Header
