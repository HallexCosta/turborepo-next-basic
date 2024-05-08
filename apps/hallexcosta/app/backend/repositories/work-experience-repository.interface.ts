type WorkExperienceEntity = {
  id: number
  enterprise: string
  role: string
  type: string
  workModel: string
  startDate: Date
  endDate: Date | null
  currentlyPosition: boolean
  personId: number
  createdAt: Date
  updatedAt: Date | null
}

export type WorkExperienceCreate = Omit<WorkExperienceEntity, 'id' | 'createdAt' | 'updatedAt'>
export type WorkExperienceUpdate = Partial<WorkExperienceCreate>

export interface WorkExperiencesRepositoryInterface {
  //findById: (id: number) => Promise<any>
  deleteById: (workExperienceId: number) => void
  updateById: (
    workExperienceId: number,
    data: WorkExperienceUpdate
  ) => void
  //create(person: WorkExperienceCreate): Promise<any>
}