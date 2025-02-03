"use client";
import Link from "next/link";
// import {
//   FacebookLogo,
//   GithubLogo,
//   InstagramLogo,
//   LinkedinLogo
// } from 'phosphor-react'

import { Tooltip } from "@nextui-org/tooltip";
import Icons from "../Icons";

interface SocialLinkProps {
	name: "linkedin" | "instagram" | "email" | "github" | "medium";
	className?: string;
	url?: string;
}

export function SocialLink({ name, url, className }: SocialLinkProps) {
	className = className || "";
	url = url || "https://google.com";
	let icon = () => <></>;
	switch (name) {
		case "linkedin":
			const linkedinIcon = () => (
				<Link href={url as string} target="_blank">
					<Icons.Linkedin
					// className={`${className} cursor-pointer`}
					// color="white"
					// width={27}
					// height={27}
					/>
				</Link>
			);
			icon = linkedinIcon;
			break;
		case "instagram":
			const instagramIcon = () => (
				<Link href={url} target="_blank">
					<Icons.Instagram
					// className={`${className} cursor-pointer`}
					// color="white"
					// width={27}
					// height={27}
					/>
				</Link>
			);

			icon = instagramIcon;
			break;
		case "github":
			const githubIcon = () => (
				<Link href={url} target="_blank">
					<Icons.Github
					// className={`${className} cursor-pointer`}
					// color="white"
					// width={27}
					// height={27}
					/>
				</Link>
			);
			icon = githubIcon;
			break;
		case "email":
			const emailIcon = () => (
				<Link href={url} target="_blank">
					<Icons.Email
					// className={`${className} cursor-pointer`}
					// color="white"
					// width={27}
					// height={27}
					/>
				</Link>
			);
			icon = emailIcon;
			break;
		default:
			break;
	}
	return (
		<Tooltip
			content={`My ${name.slice(0, 1).toUpperCase()}${name.slice(1)}`}
			showArrow={true}
			className="
      bg-gradient-to-r from-purple-500 via-blue-600 to-blue-400 
      text-white p-4 rounded-lg"
		>
			{icon()}
		</Tooltip>
	);
}
