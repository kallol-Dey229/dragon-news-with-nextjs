'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ href, children, className }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`${isActive ? "text-lg border-b-2 border-b-purple-700" : ""} ${className}`}>{children}</Link>
    );
};

export default NavLink;