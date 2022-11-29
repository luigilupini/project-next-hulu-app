import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/legacy/image";
import { BASE_URL } from "../utils/requests";
/* Images using `layout="responsive"` have no intrinsic size themselves as they take the space available to it and resizes its height automatically. Containing element will need to have its own width specified (not necessarily fixed size). You likely need to use a different layout mode. Note, the default layout mode is already responsive up until the max size of the SVG. */
function Thumbnail({ result }) {
  return (
    <div className="relative p-2 transition duration-200 ease-in transform cursor-pointer group sm:hover:scale-105 hover:z-50 ">
      <Image
        className="rounded-[1px]"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        layout="responsive"
        width={1920}
        height={1080}
        alt="movie"
      />

      <div className="p-2">
        <p className="max-w-md text-sm truncate">{result.overview}</p>
        <h2 className="mt-1 text-lg text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center text-xs opacity-0 group-hover:opacity-100">
          {/* && is called short-circuit-evaluation and it works like so: if the value on the left is true, it returns the right value. But if the value on the left is false, it ignores the value on the right. */}
          {result.media_type && `${result.media_type} ⸰`}{" "}
          {result.release_date || result.first_air_date} ⸰{" "}
          <HandThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
