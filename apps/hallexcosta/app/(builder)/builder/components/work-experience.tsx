"use client";

import { TextInputAchievement } from "./text-input-achievement";
import { TextInput, Label, Select, Datepicker, Checkbox } from "flowbite-react";
import { FC, memo, useEffect, useState } from "react";
import { Icons, Separator } from "ui";
import { ResumeInput } from "./resume-input";
import { ResumeSelect } from "./resume-select";
import { ResumeDatePicker } from "./resume-date-picker";
import { ResumeCheckbox } from "./resume-checkbox";
import { useResume } from "../stores/resume-store";
import { WorkExperience as WorkExperienceStore } from "../stores/work-experiences-store";

type WorkExperienceProps = WorkExperienceStore & { index?: number };
const WorkExperience = ({
  index,
  id,
  enterprise,
  startDate,
  endDate,
  role,
  type,
  workModel,
  currentlyPosition,
  achievements,
}: WorkExperienceProps) => {
  const limitDate = new Date();
  const lastDayFromMonth = new Date(
    limitDate.getFullYear(),
    limitDate.getMonth() + 1,
    0
  ).getDate();

  const { resume, addNewAchievement } = useResume();

  useEffect(() => {
    console.log({ weUseEffect: currentlyPosition, achievements });
  }, []);

  return (
    <div className="grid grid-cols-1 bg-gray-600 p-4 mb-4 rounded-lg">
      <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-4 items-center">
        <div>
          <ResumeInput
            label="Empresa"
            placeholder="Empresa/Compania"
            value={enterprise}
            tag={`workExperiences[${index}].enterprise`}
          />
        </div>
        <div>
          <ResumeInput
            label="Cargo"
            placeholder="Ex: Desenvolvedor Backend"
            value={role}
            tag={`workExperiences[${index}].role`}
          />
        </div>
        <div>
          <ResumeSelect
            label="Tipo"
            placeholder="Escolha um tipo"
            tag={`workExperiences[${index}].type`}
            value={type}
            options={[
              {
                label: "Tempo integral",
                value: "full-time",
              },
              {
                label: "Meio periodo",
                value: "part-time",
              },
              {
                label: "Estagio",
                value: "intership",
              },
              {
                label: "Terceirizado",
                value: "outsourcing",
              },
            ]}
          />
        </div>
        <div>
          <ResumeSelect
            label="Modelo"
            placeholder="Escolha um modelo"
            tag={`workExperiences[${index}].workModel`}
            value={workModel}
            options={[
              {
                label: "Presencial",
                value: "in-office",
              },
              {
                label: "Remoto",
                value: "home-office",
              },
            ]}
          />
        </div>
        <div>
          <ResumeDatePicker
            label="Inicio"
            tag={`workExperiences[${index}].startDate`}
            value={startDate ? new Date(startDate) : new Date()}
          />
        </div>
        <div>
          <ResumeDatePicker
            label="Fim"
            tag={`workExperiences[${index}].endDate`}
            value={endDate ? new Date(endDate) : new Date()}
            disabled={currentlyPosition}
          />
        </div>

        <div className="flex items-center justify-center">
          <ResumeCheckbox
            label="Atualmente estou nesta posição"
            tag={`workExperiences[${index}].currentlyPosition`}
            value={currentlyPosition}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <div className="flex items-center gap-2">
          <Label>Conquistas</Label>
          <div onClick={() => addNewAchievement(index)}>
            <Icons.Plus size={18} />
          </div>
        </div>
        {achievements.map((achievement, achievementIndex) => (
          <TextInputAchievement
            key={achievementIndex}
            id={achievement.id}
            workExperienceId={id}
            content={achievement.content}
            workExperienceIndex={index}
            index={achievementIndex}
          />
        ))}
      </div>
    </div>
  );
};

export { WorkExperience };
