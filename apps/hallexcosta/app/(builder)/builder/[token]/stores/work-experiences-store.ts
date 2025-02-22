import { create, useStore } from 'zustand'
import _ from 'lodash'

export type Achievement = {
  id?: string
  content: string
}

export type WorkExperienceType = 'full-time' | 'part-time' | 'internship' | ''
export type WorkExperienceModel = 'in-office' | 'home-office' | ''

export type WorkExperience = {
  id: number
  enterprise: string
  role: string
  type: WorkExperienceType
  workModel: WorkExperienceModel
  startDate: string
  endDate?: string
  currentlyPosition: boolean
  achievements: Achievement[]
}

type Action = {
  addWorkExperience: () => void
  updateWorkExperience: (
    workExperienceIndex: number,
    updatedWorkExperience: Partial<WorkExperience>
  ) => void
  addAchievement: (workExperienceIndex: number) => void
  updateAchievement: (
    workExperienceIndex: number,
    inputIndex: number,
    updatedAchievement: Achievement
  ) => void
}

type State = {
  workExperiences: WorkExperience[]
}
type WorkExperiencesStore = Action & State

// export const useWorkExperiences = create<WorkExperiencesStore>(set => {
//     const isValidAchievementsRules = (achievements: Achievement[]) => {
//         if (achievements.length >= 20) return false
//
//         return true;
//     }
//     const addAchievement = (workExperienceIndex: number) => set((state) => {
//         console.log('addAchievement')
//         if (!isValidAchievementsRules(state.workExperiences[workExperienceIndex].achievements)) {
//             alert('Ops... Total achievements per work experience is 20')
//             return {
//                 ...state
//             }
//         }
//
//         const achievement = {
//             content: ''
//         }
//         state.workExperiences[workExperienceIndex].achievements = [
//             achievement,
//             ...state.workExperiences[workExperienceIndex].achievements
//         ]
//         return {
//             ...state
//         }
//     })
//
//     const updateAchievement = (
//         workExperienceIndex: number,
//         inputIndex: number,
//         updatedAchievement: Achievement
//     ) => set(state => {
//         const oldAchievement = state.workExperiences[workExperienceIndex].achievements[inputIndex]
//         state.workExperiences[workExperienceIndex].achievements.splice(inputIndex, 1, {
//             ...oldAchievement,
//             ...updatedAchievement
//         })
//         return {
//             ...state
//         }
//     })
//
//     const addWorkExperience = () => set(state => {
//         const newWorkExperience: WorkExperience = {
//             id: String(Date.now()),
//             enterprise: '',
//             type: '',
//             role: '',
//             workModel: '',
//             currentlyPosition: false,
//             // endDate: new Date(),
//             // startDate: new Date(),
//             achievements: [
//                 {
//                     id: String(Date.now()),
//                     content: ''
//                 }
//             ],
//         }
//         state.workExperiences.unshift(newWorkExperience)
//         return {
//             ...state
//         }
//     })
//
//     const updateWorkExperience = (workExperienceIndex: number, updatedWorkExperience: Partial<WorkExperience>) => set(state => {
//         state.workExperiences[workExperienceIndex] = _.merge(state.workExperiences[workExperienceIndex], updatedWorkExperience)
//         return {
//             ...state
//         }
//     })
//
//     return {
//         workExperiences: [
//             {
//                 id: String(Date.now()),
//                 company: '',
//                 // endDate: new Date(),
//                 // startDate: new Date(),
//                 type: 'full-time',
//                 achievements: [
//                     {
//                         id: String(Date.now()),
//                         value: ''
//                     }
//                 ]
//             }
//         ],
//         addWorkExperience,
//         updateWorkExperience,
//         addAchievement,
//         updateAchievement
//     }
// })
