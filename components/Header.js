import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BoltIcon,
  CheckBadgeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex flex-col items-center justify-between m-5 sm:flex-row">
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={RectangleStackIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="/hulu-white.webp"
        width={200}
        height={200}
        alt="logo"
      />
    </header>
  );
}

export default Header;
