import {
  HomeIcon,
  HeartIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import Image from "next/image";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='WISHLIST' Icon={HeartIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="/new-netflux.png"
        width={200}
        height={100}
        alt="Logo"
      />
    </header>
  )
}

export default Header
