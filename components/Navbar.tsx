import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Videy Logo"
          className="max-sm:size-10"
        />
        <div className="flex flex-col">
          <p className="text-[26px] font-extrabold text-white max-sm:hidden">
            Yoom
          </p>
          <p className="text-rose-500 text-[13px] font-bold">by vabank.dev</p>
        </div>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Clerk User Management */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
