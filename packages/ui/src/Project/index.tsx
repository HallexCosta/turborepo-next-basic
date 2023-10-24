import Image from "next/image";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   weight: "600",
//   subsets: ["latin"],
// });
const poppins = {
  className: ''
}
interface ProjectProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  previewUrl?: string;
  repositoryUrl?: string;
  personal?: boolean; // personal is tag used to show project is a personal project 
  realworld?: boolean; // realworld is tag used to show project is project maked for real clients
}

export function Project({
  title,
  description,
  imageUrl,
  previewUrl,
  repositoryUrl,
}: ProjectProps) {
  imageUrl = imageUrl || "";
  description = description || "";

  return (
    <div className="flex flex-col justify-between p-12 max-h-[700px] max-w-[570px] border border-purple-800 rounded-xl">
      <div className="flex flex-col justify-between w-full gap-y-4 mb-8">
        <Image
          src={imageUrl}
          alt=""
          width={480}
          height={255}
          className="mb-8"
        />

        <h3 className={`${poppins.className} text-white text-2xl`}>{title}</h3>
        <p
          className={`${poppins.className} text-md font-light text-zinc-500 max-h-44`}
        >
          {description.length > 200
            ? `${description?.slice(0, 200)}...`
            : description}
        </p>
      </div>

      <div className="flex flex-col justify-between gap-12">
        <div className="flex gap-x-3">
          {previewUrl && (
            <a
              className={`
              text-center
              lg:px-14 lg:py-6 text-white font-semibold rounded-full w-40 lg:w-full
              bg-gradient-to-r from-purple-500 via-blue-600 to-blue-400 h-14 text-md p-4 lg:p-0
          `}
              href={previewUrl}
              target="_blank"
            >
              Live preview
            </a>
          )}

          {repositoryUrl && (
            <a
              className="p-6 text-center border border-white text-white font-semibold rounded-full w-40 lg:w-full h-14 p-4 lg:p-0 text-md"
              href={repositoryUrl}
              target="_blank"
            >
              Check on Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
