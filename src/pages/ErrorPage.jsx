export default function ErrorPage() {
    return (
        <div className="bg-slate-950 h-screen flex justify-center items-center text-center">
            <div className="bg-slate-800 p-8 rounded-lg ">
                <h1 className="text-4xl text-white font-bold mb-4">404</h1>
                <p className="text-slate-300 text-lg mb-6">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <a
                    href="/"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                    Go Back to Home
                </a>
            </div>
        </div>
    );
}
