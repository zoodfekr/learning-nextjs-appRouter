'use client'

import ShowComment from '@/components/comments/ShowComment';
import CustomDialog from '@/components/common/CustomDialog'
import { Comment } from '@/types/comments';
import { useRouter } from 'next/navigation';
import React from 'react'



const Page = ({ params }: { params: Promise<{ id: string }> }) => {

    const unwrappedParams = React.use(params);
    const router = useRouter();

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

    const currentComment = fakeComments.find(comment => comment.id === Number(unwrappedParams.id)); // پیدا کردن کامنت فعلی بر اساس ID

    const handleClose = () => router.back(); // رفتن به صفحه قبل برای بستن دیالوگ Intercept

    console.log('finded data', currentComment);

    return (
        <div>
            <CustomDialog open={true} handleClose={handleClose} title={`جزئیات کامنت ${currentComment?.user}`}>
                {currentComment && <ShowComment data={currentComment} />}
            </CustomDialog>
        </div>
    );
}

export default Page