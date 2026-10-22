import Link from "next/link";


const LeftSidebar = ({ categories, activeId }) => {


    return (
        <div>
            <h2 className="font-bold text-xl ">All categories</h2>

            <ul className="flex flex-col gap-3 mt-5">
                {
                    categories.news_category.map(category => <li
                        key={category.category_id}
                        className={`${String(activeId) === String(category.category_id)
                                && "bg-slate-200"} rounded-md font-bold text-center text-md`}
                    >

                        <Link href={`/category/${category.category_id}`} className="block  p-2">{category.category_name}
                        </Link>

                    </li>)
                }
            </ul>
        </div>
    );
};

export default LeftSidebar;