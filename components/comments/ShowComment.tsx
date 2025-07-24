import { Comment } from '@/types/comments'
import React from 'react'

const ShowComment = ({ data }: { data: Comment }) => {
    return (
        <div className="bg-white shadow-lg mx-auto mt-10 p-8 rounded-2xl max-w-lg">
            <h2 className="mb-6 font-bold text-purple-700 text-xl text-center">نمایش کامنت</h2>
            <div className="space-y-4">
                <p className="text-gray-800"><strong>کاربر:</strong> {data.user}</p>
                <p className="text-gray-800"><strong>متن:</strong> {data.text}</p>
            </div>
        </div>
    )
}

export default ShowComment