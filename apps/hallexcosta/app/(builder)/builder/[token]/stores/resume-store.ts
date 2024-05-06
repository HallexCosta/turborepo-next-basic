import { create, useStore } from 'zustand'
import _ from 'lodash'
import { Achievement, WorkExperience } from './work-experiences-store'
import { createDefaultAchievement } from '../common/create-default-achievement'

export type Resume = {
  person: {
    id: string
    username: string
    name: string
    role: string
  }
  contact: {
    city: string
    state: string
    phone: string
    email: string
    linkedin: string
    github: string
    website: string
  }
  summary: string
  skills: string
  workExperiences: WorkExperience[]
}

type Action = {
  updateResume
  addWorkExperience
  addNewAchievement
  updateAchievement
  updateWorkExperienceById
  removeAchievementByIndexes
  updateAchievementByIds
  removeAchievement
}

type State = {
  resume: Resume
}

type ResumeStore = Action & State

export const useResume = create<ResumeStore>((set) => {
  const updateResume = (resume: Partial<Resume>) =>
    set((state) => {
      state.resume = _.merge(state.resume, resume)
      console.log(state.resume)
      return {
        ...state
      }
    })

  const addWorkExperience = () =>
    set((state) => {
      const newWorkExperience: WorkExperience = {
        id: String(Date.now()),
        enterprise: '',
        role: '',
        type: '',
        workModel: '',
        currentlyPosition: false,
        // endDate: new Date(),
        // startDate: new Date(),
        achievements: [createDefaultAchievement()]
      }
      state.resume.workExperiences.unshift(newWorkExperience)
      return {
        ...state
      }
    })

  const addNewAchievement = (workExperienceIndex: number) =>
    set((state) => {
      state.resume.workExperiences[workExperienceIndex].achievements.unshift(
        createDefaultAchievement()
      )
      return {
        ...state
      }
    })

  const updateWorkExperienceById = (
    id: string,
    updatedWorkExperience: Partial<WorkExperience>
  ) => {
    return set((state) => {
      const newWorkExperiences: any[] = []
      for (const workExperience of state.resume.workExperiences) {
        if (workExperience.id === id) {
          newWorkExperiences.push(
            _.merge(workExperience, updatedWorkExperience)
          )
        } else {
          newWorkExperiences.push(workExperience)
        }
      }
      state.resume.workExperiences = newWorkExperiences
      return state
    })
  }

  // beta -> I haven't found a purpose for this function yet
  const updateAchievement = (
    workExperienceIndex: number,
    achievementIndex: number,
    updatedAchievement: Partial<Achievement>
  ) =>
    set((state) => {
      console.log('updateAchievement', updatedAchievement)
      state.resume.workExperiences[workExperienceIndex].achievements.splice(
        achievementIndex,
        1,
        {
          ...state.resume.workExperiences[workExperienceIndex].achievements[
            achievementIndex
          ],
          ...updatedAchievement
        }
      )
      return {
        ...state
      }
    })

  const updateAchievementByIds = (
    workExperienceId: string,
    achievementId: string,
    updatedAchievement: Partial<Achievement>
  ) =>
    set((state) => {
      const workExperienceIndex = state.resume.workExperiences.findIndex(
        (workExperience) => workExperience.id === workExperienceId
      )

      const achievementIndex = state.resume.workExperiences[
        workExperienceIndex
      ].achievements.findIndex(
        (achievement) => achievement.id === achievementId
      )

      state.resume.workExperiences[workExperienceIndex].achievements.splice(
        achievementIndex,
        1,
        {
          ...state.resume.workExperiences[workExperienceIndex].achievements[
            achievementIndex
          ],
          ...updatedAchievement
        }
      )

      return {
        ...state
      }
    })

  const removeAchievementByIndexes = (
    workExperienceIndex: number,
    achievementIndex: number
  ) =>
    set((state) => {
      delete state.resume.workExperiences[workExperienceIndex].achievements[
        achievementIndex
      ]
      return {
        ...state
      }
    })

  const removeAchievement = (workExperienceId: string, achievementId: string) =>
    set((state) => {
      const workExperienceIndex = state.resume.workExperiences.findIndex(
        (workExperience) => workExperience.id === workExperienceId
      )

      const achievementIndex = state.resume.workExperiences[
        workExperienceIndex
      ].achievements.findIndex(
        (achievement) => achievement.id === achievementId
      )

      console.log('removeAchievement', {
        workExperienceIndex,
        achievementIndex,
        workExperienceId,
        achievementId
      })
      delete state.resume.workExperiences[workExperienceIndex].achievements[
        achievementIndex
      ]

      return {
        ...state
      }
    })

  return {
    resume: {
      person: {
        id: '',
        username: '',
        name: '',
        role: ''
      },
      contact: {
        city: '',
        email: '',
        github: '',
        linkedin: '',
        phone: '',
        website: '',
        state: ''
      },
      summary: '',
      skills: '',
      workExperiences: [
        {
          id: String(Date.now()),
          enterprise: '',
          role: '',
          currentlyPosition: false,
          endDate: new Date(),
          startDate: new Date(),
          type: '',
          workModel: '',
          achievements: [createDefaultAchievement()]
        }
      ]
    },
    updateResume,
    addWorkExperience,
    addNewAchievement,
    updateAchievement,
    updateWorkExperienceById,
    removeAchievementByIndexes,
    updateAchievementByIds,
    removeAchievement
  }
})
