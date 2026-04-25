import Link from 'next/link';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
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

            <div className='flex gap-2 items-center'>
                <Image src={userAvatar} height={50} width={50} alt='user logo'></Image>
                <button className='btn bg-gray-700 text-white'><Link href={'/login'}>Login</Link></button>
            </div>

        </div>
    );
};

export default Navbar;