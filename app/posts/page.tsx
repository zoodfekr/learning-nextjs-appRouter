import Show_posts from "@/components/posts/Show_posts";
import { serverUrl } from "@/setting/app";
import { postType } from "@/types/posts";

export const metadata = {
    title: "لیست پست‌ها",
    description: "نمایش لیست پست‌ها در سایت",
};

const getPostsData_service = async (): Promise<postType[]> => {
    const response = await fetch(`${serverUrl}/posts`, {
        //    cache: 'no-store', // این خط باعث میشه هر بار داده جدید از سرور گرفته بشه
    });
    const posts = await response.json();
    return posts;
};


// export const dynamic = 'force-dynamic';

const Posts = async () => {

    const Data = await getPostsData_service();

    return (
        <section className="min-h-screen  py-12 px-6">
            <Show_posts Data={Data} />
        </section>
    );
};
export default Posts;

