import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import NavLinks from "./NavLinks";
import { Notifications } from "./Notifications";

export default function Navbar() {
  return (
    <header className="w-full shadow-sm">
      <div
        className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-10"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/Logo.png" alt="Financy Logo" width={32} height={32} priority />
          <span className="hidden md:block text-2xl font-bold tracking-tight">
            financy
          </span>
        </Link>

        <NavLinks />

        <div className="flex items-center gap-4">
          <Link
            href="/settings"
            aria-label="Settings"
            className="p-2 cursor-pointer text-gray hover:text-brand hover:bg-brand/10 rounded-full transition-colors"
          >
            <Icon icon="carbon:settings" width="24" height="24" />
          </Link>

          {/* <button
            type="button"
            aria-label="Notifications"
            className="p-2 cursor-pointer text-gray hover:text-brand hover:bg-brand/10 rounded-full transition-colors"
          >
            <Icon icon="bytesize:bell" width="24" height="24" />
          </button> */}
          <Notifications/>

          <Image
            src="/my-account.png"
            width={40}
            height={40}
            alt="User profile"
            className="rounded-full object-cover"
          />

          <button
            type="button"
            aria-label="Open menu"
            className="p-2 cursor-pointer text-gray hover:text-brand lg:hidden"
          >
            <Icon icon="andrsrxn:menu-end" width="24" height="24" />
          </button>
        </div>
      </div>
    </header>
  );
}