import { Achievement } from '../stores/work-experiences-store'

export const createDefaultAchievement = () =>
  ({
    id: String(Date.now()),
    content: '',
    duration: '',
    withDot: 0,
    workExperienceId: String(Date.now()),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
