"use client";
import type { Person } from "../../page";
import * as AchievementInput from "../achievement-input";
import * as WorkExperienceForm from "../work-experience-form";

import { Icons } from "@portfolios/ui";
import dayjs from "dayjs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { startTransition, useOptimistic, useRef, useState } from "react";
import { deleteAchievementById } from "../../actions/delete-achievement";
import { deleteWorkExperience } from "../../actions/delete-work-experience";
import { updateWorkExperience } from "../../actions/update-work-experience";
import { useToast } from "../../hooks/use-toast";
import { DeleteWorkExperienceButton } from "../work-experience-form/buttons/delete-work-experience-button";
import { UpdateWorkExperienceButton } from "../work-experience-form/buttons/update-work-experience-button";
type WorkExperienceListProps = {
	data: Omit<Person["workExperiences"], "createdAt" | "updatedAt">;
};

const WorkExperienceList = ({ data }: WorkExperienceListProps) => {
	const { toastSuccess } = useToast();
	const currentFormRef = useRef(null);
	const formRefs = new Map(
		data.map(({ id }) => [
			id,
			// eslint-disable-next-line react-hooks/rules-of-hooks
			useRef(null),
		]),
	);
	const searchParams = useSearchParams();
	const authToken = String(searchParams.get("authToken"));

	const [workExperiences, removeAchievementFromUI] = useOptimistic(
		data,
		(state, { workExperienceIndex, achievementIndex }) => {
			delete state[workExperienceIndex].achievements[achievementIndex];

			const data = [...state];
			delete data[workExperienceIndex].achievements[achievementIndex];
			return data;
		},
	);

	const handleFetchDeleteWorkExperience = (workExperienceId: number) => {
		return async () => {
			await deleteWorkExperience(workExperienceId);
			toastSuccess("Experiência de trabalho deletada com sucesso!");
		};
	};

	const handleFetchUpdateWorkExperience = (workExperienceId: number) => {
		return async () => {
			const formRef = formRefs.get(workExperienceId);

			if (!formRef)
				return console.error(
					"Referência de formulario de atualização é undefined",
				);

			await updateWorkExperience(
				authToken,
				workExperienceId,
				new FormData(formRef.current),
			);
			toastSuccess("Experiência de trabalho atualizada com sucesso!");
		};
	};

	const handleDeleteAchievement = (
		workExperienceIndex: number,
		achievementIndex: number,
		id: number,
	) => {
		return async () => {
			startTransition(() => {
				removeAchievementFromUI({
					workExperienceIndex,
					achievementIndex,
				});
				toastSuccess(`Conquista #${achievementIndex + 1} foi deletada`);
			});

			await deleteAchievementById(authToken, id);
		};
	};

	return (
		<>
			{workExperiences.map(
				(
					workExperience: WorkExperienceListProps["data"][0],
					workExperienceIndex,
				) => {
					console.log(new Date(workExperience.startDate));
					console.log(
						dayjs(+new Date(workExperience.startDate)).format("YYYY-MM-DD"),
					);

					let endDate = workExperience.endDate;
					if (endDate) {
						endDate = dayjs(endDate).format("YYYY-MM-DD") ?? null;
					}

					return (
						<form key={workExperience.id} ref={formRefs.get(workExperience.id)}>
							<WorkExperienceForm.Root>
								<WorkExperienceForm.Header className="flex justify-end">
									<div className="flex gap-2">
										<UpdateWorkExperienceButton
											onUpdate={handleFetchUpdateWorkExperience(
												workExperience.id as unknown as number,
											)}
										/>
										<DeleteWorkExperienceButton
											onDelete={handleFetchDeleteWorkExperience(
												workExperience.id as unknown as number,
											)}
										/>
									</div>

									{/*<ConfirmDeleteWorkExperienceModal*/}
									{/*  open={openDeleteModal}*/}
									{/*  isDeleting={isDeleting}*/}
									{/*  handleCloseModal={() => setOpenDeleteModal(false)}*/}
									{/*  handleFetchDelete={handleFetchDeleteWorkExperience(*/}
									{/*    workExperience.id as string*/}
									{/*  )}*/}
									{/*/>*/}
								</WorkExperienceForm.Header>

								<WorkExperienceForm.Body>
									<WorkExperienceForm.IdInput
										id={workExperience.id ?? ""}
										workExperienceIndex={workExperienceIndex}
									/>
									<WorkExperienceForm.EnterpriseInput
										name={"enterprise"}
										value={workExperience.enterprise}
									/>
									<WorkExperienceForm.RoleInput
										name={"role"}
										value={workExperience.role}
									/>
									<WorkExperienceForm.TypeSelect
										name={"type"}
										value={workExperience.type}
									/>
									<WorkExperienceForm.WorkModelSelect
										name={"workModel"}
										workExperienceIndex={workExperienceIndex}
										value={workExperience.workModel}
									/>
									<WorkExperienceForm.StartDateDatepicker
										name={"startDate"}
										workExperienceIndex={workExperienceIndex}
										value={dayjs(+new Date(workExperience.startDate)).format(
											"YYYY-MM-DD",
										)}
									/>
									<WorkExperienceForm.EndDateDatepicker
										name={"endDate"}
										workExperienceIndex={workExperienceIndex}
										disabled={workExperience.currentlyPosition}
										value={endDate}
									/>
									<WorkExperienceForm.CurrentlyPositionCheckbox
										name={"currentlyPosition"}
										workExperienceIndex={workExperienceIndex}
										value={workExperience.currentlyPosition}
									/>
								</WorkExperienceForm.Body>

								<div className="grid grid-cols-1 gap-2">
									<div className="flex items-center gap-2">
										<label className="text-sm font-medium text-gray-900 dark:text-white flex">
											Conquistas
										</label>

										<Link
											className="pointer"
											href={{
												query: {
													createAchievementModalOpen: "",
													workExperienceId: workExperience.id,
												},
											}}
										>
											<Icons.Plus size={18} />
										</Link>
									</div>

									{workExperience.achievements.length >= 1 &&
										workExperience.achievements.map(
											(achievement, achievementIndex: number) => {
												return (
													<AchievementInput.Root key={achievement.id}>
														<AchievementInput.Id
															name={`workExperiences[${workExperienceIndex}].achievements[${achievementIndex}].id`}
															value={achievement.id ?? ""}
														/>
														<AchievementInput.Content
															name={`workExperiences[${workExperienceIndex}].achievements[${achievementIndex}].content`}
															value={achievement.content ?? ""}
														/>
														<AchievementInput.WorkExperienceId
															name={`workExperiences[${workExperienceIndex}].achievements[${achievementIndex}].workExperienceId`}
															value={workExperience.id ?? ""}
														/>
														<DeleteWorkExperienceButton
															onDelete={handleDeleteAchievement(
																workExperienceIndex,
																achievementIndex,
																Number(achievement.id),
															)}
														/>
													</AchievementInput.Root>
												);
											},
										)}

									{/*{achievements.map((achievement, achievementIndex) => (*/}
									{/*  <TextInputAchievement*/}
									{/*    key={achievementIndex}*/}
									{/*    id={achievement.id}*/}
									{/*    workExperienceId={id}*/}
									{/*    content={achievement.content}*/}
									{/*    name={`workExperiences[${index}].achievements[${achievementIndex}].content`}*/}
									{/*    workExperienceIndex={index}*/}
									{/*    index={achievementIndex}*/}
									{/*  />*/}
									{/*))}*/}
								</div>
							</WorkExperienceForm.Root>
						</form>
					);
				},
			)}
		</>
	);
};

export { WorkExperienceList };
