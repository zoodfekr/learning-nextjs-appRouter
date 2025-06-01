import React from 'react'

const Template = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='border border-green-500  w-full'>
            <h2>template file</h2>
            {children}</div>
    )
}

export default Template 