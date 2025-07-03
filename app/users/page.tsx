import Add_user from "@/components/users/Add_user";
import Show_users from "@/components/users/Show_users";
import { serverUrl } from "@/setting/app";
import { UserType } from "@/types/users";

const getUsersData_service = async (): Promise<UserType[]> => {
    const response = await fetch(`${serverUrl}/users`, {
        next: { revalidate: 10 },
    });
    const users = await response.json();
    return users;
};


const Users = async () => {

    const Data = await getUsersData_service();


    const handleSendDatatoDb = async ({ email, username }: { email: string, username: string }) => {
        'use server'
        await fetch(`${serverUrl}/users`, {
            method: 'POST',
            headers: { "content-Type": "application/json" },
            body: JSON.stringify({ email, username })
        })
    }

    return (
        <>

            <Add_user handleSendDatatoDb={handleSendDatatoDb}></Add_user>

            <div className="min-h-screen  py-12 px-6 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Data.map(val => (<Show_users user={val} key={val.id} />))}
            </div>

        </>
    );
};
export default Users;