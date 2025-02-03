import { Icons, Modal } from "@portfolios/ui";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { createAchievement } from "../../actions/create-achievement";
import { useToast } from "../../hooks/use-toast";
import * as Achievement from "../achievement-input";
import { DeleteWorkExperienceButton } from "../work-experience-form/buttons/delete-work-experience-button";

const limitAchievements = 10;
export const CreateAchievementModal = () => {
	const [isEnabledMultipleLinesMode, setIsEnabledMultipleLinesMode] =
		useState(false);
	const router = useRouter();
	const pathname = usePathname();
	const { toast, toastSuccess, toastError } = useToast();

	const searchParams = useSearchParams();
	const authToken = searchParams.get("token");
	const opened = searchParams.has("createAchievementModalOpen");
	const workExperienceId = Number(searchParams.get("workExperienceId"));

	const [achievements, setAchievements] = useState([
		{
			content: "",
		},
	]);

	function handleCreateAchievementInput() {
		if (isEnabledMultipleLinesMode)
			return toastError("Can´t add new input in multiple lines mode");

		if (achievements.length >= limitAchievements) {
			toastError(`Ops... the limit from achievements is ${limitAchievements}`);
			return;
		}

		setAchievements((prevAchievements) => {
			const achievement = {
				content: "",
				workExperienceId: workExperienceId,
			};
			return [achievement, ...prevAchievements];
		});
	}

	async function handleCreateAchievement(formData: FormData) {
		const parseMultipleLinesToFormData = (contents: string) => {
			return contents
				.split("\n")
				.filter((string) => string.trim())
				.reduce((prev, curr, currentIndex) => {
					const contentKey = `content_${currentIndex}`;
					const workExperienceKey = `workExperienceId_${currentIndex}`;
					prev.append(contentKey, curr);
					prev.append(workExperienceKey, workExperienceId.toString());
					return prev;
				}, new FormData());
		};

		if (isEnabledMultipleLinesMode) {
			const { contents } = Object.fromEntries(formData);
			formData = parseMultipleLinesToFormData(contents.toString());
		}

		console.log(Object.fromEntries(formData));

		const { message } = await createAchievement(authToken as string, formData);

		toastSuccess(message);
	}

	const toggleMultipleLinesMode = () => {
		setIsEnabledMultipleLinesMode(!isEnabledMultipleLinesMode);
		setAchievements((prevAchievements) => {
			const achievement = {
				content: "",
				workExperienceId: workExperienceId,
			};
			return [achievement];
		});
		toast(
			`${isEnabledMultipleLinesMode ? "Disabled" : "Enabled"} multiple lines mode`,
		);
	};

	return (
		opened && (
			<Modal.Root show={false}>
				<form action={handleCreateAchievement}>
					<Modal.Header onClose={() => router.replace(pathname)}>
						<div className="flex gap-4 items-center justify-center">
							<p>Conquista</p>
							<button
								type="button"
								className="group flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2 w-full p-2"
								color="blue"
								// size={20}
								onClick={handleCreateAchievementInput}
							>
								<Icons.Plus size={20} />
							</button>
							<button
								type="button"
								onClick={toggleMultipleLinesMode}
								data-tooltip-id="default"
								data-tooltip-contet="Inserir multiplas linhas"
								className="group flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2 w-full p-2"
							>
								<Icons.Insert size={20} />
							</button>
						</div>
					</Modal.Header>

					<Modal.Body>
						<div className="flex flex-col gap-4">
							{achievements.map((achievement, index) => {
								return (
									<Achievement.Root key={index}>
										<div className="flex flex-col gap-1 w-full">
											{isEnabledMultipleLinesMode ? (
												<Achievement.Contents
													placeholder="Insira todas suas conquistas de uma vez só separando por linhas"
													name="contents"
													value={achievement.content}
												/>
											) : (
												<>
													<label className="text-sm font-medium text-gray-900 dark:text-white flex">
														Conquista {index + 1}
													</label>
													<Achievement.Content
														name={`content_${index}`}
														value={achievement.content}
													/>
												</>
											)}
										</div>
										<Achievement.WorkExperienceId
											name={`workExperienceId_${index}`}
											value={workExperienceId.toString()}
										/>
									</Achievement.Root>
								);
							})}
						</div>
					</Modal.Body>

					<Modal.Footer>
						<CreateAchievementButton />
					</Modal.Footer>
				</form>
			</Modal.Root>
		)
	);
};

const CreateAchievementButton = () => {
	const status = useFormStatus();
	return (
		<button
			className="group flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2 w-28 p-2"
			color="blue"
			type="submit"
			disabled={status.pending}
		>
			{status.pending ? "Criando..." : "Criar"}
		</button>
	);
};
