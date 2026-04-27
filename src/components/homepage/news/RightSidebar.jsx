'use client'
import { authClient } from "@/lib/auth-client";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";


const RightSidebar = () => {

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    const handleGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    }

    return (
        <div>
            <h2 className="font-bold text-xl">Login With</h2>
            <button onClick={handleGoogleSignin} className="flex gap-2 items-center mt-5 btn w-full border-blue-500 text-blue-500"><FaGoogle />Login with google</button>
            <button onClick={handleGithubSignin} className="flex gap-2 items-center mt-2 btn w-full"><FaGithub />Login with github</button>

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