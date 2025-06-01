import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='border border-red-500 w-full h-full'>

            <div>
                <h1>brand layout</h1>
            </div>
            {children}

        </div>
    )
}

export default Layout