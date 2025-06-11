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
        <section className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">لیست پست‌ها 📚</h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Data.map((val) => (
                        <div
                            key={val.id}
                            className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105 hover:shadow-lg border border-gray-100"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{val.title}</h2>
                            <p className="text-sm text-gray-500 mb-4">نویسنده: کاربر {val.userId}</p>
                            <p className="text-gray-700 text-sm">{val.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Posts


