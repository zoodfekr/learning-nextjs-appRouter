import React from 'react'

interface BackgroundDivHocProps {
    children: React.ReactNode
    className?: string
    background: string
}

const BackgroundDiv_hoc = ({ children, className, background }: BackgroundDivHocProps) => {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "50%",
                backgroundPositionY: "50%",
                backgroundAttachment: "fixed"
            }}
            className='flex justify-center items-center w-full '
        >

            <div className='w-full h-full bg-stone-900/80 flex justify-center items-center'>
                <div className={`w-full h-full ${className}`}>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default BackgroundDiv_hoc;