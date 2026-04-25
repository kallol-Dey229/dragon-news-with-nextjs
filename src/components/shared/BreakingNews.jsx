import Marquee from "react-fast-marquee";


const news = [
    {
        _id : "1",
        title : "Breaking news: Major Event unfolds in the city"
    },

    {
        _id : "2",
        title : "Breaking news: New policy announced by the government"
    },

    {
        _id : "3",
        title : "Breaking news: Sports team win championship"
    },
];


const BreakingNews = () => {
    return (
        <div className="flex justify-between items-center gap-4 bg-gray-200 p-4 mx-5 md:mx-30 lg:mx-65">
            <button className="btn bg-red-600 text-white">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    news.map(n => 
                       <span key={n._id}>{n.title}</span>
                    )
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;