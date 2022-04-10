import {
  HeartIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-md">
        <Link href="/">
          <a>
            <HeaderItem title="HOME" Icon={HomeIcon} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <HeaderItem title="WISHLIST" Icon={HeartIcon} />
          </a>
        </Link>
        <Link href="/search">
          <a>
            <HeaderItem title="SEARCH" Icon={SearchIcon} />
          </a>
        </Link>
        <Link href="/login">
          <a>
            <HeaderItem title="ACCOUNT" Icon={UserIcon} />
          </a>
        </Link>
      </div>
      <Image
        className="object-contain"
        src="/new-netflux.png"
        width={200}
        height={100}
        alt="Logo"
      />{" "}
    </header>
  );
}

export default Header;
