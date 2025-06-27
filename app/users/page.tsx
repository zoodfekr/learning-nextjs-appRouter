import Show_users from "@/components/users/Show_users";
import { serverUrl } from "@/setting/app";
import { UserType } from "@/types/users";

const getUsersData_service = async (): Promise<UserType[]> => {
    const response = await fetch(`${serverUrl}/users`, {
        next: { revalidate: 60 },
    });
    const users = await response.json();
    return users;
};


const Users = async () => {

    const Data = await getUsersData_service();

    return (
        <section className="min-h-screen  py-12 px-6 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3">
            {Data.map(val => (<Show_users user={val} key={val.id} />))}
        </section>
    );
};
export default Users;