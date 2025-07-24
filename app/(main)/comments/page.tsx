
'use client'
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Comment } from '@/types/comments';
import Link from 'next/link';



const fakeComments: Comment[] = [
    {
        id: 1,
        user: 'کاربر اول',
        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.'
    },
    {
        id: 2,
        user: 'کاربر دوم',
        text: 'لورم ایپسوم متن ساختگی برای تست کامنت.'
    },
    {
        id: 3,
        user: 'کاربر سوم',
        text: 'این یک کامنت تستی دیگر است.'
    }
];


const Page = () => {


    return (
        <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-purple-100 py-10 min-h-screen">
            <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-xl">
                <h2 className="mb-8 font-extrabold text-purple-700 text-2xl text-center tracking-tight">صفحه کامنت‌ها</h2>
                <ul className="space-y-6">
                    {fakeComments.map((comment) => (
                        <li key={comment.id} className="flex justify-between items-center bg-gradient-to-r from-purple-100 to-blue-100 shadow p-5 rounded-xl hover:scale-[1.02] transition-transform">
                            <div>
                                <span className="font-bold text-purple-700">{comment.user}:</span>
                                <span className="ml-3 text-gray-700">{comment.text}</span>
                            </div>

                            <Link
                                href={`/comments/${comment.id}`}
                                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 hover:from-purple-700 to-purple-800 hover:to-purple-900 shadow-lg px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 font-semibold text-white hover:scale-105 transition-all duration-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l4-4m-4 4l4 4" /></svg>
                                نمایش
                            </Link>

                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
};

export default Page;