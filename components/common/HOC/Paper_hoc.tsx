import React from 'react'

const Paper_hoc = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className="relative bg-stone-900/95 shadow-md hover:shadow-xl p-5  border-gray-400 rounded-2xl transition-all duration-300"
        >
            {children}
        </div>
    )
}

export default Paper_hoc