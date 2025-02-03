import Image from "next/image";
import { VerifiedStamp } from "../Icons/VerfiedStamp";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   weight: "600",
//   subsets: ["latin"],
// });
const poppins = {
	className: "",
};
interface ProjectProps {
	title?: string;
	description?: string;
	imageUrl?: string;
	previewUrl?: string;
	repositoryUrl?: string;
	sideproject?: boolean; // side project is tag used to show project is a personal project
	realworld?: boolean; // real world is tag used to show project is project maked for real clients
}

export function Project({
	title,
	description,
	imageUrl,
	previewUrl,
	repositoryUrl,
	realworld,
	sideproject,
}: ProjectProps) {
	imageUrl = imageUrl || "";
	description = description || "";

	return (
		<div className="relative flex flex-col justify-between p-6 lg:p-12 w-full border border-purple-800 rounded-xl">
			<VerifiedStamp realworld={realworld} sideproject={sideproject} />

			<div className="flex flex-col items-center justify-between w-full gap-y-4 mb-8">
				{imageUrl.includes("https://") ? (
					<Image src={imageUrl} alt="" width={450} height={250} />
				) : (
					<Image src={imageUrl} alt="" width={450} height={250} />
				)}

				<h3 className={`${poppins.className} text-white text-2xl`}>{title}</h3>
				<p className={`${poppins.className} text-md font-light text-zinc-500`}>
					{description.length > 200
						? `${description?.slice(0, 500)}...`
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
							rel="noreferrer"
						>
							Live preview
						</a>
					)}

					{repositoryUrl && (
						<a
							className="flex items-center justify-center text-center border border-white text-white font-semibold rounded-full w-40 lg:w-full h-14 p-4 lg:p-0 text-md "
							href={repositoryUrl}
							target="_blank"
							rel="noreferrer"
						>
							Check on Github
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
