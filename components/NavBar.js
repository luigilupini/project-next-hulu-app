import { useRouter } from "next/router";
import requests from "../utils/requests";

function NavBar() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 space-x-10 overflow-x-scroll text-2xl sm:px-20 whitespace-nowrap sm:space-x-20 scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="transition duration-100 transform cursor-pointer hover:scale-125 hover:text-white active:text-red-500 last:pr-24"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-r from-transparent to-[#06202A] h-10 w-10"></div>
    </nav>
  );
}

export default NavBar;
