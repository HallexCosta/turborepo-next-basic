const showFlagCurrentActivity = (currentActivity) => {
  return currentActivity ? '(atuando)' : ''
}
const workTypes = {
  'full-time': 'Tempo integral',
  outsourcing: 'Terceirizado',
  'part-time': 'Meio periodo',
  intership: 'Estágio',
  university: 'Faculdade',
  course: 'Curso',
  school: 'School',
  'technical-school': 'Curso Técnico'
}
const workModels = {
  'in-office': 'Presencial',
  'home-office': 'Remoto'
}

type HeaderProps = {
  role: string
  enterprise: string
  activityTime?: string
  currentActivity: boolean
  category?: string
  startDate: string
  endDate: string | null
  type: string
  workModel: string
  children?: React.ReactNode
}

type CompanyInfoProps = {
  enterprise: string
  startDate: string
  endDate: string | null
  workModel: string
  currentActivity: boolean
}

export const Header = ({
  role = '',
  enterprise = '',
  activityTime = '',
  currentActivity = false,
  category = '',
  startDate,
  endDate,
  type = '',
  workModel = ''
}: HeaderProps) => {
  return (
    <div className="header flex flex-col pl-1">
      <CompanyInfo
        enterprise={enterprise}
        startDate={startDate}
        endDate={endDate}
        workModel={workModel}
        currentActivity={currentActivity}
      />

      <div className="flex">
        <span className="arial text-base">
          {role} • {workTypes[type]}
        </span>
      </div>
    </div>
  )
}

const CompanyInfo = ({
  enterprise,
  workModel,
  startDate,
  endDate,
  currentActivity
}: CompanyInfoProps) => {
  const handleEndDate = (endDate: null | string) => {
    if (!endDate && currentActivity) return 'Presente'
    return endDate
  }

  return (
    <div className="flex items-center">
      <span className="arial text-base">
        {enterprise} • {workModels[workModel]} • {startDate} -{' '}
        {handleEndDate(endDate)}
      </span>
    </div>
  )
}
