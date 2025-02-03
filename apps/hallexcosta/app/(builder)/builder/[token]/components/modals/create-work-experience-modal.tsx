"use client";
import { Modal } from "@portfolios/ui";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { createWorkExperience } from "../../actions/create-work-experience";
import { useToast } from "../../hooks/use-toast";
import * as WorkExperienceForm from "../work-experience-form";
import { CreateWorkExperienceSubmitButton } from "../work-experience-form/buttons/create-work-experience-submit-button";

type CreateWorkExperienceModalProps = {
	workExperienceIndex: number;
};

export const CreateWorkExperienceModal = (
	props: CreateWorkExperienceModalProps,
) => {
	const { toast } = useToast();
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = useParams<{ token: string }>();
	const opened = searchParams.has("createWorkExperienceModalOpen");

	const handleOnCloseModal = () => router.replace(`/builder/${params.token}`);

	const handleCreateWorkExperience = () => {
		return async (formData: FormData) => {
			console.log("Testando", Object.fromEntries(formData));
			const validations = await createWorkExperience(params.token, formData);
			validations?.forEach(({ message }) => toast(message));

			if (!validations) handleOnCloseModal();
		};
	};

	return (
		opened && (
			<Modal.Root show={opened}>
				<form action={handleCreateWorkExperience()}>
					<Modal.Header onClose={handleOnCloseModal}>
						Criar Experiência Profissional
					</Modal.Header>
					<Modal.Body>
						<WorkExperienceForm.Root className="md:grid-cols-2 md:gap-4">
							<WorkExperienceForm.EnterpriseInput
								name={"enterprise"}
								value=""
							/>

							<WorkExperienceForm.RoleInput name={"role"} value="" />

							<WorkExperienceForm.TypeSelect name={"type"} value="" />

							<WorkExperienceForm.WorkModelSelect
								name={"workModel"}
								workExperienceIndex={props.workExperienceIndex}
								value=""
							/>

							<WorkExperienceForm.StartDateDatepicker
								name={"startDate"}
								workExperienceIndex={props.workExperienceIndex}
								value=""
							/>

							<WorkExperienceForm.EndDateDatepicker
								name={"endDate"}
								workExperienceIndex={props.workExperienceIndex}
								value=""
								disabled={false}
							/>

							<WorkExperienceForm.CurrentlyPositionCheckbox
								name={"currentlyPosition"}
								workExperienceIndex={props.workExperienceIndex}
								value={false}
							/>
						</WorkExperienceForm.Root>
					</Modal.Body>

					<Modal.Footer>
						<CreateWorkExperienceSubmitButton />
					</Modal.Footer>
				</form>
			</Modal.Root>
		)
	);
};
