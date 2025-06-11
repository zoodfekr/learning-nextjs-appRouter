const Home_component = () => {


    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white text-gray-800">


            {/* Hero Section */}
            <header className="flex flex-col items-center justify-center text-center py-20 px-4 bg-indigo-600 text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">به وب سایت سورنا خوش آمدید</h1>
                <p className="text-lg md:text-xl mb-6">هر چیزی که برای ساختن آینده‌ات نیاز داری اینجاست!</p>
                <button className="bg-white text-indigo-600 px-6 py-2 rounded-full text-lg font-semibold hover:bg-indigo-100 transition">
                    شروع کن
                </button>
            </header>

            {/* Features Section */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">ویژگی‌های ما</h2>
                <div className="grid gap-10 md:grid-cols-3">
                    {["سرعت بالا", "طراحی مدرن", "پشتیبانی ۲۴/۷"].map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold mb-2">{item}</h3>
                            <p className="text-gray-600">تجربه‌ای بی‌نظیر و مطمئن برای کاربران حرفه‌ای.</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-indigo-500 text-white py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">آماده‌ای شروع کنی؟</h2>
                <p className="mb-6">همین حالا ثبت‌نام کن و وارد دنیای نوآوری شو.</p>
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition">
                    عضویت رایگان
                </button>
            </section>


        </div>
    )
};
export default Home_component