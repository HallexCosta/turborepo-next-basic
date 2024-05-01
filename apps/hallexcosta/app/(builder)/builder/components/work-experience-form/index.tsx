'use client'

import { Label } from 'flowbite-react'
import { twMerge } from 'tailwind-merge'
import { Icons } from 'ui'
import { ResumeInput } from '../resume-input'
import { ResumeSelect } from '../resume-select'
import { ResumeDatePicker } from '../resume-date-picker'
import { ResumeCheckbox } from '../resume-checkbox'
import { WorkExperience as WorkExperienceStore } from '../../stores/work-experiences-store'
import { Root } from './root'
import { Body } from './body'
import { Header } from './header'
import { IdInput } from './id-input'
import { EnterpriseInput } from './enterprise-input'
import { RoleInput } from './role-input'
import { TypeSelect } from './type-select'
import { WorkModelSelect } from './work-model-select'
import { EndDateDatepicker } from './end-date-datepicker'
import { StartDateDatepicker } from './start-date-datepicker'
import { CurrentlyPositionCheckbox } from './currently-position-checkbox'

type WorkExperienceProps = WorkExperienceStore & {
  index?: number
  className: string
}
// const Index = ({
//   index,
//   className,
//   id,
//   enterprise,
//   startDate,
//   endDate,
//   role,
//   type,
//   workModel,
//   currentlyPosition,
//   achievements
// }: WorkExperienceProps) => {
//   //
//   return (
//     <div className="grid grid-cols-1 bg-gray-600 p-4 mb-4 rounded-lg">
//       <div className={twMerge('grid gap-6 mb-6 grid-cols-1 md:grid-cols-4 items-center', className)}>
//         <input
//           hidden={true}
//           name={`workExperiences[${index}].id`}
//           value={id}
//         />
//
//         <div className="w-full">
//           <ResumeInput
//             label="Empresa"
//             placeholder="Empresa/Compania"
//             value={enterprise}
//             tag={`workExperiences[${index}].enterprise`}
//             name={`workExperiences[${index}].enterprise`}
//           />
//         </div>
//         <div className="w-full">
//           <ResumeInput
//             label="Cargo"
//             placeholder="Ex: Desenvolvedor Backend"
//             value={role}
//             tag={`workExperiences[${index}].role`}
//             name={`workExperiences[${index}].role`}
//           />
//         </div>
//         <div className="w-full">
//           <ResumeSelect
//             label="Tipo"
//             placeholder="Escolha um tipo"
//             tag={`workExperiences[${index}].type`}
//             name={`workExperiences[${index}].type`}
//             value={type}
//             options={[
//               {
//                 label: 'Tempo integral',
//                 value: 'full-time'
//               },
//               {
//                 label: 'Meio periodo',
//                 value: 'part-time'
//               },
//               {
//                 label: 'Estagio',
//                 value: 'intership'
//               },
//               {
//                 label: 'Terceirizado',
//                 value: 'outsourcing'
//               }
//             ]}
//           />
//         </div>
//         <div className="w-full">
//           <ResumeSelect
//             label="Modelo"
//             placeholder="Escolha um modelo"
//             tag={`workExperiences[${index}].workModel`}
//             name={`workExperiences[${index}].workModel`}
//             value={workModel}
//             options={[
//               {
//                 label: 'Presencial',
//                 value: 'in-office'
//               },
//               {
//                 label: 'Remoto',
//                 value: 'home-office'
//               }
//             ]}
//           />
//         </div>
//         <div className="w-full">
//           <ResumeDatePicker
//             label="Inicio"
//             tag={`workExperiences[${index}].startDate`}
//             name={`workExperiences[${index}].startDate`}
//             value={startDate ? new Date(startDate) : new Date()}
//           />
//         </div>
//         <div className="w-full">
//           <ResumeDatePicker
//             label="Fim"
//             tag={`workExperiences[${index}].endDate`}
//             name={`workExperiences[${index}].endDate`}
//             value={endDate ? new Date(endDate) : new Date()}
//             disabled={currentlyPosition}
//           />
//         </div>
//
//         <div className="flex items-center justify-center">
//           <ResumeCheckbox
//             label="Atualmente estou nesta posição"
//             tag={`workExperiences[${index}].currentlyPosition`}
//             value={currentlyPosition}
//             name={`workExperiences[${index}].currentlyPosition`}
//           />
//         </div>
//       </div>
//
//       <div className="grid grid-cols-1 gap-2">
//         <div className="flex items-center gap-2">
//           <Label>Conquistas</Label>
//           <div>
//             <Icons.Plus size={18} />
//           </div>
//         </div>
//
//         {/*{achievements.map((achievement, achievementIndex) => (*/}
//         {/*  <TextInputAchievement*/}
//         {/*    key={achievementIndex}*/}
//         {/*    id={achievement.id}*/}
//         {/*    workExperienceId={id}*/}
//         {/*    content={achievement.content}*/}
//         {/*    name={`workExperiences[${index}].achievements[${achievementIndex}].content`}*/}
//         {/*    workExperienceIndex={index}*/}
//         {/*    index={achievementIndex}*/}
//         {/*  />*/}
//         {/*))}*/}
//       </div>
//     </div>
//   )
// }

export {
  // Index,
  Root,
  Body,
  Header,
  IdInput,
  EnterpriseInput,
  RoleInput,
  TypeSelect,
  WorkModelSelect,
  StartDateDatepicker,
  EndDateDatepicker,
  CurrentlyPositionCheckbox
}
