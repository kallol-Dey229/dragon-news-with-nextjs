import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowBarRight, BsArrowRight } from "react-icons/bs";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

export const generateMetadata = async ({params}) =>{
    const {id} = await params;
    const news = await getNewsDetailsById(id);

    return {
        title : news.title,
        description : news.details
    }
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);
    return (
        <div className="max-w-4xl mx-5 md:mx-30 lg:mx-65 py-10">
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">

                    {/* author info */}

                    <div className='flex justify-between items-center bg-slate-200 p-4'>
                        <div className='flex gap-4 items-center'>
                            <Image src={news.author?.img} alt={news.author?.name} height={40} width={40} className='rounded-full'></Image>

                            <div>
                                <h2 className='font-semibold'>{news.author?.name}</h2>
                                <h2 className='text-xs'>{news.author?.published_date}</h2>
                            </div>
                        </div>
                        <div className='flex gap-1 justify-between items-center'>
                            <CiShare2 className='text-xl' />
                            <CiBookmark className='text-xl' />
                        </div>
                    </div>

                    <h2 className="card-title">{news.title}</h2>



                    <figure>
                        <Image src={news.image_url} alt={news.title} width={400} height={400} className='w-full'></Image>
                    </figure>


                    <p>{news.details}</p>


                    <div className='flex items-center gap-2 justify-between'>
                        <div className='flex items-center gap-4'>
                            <h2 className='flex items-center gap-2'><IoStar className='text-lg text-yellow-500' />{news.rating.number}</h2>
                            <h2 className='flex items-center gap-2'><FaEye className='text-lg' />{news.total_view}</h2>
                        </div>

                        <Link href={`/category/${news.category_id}`}>
                            <button className='btn btn-error'>See other news for this category<BsArrowRight /></button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsDetailsPage;