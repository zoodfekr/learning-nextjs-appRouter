import Link from "next/link";
import { postType } from "@/types/posts";

const Show_posts = ({ Data }: { Data: postType[] }) => {

    return (
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
                        <p className="text-gray-700 text-sm mb-6">{val.body}</p>
                        <Link
                            href={`/posts/${val.id}`}
                            className="inline-block px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
                        >
                            نمایش
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Show_posts