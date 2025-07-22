'use client'

import CustomDialog from '@/components/common/CustomDialog'
import React from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Todo_component from '@/components/todo/Todo_component';

const Done = () => {

    const [dialog, setdialog] = React.useState(false);



    return (
        <>
            <CustomDialog
                open={dialog}
                title="Done"
                text=""
                handleClose={() => { setdialog(false); }}
            >

                <Todo_component />

            </CustomDialog >


            <div className='flex justify-baseline' style={{ border: "1px solid red", padding: "5px" }}>
                here

            </div>



            <div className="flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col items-center bg-white dark:bg-gray-900/70 shadow-xl p-6 border border-gray-200 dark:border-gray-800 rounded-2xl w-full max-w-md">
                    <CheckCircleIcon className="mb-4 text-green-500" style={{ fontSize: 48 }} />
                    <h2 className="mb-2 font-bold text-gray-800 dark:text-gray-100 text-2xl">موارد انجام شده</h2>
                    <p className="mb-4 text-gray-500 dark:text-gray-400 text-center">لیست کارهای انجام شده را اینجا مشاهده می‌کنید.</p>
                    {/* Add your done items here */}


                    <button
                        onClick={() => setdialog(true)}
                        className="bg-gradient-to-r from-green-500 hover:from-cyan-400 to-cyan-400 hover:to-green-500 shadow-lg px-6 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 font-bold text-white transition-all duration-200"
                    >
                        <span className="flex items-center gap-2">
                            <CheckCircleIcon style={{ fontSize: 22 }} />
                            نمایش دیالوگ
                        </span>
                    </button>

                </div>

            </div>
        </>
    )
}

export default Done