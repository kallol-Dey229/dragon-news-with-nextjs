import Link from "next/link";


const NotFoundPage = () => {
    return (
        <div className="h-[80vh] flex justify-center items-center flex-col gap-10">
            <h2 className="font-bold text-5xl text-purple-600">This page is not found</h2>


            <Link href={'/'}>
            <button className="btn bg-purple-600 text-white">Go Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;