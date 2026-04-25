import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";


const NewsCategoryPage = async ({ params }) => {

    const { id } = await params;
    const categories = await getCategories();
    const news = await getNewsByCategoryId(id);

    return (
        <div className="grid grid-cols-4 gap-4 mx-5 md:mx-30 lg:mx-65 mt-10">
            <div className="col-span-1">


                <LeftSidebar categories={categories} activeId={id}></LeftSidebar>

            </div>
            <div className="col-span-2">
                <h2 className="font-bold text-lg mb-5">All news</h2>

                <div className="space-y-4">
                    {
                        news.length > 0 ? news.map(n => {
                            return <NewsCard key={n._id} news={n}></NewsCard>;
                        }) : <h2 className="text-4xl flex justify-center items-center my-50 font-bold">No Data Found</h2>
                    }
                </div>

            </div>


            <div className="col-span-1">
                <RightSidebar></RightSidebar>
            </div>

        </div>
    );
};

export default NewsCategoryPage;