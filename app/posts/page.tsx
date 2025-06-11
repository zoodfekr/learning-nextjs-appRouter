import Show_posts from "@/components/posts/Show_posts";
import { serverUrl } from "@/setting/app";
import { postType } from "@/types/posts";



const getPostsData_service = async (): Promise<postType[]> => {
    const response = await fetch(`${serverUrl}/posts`)
    const posts = await response.json()
    return posts
}


const Posts = async () => {

    const Data = await getPostsData_service();

    return (
        <section className="min-h-screen  py-12 px-6">
            <Show_posts Data={Data} />
        </section>
    );
};
export default Posts


