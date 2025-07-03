import { serverUrl } from '@/setting/app';
import { UserType } from '@/types/users';
import React from 'react'


const getUserData_service = async (userId: string): Promise<UserType> => {
    const response = await fetch(`${serverUrl}/users/${userId}`);
    if (!response.ok) throw new Error('Failed to fetch user data');
    return response.json();
};

// export async function generateStaticParams() {
//     const response = await fetch(`${serverUrl}/users`);
//     const users = await response.json();
//     const userids = users
//         .filter((user: UserType) => user.id !== undefined && user.id !== null)
//         .map((user: UserType) => ({ userId: user.id!.toString() }));
//     return userids
// }


const Page = async ({ params }: { params: Promise<{ userId: string }> }) => {

    const { userId } = await params;

    const user = await getUserData_service(userId.toString());

    console.log('>>', user);

    return <div>Page: {user.username}</div>;
};

export default Page