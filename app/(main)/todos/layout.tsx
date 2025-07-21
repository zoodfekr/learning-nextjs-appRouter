import React from 'react'


interface LayoutProps {
    children: React.ReactNode
    done: React.ReactNode
    notedone: React.ReactNode
    lasts: React.ReactNode
}



const MainBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex-1 flex items-center justify-center pt-6">
            <div style={{ minHeight: "400px" }} className="w-full bg-gradient-to-br from-blue-50 to-blue-200 rounded-2xl shadow-xl p-8 text-gray-800 border
             border-blue-300 hover:scale-105 transition-transform duration-300">
                {children}
            </div>
        </div>
    )
}


const layout = ({ children, done, notedone, lasts }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-white to-gray-300 shadow-2xl p-8">
            <div className='w-full flex justify-center items-center mb-8'>
                <p className='text-3xl font-bold text-blue-700 drop-shadow-lg tracking-wide animate-fade-in'> Parallel Routes  </p>
            </div>
            <div className="flex flex-row items-stretch justify-between gap-8 pb-8 border-b-2 border-blue-200">
                <MainBox>
                    {done}
                </MainBox>
                <MainBox>
                    {notedone}
                </MainBox>
                <MainBox>
                    {lasts}
                </MainBox>
            </div>
            {/* بخش پایین: نمایش children */}
            <div className="flex-1 flex items-center justify-center pt-8">
                <div className="w-full bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 border text-black border-blue-100 animate-fade-in">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout