'use client'
import Experience from './components/Experience'
import { Contact } from './components/Contact'
import dayjs from 'dayjs'
dayjs.locale('pt-br')
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'
import { PageBottom, PageBreak, PageTop, Tailwind } from '@fileforge/react-print';
import { useEffect, useState } from 'react'

const Dot = () => <span>{'•'}</span>
export function CVTemplatePageEditable({ person, className = '' }) {
  console.log({person})
  const [isHydratation, setIsHydratation] = useState(false)

  useEffect(() => {
    setIsHydratation(true)
    console.log(person)
  }, [isHydratation])

  return isHydratation && (
    <Tailwind>
      <div
        className={twMerge(
          'p-4 lg:px-0 lg:mx-auto lg:max-w-3xl bg-white',
          className
        )}
      >
        <div className="flex flex-col">
          <PageTop>
            <div className="who-is">
              <span className="arial text-xl font-bold m-0 uppercase">
                {person?.name ?? person.person.name}
              </span>

              <PageBreak />

              <span className="arial text-xl font-bold m-0 uppercase">
                {person?.role ?? person.person.role}
              </span>
            </div>
          </PageTop>

          <PageBreak />

          <div className="flex items-center flex-wrap gap-1 pl-1">
            <Contact name="location">
              {/*<Icons.Location/>*/}
              <span className="arial text-base">
                {person.contact?.city}, {person.contact?.state}
              </span>
            </Contact>
            
            <Dot />

            <Contact name="whatsapp">
              {/*<Icons.Whatsapp/>*/}
              <span className="arial text-base">{person.contact?.phone}</span>
            </Contact>
            
            <Dot />

            <Contact name="email">
              {/*<Icons.Email/>*/}
              <span className="arial text-base">{person.contact?.email}</span>
            </Contact>
            
            <Dot />

            <Contact name="linkedin">
              {/*<Icons.Linkedin/>*/}
              <span className="arial text-base">{person.contact?.linkedin}</span>
            </Contact>
            
            <Dot />

            <Contact name="github">
              {/*<Icons.Github/>*/}
              <span className="arial text-base">{person.contact?.github}</span>
            </Contact>
          </div>
        </div>

        <PageBreak />

        <Experience.Root>
          <Experience.Title>Resumo de perfil</Experience.Title>
          <Experience.Content>
            <Experience.Lines>
              <Experience.Line className="">
                {/*Sou uma pessoa entusiasmada e comprometida em aproveitar o poder da tecnologia para desenvolver soluções e resolver problemas. Minha experiência como Desenvolvedor PHP back-end inclui a implementação de novos fluxos na regra de negócios de plataformas, aprimoramento do layout front-end, automação de processos, integração de gateways de pagamento, provisionamento de infraestrutura utilizando a nuvem (Cloud) e implantação de serviços.*/}
                {/*Desenvolvedor full-stack com foco no back-end e um ano de experiência em aplicações PHP. Familiarizado em tecnologias Javascript, como Node.js, Typescript, Express.js, Nest.js e Next.js, além de habilidades em ferramentas de testes unitários. Possuo habilidades na implantação de serviços com nginx como load balancer, uso eficiente do Docker e construção de pipelines de implantação. Sou entusiasta e comprometido em aplicar a tecnologia para desenvolver soluções e resolver problemas. Minha trajetória inclui implementação de novos fluxos na regra de negócios, aprimoramento do layout front-end, automação de processos, integração de gateways de pagamento e provisionamento de infraestrutura na nuvem.*/}
                {person.summary.replaceAll(' ', ' ').split('\n').join(' ')}
              </Experience.Line>
            </Experience.Lines>
          </Experience.Content>
        </Experience.Root>

        <PageBreak />

        <div className="container flex flex-row gap-2">
          <div className="inline-block">
              <span className="arial text-base font-bold">Habilidades: </span>
              <span className="arial text-base">{person.skills}</span>
          </div>
        </div>

        <PageBreak />

        <div>
          <Experience.Title className="arial text-base font-bold">Experiência de trabalho</Experience.Title>
          
          {person.workExperiences.map((workExperience, index) => {
            if (!_.isDate(workExperience.startDate))
              workExperience.startDate = new Date(workExperience.startDate)
            if (_.isString(workExperience.endDate))
              workExperience.endDate = new Date(workExperience.endDate)

            const startDate = dayjs(
              workExperience.startDate.toISOString()
            ).format('MMM/YYYY')
            let endDate: string | null = ''
            if (workExperience.endDate)
              endDate = dayjs(workExperience.endDate.toISOString()).format(
                'MMM/YYYY'
              )
            else endDate = null

            return (
              <Experience.Root key={workExperience.id}>
                <Experience.Container>
                  <Experience.Header
                    role={workExperience.role}
                    enterprise={workExperience.enterprise}
                    startDate={startDate}
                    endDate={endDate}
                    type={workExperience.type}
                    workModel="in-office"
                    // activityTime={dayjs('2023-02-01').diff('2024-02-01')}
                    currentActivity={workExperience.currentlyPosition}
                  />

                  <Experience.Lines>
                    {workExperience.achievements.map((achievement) => {
                      return (
                        <Experience.Line className="flex" key={achievement.id} withDot={true}>
                          {achievement.content}
                        </Experience.Line>
                      )
                    })}
                  </Experience.Lines>
                </Experience.Container>
                {/* {person.workExperiences.length - 1 !== index && (<hr />)} */}

              </Experience.Root>
            )
          })}
        </div>

        <PageBreak />

        <div>
          <Experience.Title className="arial text-base font-bold">Educação</Experience.Title>

          <Experience.Root className="flex flex-col gap-1">
            <Experience.Header
              enterprise="FATEC Araçatuba"
              workModel="in-office"
              role="Ánalise e Desenvolvimento de Sistemas"
              type="university"
              startDate={dayjs(new Date('2020-02-02').toISOString()).format(
                'MMM/YYYY'
              )}
              endDate={dayjs(new Date('2022-12-10').toISOString()).format(
                'MMM/YYYY'
              )}
              currentActivity={false}
            />

            <Experience.Header
              enterprise="ETEC Araçatuba"
              workModel="in-office"
              role="Desenvolvimento de Sistemas"
              type="course"
              startDate={dayjs(new Date('2018-07-20').toISOString()).format(
                'MMM/YYYY'
              )}
              endDate={dayjs(new Date('2019-12-10').toISOString()).format(
                'MMM/YYYY'
              )}
              currentActivity={false}
            />

            <Experience.Header
              enterprise="C.E.L Araçatuba"
              workModel="in-office"
              role="Espanhol"
              type="course"
              startDate={dayjs(new Date('2017-02-02').toISOString()).format(
                'MMM/YYYY'
              )}
              endDate={dayjs(new Date('2019-06-10').toISOString()).format(
                'MMM/YYYY'
              )}
              currentActivity={false}
            />

            <Experience.Header
              enterprise="C.E.L Araçatuba"
              workModel="in-office"
              role="Inglês"
              type="course"
              startDate={dayjs(new Date('2018-02-02').toISOString()).format(
                'MMM/YYYY'
              )}
              endDate={dayjs(new Date('2018-12-10').toISOString()).format(
                'MMM/YYYY'
              )}
              currentActivity={false}
            />
          </Experience.Root>
        </div>
      </div>
    </Tailwind>
  )
}

export function CVTemplatePage() {
  return <></>
}

export default async function Page() {
  return <CVTemplatePage />
}
