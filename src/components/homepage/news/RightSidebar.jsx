import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";


const RightSidebar = () => {
    return (
        <div>
            <h2 className="font-bold text-xl">Login With</h2>
            <button className="flex gap-2 items-center mt-5 btn w-full border-blue-500 text-blue-500"><FaGoogle />Login with google</button>
            <button className="flex gap-2 items-center mt-2 btn w-full"><FaGithub />Login with github</button>

            <h2 className="mt-10 font-bold text-lg mb-5">Find Us On</h2>
            <ul className="w-full">
                <li className="border border-gray-600 p-3 flex gap-2 items-center"><FaFacebook />facebook</li>
                <li className="border border-gray-600 border-t-0 p-3 flex gap-2 items-center"><FaTwitter />twitter</li>
                <li className="border border-gray-600 border-t-0 p-3 flex gap-2 items-center"><FaInstagram />instagram</li>
            </ul>
        </div>
    );
};

export default RightSidebar;