"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavLink {
    name: string;
    href: string;
}

const navLinks: INavLink[] = [
    { name: "Overview", href: "/" },
    { name: "Transaction", href: "/transaction" },
    { name: "Analytics", href: "/analytics" },
    { name: "Accounts", href: "/accounts" },
    { name: "Wallet", href: "/wallet" }
];



export default function NavLinks () {
    const pathname = usePathname()
    return (
        <nav aria-label="Main navigation">
                    <ul className="hidden lg:flex items-center justify-center space-x-6 flex-2">
                    {navLinks.map((link)=>{
                    const isActive = pathname === link.href;
                    return (
                        <li key={link.name}>

                            <Link
                                href={link.href}
                                className={`inline-block px-3 py-2 rounded-xl font-semibold duration-300 ${
                                    isActive
                                    ? "text-brand bg-brand/10"
                                    : "text-gray hover:text-brand hover:bg-brand/10"
                                }`}
                                >{link.name}
                            </Link>


                        </li>
                    )}
                    )}
                </ul>
        </nav>
    )
}