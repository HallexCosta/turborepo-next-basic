"use client";
import _ from "lodash";
import router from "next/navigation";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { Icons } from "ui";
import { WorkExperience as WorkExperienceStore } from "../stores/work-experiences-store";
import { WorkExperience } from "./work-experience";
import { Resume, useResume } from "../stores/resume-store";
import { useEffect } from "react";
import { DeepPartial } from "utility-types";
import { ResumeInput } from "./resume-input";
import { ResumeTextarea } from "./resume-textarea";
import { db } from "../../../../database";
import { contacts } from "../../../../database/schema";
import {
  CVTemplatePage,
  CVTemplatePageEditable,
} from "../../../(curriculum)/cv/page";
import { useResumePreviewMode } from "../../../../hooks/use-resume-preview-mode";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FormResumeProps = Resume & { workExperiences: WorkExperienceStore[] };

const FormResume = (props: FormResumeProps) => {
  const { showPreviewMode, enablePreviewMode } = useResumePreviewMode();

  // const router = useRouter()

  const limitWorkExperience = 4;
  const limitWorkExperienceAchievements = 20;

  const {
    resume,
    updateResume,
    addWorkExperience,
    updateWorkExperienceById,
    removeAchievement,
    updateAchievementByIds,
  } = useResume();
  // const {workExperiences, addWorkExperience} = useWorkExperiences(state=> ({ ...state }))

  useEffect(() => {
    updateResume(props);
  }, [props, updateResume]);

  const [openModal, setOpenModal] = useState(false);
  const onSaveResume = async (e) => {
    e.preventDefault();

    const clonedWorkExperiences = _.clone(resume.workExperiences);

    const fullResume: Resume & { workExperiences: WorkExperienceStore[] } = {
      ...resume,
      workExperiences: clonedWorkExperiences,
    };
    console.log({
      fullResume,
    });

    const handleCreateWorkExperiences = (workExperiences) => {
      console.log({ workExperiences });
      return workExperiences.map(({ achievements, ...workExperience }) => {
        return {
          ...workExperience,
          currentlyPosition: workExperience.currentlyPosition ? 1 : 0,
        };
      });
    };
    const handleCreateAchievements = (workExperiences) => {
      console.log("handleCreateAchievements");
      console.log(workExperiences);

      const data: any[] = [];
      for (const { achievements, ...workExperience } of workExperiences) {
        data.push({
          workExperienceId: workExperience.id,
          achievementsWithContent: achievements.filter(
            (achievement) => achievement.content.length
          ),
          achievementsWithoutContent: achievements.filter(
            (achievement) =>
              !achievement.content.length &&
              Number.isNaN(Number(achievement.id))
          ),
        });
      }

      console.log({ data });
      return data;
    };

    const {
      workExperiences,
      person: { username, ...person },
    } = fullResume;

    const method = "POST";
    const headers = {
      "Content-Type": "application/json",
    };
    const requestContactsUpdate = fetch(
      `http://localhost:3001/api/contacts/update/${props.person.id}`,
      {
        method,
        body: JSON.stringify({
          website: fullResume.contact.website,
          github: fullResume.contact.github,
          linkedin: fullResume.contact.linkedin,
          city: fullResume.contact.city,
          state: fullResume.contact.state,
          email: fullResume.contact.email,
          phone: fullResume.contact.phone,
        }),
        headers,
      }
    );
    // const { username, ...person} = fullResume.person
    const requestPersonUpdate = fetch(
      `http://localhost:3001/api/person/${username}`,
      {
        method,
        body: JSON.stringify({
          ...person,
          summary: fullResume.summary,
          skills: fullResume.skills,
        }),
        headers,
      }
    );

    const requestWorkExperiences = fetch(
      `http://localhost:3001/api/work-experiences/${person.id}`,
      {
        method,
        body: JSON.stringify(handleCreateWorkExperiences(workExperiences)),
        headers,
      }
    );

    const requests = [
      requestContactsUpdate,
      requestPersonUpdate,
      requestWorkExperiences,
    ];

    const createFetchAchievementsRequest = (
      workExperienceId: number,
      achievements
    ) =>
      fetch(`http://localhost:3001/api/achievements/${workExperienceId}`, {
        method,
        body: JSON.stringify(achievements),
        headers,
      });

    // const deleteFetchAchievementsRequest = (workExperienceId: number, achievements) => fetch(`http://localhost:3001/api/achievements/${workExperienceId}`, {
    //     method: 'POST',
    //     body: JSON.stringify(achievements),
    //     headers
    // })
    const deleteFetchAchievementsRequest = (workExperienceId, achievementId) =>
      fetch(
        `http://localhost:3001/api/achievements/${workExperienceId}/${achievementId}`,
        {
          method: "DELETE",
          headers,
        }
      );

    for (const {
      workExperienceId,
      achievementsWithContent,
      achievementsWithoutContent,
    } of handleCreateAchievements(workExperiences)) {
      console.log({
        workExperienceId,
        achievementsWithContent,
        achievementsWithoutContent,
      });
      requests.push(
        createFetchAchievementsRequest(
          workExperienceId,
          achievementsWithContent
        )
      );
      for (const achievement of achievementsWithoutContent) {
        requests.push(
          deleteFetchAchievementsRequest(workExperienceId, achievement.id)
        );
      }
    }

    const [, , workExperiencesResponse, ...achievementsResponses] =
      await Promise.all(requests);

    const { references } = await workExperiencesResponse.json();

    for (const reference of references) {
      updateWorkExperienceById(reference.workExperienceReferenceId, {
        id: reference.workExperienceInsertedId,
      });
    }

    // run for...of in achievementsResponses and update achievement id
    console.log("handle achievements responses");
    const handlers = {
      delete: () => {},
      create: () => {},
    };
    for (const achievementResponse of achievementsResponses) {
      const { reference, references, type } = await achievementResponse.json();

      console.log({
        references,
        type,
      });

      if (!reference && !references?.length) continue;

      if (type === "delete") {
        console.log("delete reference achievement");
        removeAchievement(
          reference.workExperienceId,
          reference.achievementReferenceId
        );
        continue;
      }

      if (type === "create") {
        for (const reference of references) {
          const updatedAchievementData = {
            id: reference.achievementInsertedId,
          };
          updateAchievementByIds(
            reference.workExperienceId,
            reference.achievementReferenceId,
            updatedAchievementData
          );
        }
      }
      console.log(references);
    }
  };

  return showPreviewMode ? (
    <CVTemplatePageEditable person={props} />
  ) : (
    <form onSubmit={onSaveResume}>
      <fieldset>
        <legend className="mb-4 text-xl text-white font-bold">
          Seus dados
        </legend>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <ResumeInput
              label="Seu nome"
              value={props.person.name}
              placeholder="Ex: Hállex Costa"
              tag="person.name"
            />
          </div>
          <div>
            <ResumeInput
              label="Seu cargo"
              value={props.person.role}
              placeholder="Ex: Developer Fullstack BE-heavy"
              tag="person.role"
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-4 text-xl text-white font-bold">Contatos</legend>
        <div className="grid gap-6 mb-6 md:grid-cols-4">
          <ResumeInput
            label="Cidade"
            placeholder="Ex: Araçatuba"
            value={props.contact.city}
            tag="contact.city"
          />
          <ResumeInput
            label="Estado"
            placeholder="Ex: São Paulo"
            value={props.contact.state}
            tag="contact.state"
          />
          <ResumeInput
            label="Telefone"
            placeholder="Ex: (99) 99999-9999"
            value={props.contact.phone}
            tag="contact.phone"
          />
          <ResumeInput
            label="Email"
            placeholder="Ex: hallex.costa@hotmail.com"
            value={props.contact.email}
            tag="contact.email"
          />
          <ResumeInput
            label="Linkedin"
            placeholder="Ex: https://linkedin.com/in/hallexcosta"
            value={props.contact.linkedin}
            tag="contact.linkedin"
          />
          <ResumeInput
            label="Github"
            placeholder="Ex: https://github.com/HallexCosta"
            value={props.contact.github}
            tag="contact.github"
          />
          <ResumeInput
            label="Site"
            placeholder="Ex: https://hallexcosta.com"
            value={props.contact.website}
            tag="contact.website"
          />
        </div>
      </fieldset>

      <fieldset className="grid md:grid-cols-2 gap-6 mb-6">
        <ResumeTextarea
          title="Sumário"
          tag="summary"
          value=""
          placeholder="Nós de um breve resumo contando um pouco sobre seus objetivos profissionais"
        />
        <ResumeTextarea
          title="Habilidades"
          tag="skills"
          value=""
          placeholder="Ex: Laravel, Hyperf, Node.js, Express.js, Next.js, Nullstack, Typescript, etc..."
        />
      </fieldset>

      <fieldset>
        <legend className="mb-4 w-full flex items-center gap-4">
          <span className="text-xl text-white font-bold">
            Experiência profissional
          </span>
          <div onClick={addWorkExperience}>
            <Icons.Plus />
          </div>
        </legend>

        {resume.workExperiences.map((workExperience, index) => (
          <WorkExperience
            key={index}
            index={index}
            {...workExperience}
            currentlyPosition={workExperience.currentlyPosition}
          />
        ))}
      </fieldset>

      <div className="flex gap-4">
        <Button type="submit" className="w-full" color="blue">
          Salvar
        </Button>
        <Button
          className="w-full"
          color="light"
          onClick={() => {
            // enablePreviewMode()
            setOpenModal(true);
          }}
        >
          Pré-visualizar
        </Button>
        <Link href={"/cv/hallexcosta"} target="_blank" className="w-full">
          <Button color="green" className="w-full">
            Visualizar
          </Button>
        </Link>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Pré-visualizar CV: {props.person.name}</Modal.Header>
        <Modal.Body className="overflow">
          <CVTemplatePageEditable person={resume} className="" />
        </Modal.Body>
        {/*<Modal.Footer />*/}
      </Modal>
    </form>
  );
};

export { FormResume };
