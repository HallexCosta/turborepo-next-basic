import Image from 'next/image'
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   weight: "600",
//   subsets: ["latin"],
// });
const poppins = {
  className: ''
}
interface ProjectProps {
  title?: string
  description?: string
  imageUrl?: string
  previewUrl?: string
  repositoryUrl?: string
  personal?: boolean // personal is tag used to show project is a personal project
  realWorld?: boolean // real world is tag used to show project is project maked for real clients
}

export function Project({
  title,
  description,
  imageUrl,
  previewUrl,
  repositoryUrl
}: ProjectProps) {
  imageUrl = imageUrl || ''
  description = description || ''

  return (
    <div className="flex flex-col justify-between p-12 max-h-[700px] max-w-[570px] border border-purple-800 rounded-xl">
      <div className="flex flex-col justify-between w-full gap-y-4 mb-8">
        {imageUrl.includes('https://') ? (
          <Image
            src={imageUrl}
            alt=""
            width={480}
            height={255}
            className="mb-8"
          />
        ) : (
          <Image src={imageUrl} alt="" />
        )}

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
        <div className="flex flex-column justify-center items-center gap-4">
          {previewUrl && (
            <a
              className={`
              flex items-center justify-center 
              text-center
              text-white font-semibold rounded-full w-40 lg:w-full
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
              className="flex items-center justify-center text-center border border-white text-white font-semibold rounded-full w-40 lg:w-full h-14 p-4 lg:p-0 text-md "
              href={repositoryUrl}
              target="_blank"
            >
              Check on Github
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
