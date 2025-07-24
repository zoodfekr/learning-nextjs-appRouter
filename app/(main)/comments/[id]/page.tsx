import React from 'react';
import { Comment } from '@/types/comments';
import ShowComment from '@/components/comments/ShowComment';



const Page = ({ params }: { params: { id: string } }) => {


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


    const comment = fakeComments.find(c => c.id === parseInt(params.id));

    return (
        <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-purple-100 py-10 min-h-screen">
            {comment
                ?
                <ShowComment data={comment} />
                :
                <div className="bg-red-100 shadow mt-8 p-4 rounded-xl text-red-700 text-center">کامنتی با این آیدی پیدا نشد.</div>
            }
        </div>
    );
};

export default Page;