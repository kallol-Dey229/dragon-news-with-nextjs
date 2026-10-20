'use client';
import Link from 'next/link';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const imageSrc = user?.image && user.image.startsWith("http") ? user.image : userAvatar;
    console.log(user, "session")

    return (
        <div className='flex items-center justify-between mx-5 md:mx-30 lg:mx-65 mt-10'>
            <div></div>
            <ul className='flex gap-4 items-center text-gray-600'>
                <li>
                    <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink href={'/career'}>Career</NavLink>
                </li>
            </ul>

            {isPending ? (<span className="loading loading-dots loading-sm"></span>) : user ? (<div className='flex gap-2 items-center'>
                <h2>Hello, {user.name}</h2>
                <Image className='rounded-full w-10 h-10' src={imageSrc} height={50} width={50} alt='user logo'></Image>
                <button className='btn bg-gray-700 text-white' onClick={async()=>await authClient.signOut() }>Logout</button>
                
            </div>) :

                (
                    <button className='btn bg-gray-700 text-white'><Link href={'/login'}>Login</Link></button>
                )
            }
        </div>
    );
};

export default Navbar;