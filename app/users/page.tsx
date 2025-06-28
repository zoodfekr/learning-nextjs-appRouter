import CustomDialog from "@/components/common/CustomDialog";
import Add_user from "@/components/users/Add_user";
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
        <>




            <Add_user></Add_user>
            <div className="min-h-screen  py-12 px-6 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Data.map(val => (<Show_users user={val} key={val.id} />))}
            </div>
        </>
    );
};
export default Users;