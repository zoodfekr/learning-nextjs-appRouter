import Show_post from '@/components/posts/Show_post';
import { serverUrl } from '@/setting/app';
import { postType } from '@/types/posts';


const getPostsData_service = async (postId: string): Promise<postType> => {
    const response = await fetch(`${serverUrl}/posts/${postId}`);
    const post = await response.json();
    return post;
};

export async function generateStaticParams() {
    const response = await fetch(`${serverUrl}/posts`);
    const posts = await response.json();
    const postids = posts.map((post: postType) => ({ postId: post.id.toString() }));
    return postids
}


const Page = async ({ params }: { params: Promise<{ postId: string }> }) => {

    const paramsValue = await params
    const postid = paramsValue.postId

    const post = await getPostsData_service(postid);

    return (
        <div className='flex justify-center items-center'>
            <Show_post Data={post} />
        </div>
    );
};
export default Page



