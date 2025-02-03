import type { Technology } from "./technologies";

export const SkillIcon = ({ name }: { name: Technology }) => {
	return (
		<div className="flex flex-col items-center">
			<img
				src={`https://skill-icons.hallexcosta.com/icons?i=${name}`}
				alt={name}
				className="w-10 h-10"
			/>
		</div>
	);
};
