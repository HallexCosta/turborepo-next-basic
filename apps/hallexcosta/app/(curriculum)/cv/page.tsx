import Experience from './components/Experience'
import { Contact } from './components/Contact'
import { Icons } from 'ui'
import dayjs from 'dayjs'
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'

const Dot = () => <>{'•'}</>
export function CVTemplatePageEditable({ person, className = '' }) {
  return (
    <section
      className={twMerge(
        'p-4 lg:px-0 lg:mx-auto lg:max-w-3xl bg-white',
        className
      )}
    >
      <div className="flex flex-col">
        <div className="who-is">
          <h1 className="text-xl lg:text-5xl font-extrabold m-0 uppercase">
            {person?.name ?? person.person.name}
          </h1>
          <h1 className="text-lg lg:text-4xl font-extrabold m-0 uppercase">
            {person?.role ?? person.person.role}
          </h1>
        </div>

        <div className="mt-2 flex items-center flex-wrap gap-1">
          <Contact name="location">
            {/*<Icons.Location/>*/}
            <span className="text-xs">
              {person.contact?.city}, {person.contact.state}
            </span>
            <Dot />
          </Contact>
          <Contact name="whatsapp">
            {/*<Icons.Whatsapp/>*/}
            <span className="text-xs">{person.contact?.phone}</span>
            <Dot />
          </Contact>
          <Contact name="email">
            {/*<Icons.Email/>*/}
            <span className="text-xs">{person.contact?.email}</span>
            <Dot />
          </Contact>
          <Contact name="linkedin">
            {/*<Icons.Linkedin/>*/}
            <span className="text-xs">{person.contact?.linkedin}</span>
            <Dot />
          </Contact>
          <Contact name="github">
            {/*<Icons.Github/>*/}
            <span className="text-xs">{person.contact?.github}</span>
          </Contact>
        </div>
      </div>

      <Experience.Root>
        <Experience.Title>Resumo de perfil</Experience.Title>
        <Experience.Content>
          <Experience.Line>
            {/*Sou uma pessoa entusiasmada e comprometida em aproveitar o poder da tecnologia para desenvolver soluções e resolver problemas. Minha experiência como Desenvolvedor PHP back-end inclui a implementação de novos fluxos na regra de negócios de plataformas, aprimoramento do layout front-end, automação de processos, integração de gateways de pagamento, provisionamento de infraestrutura utilizando a nuvem (Cloud) e implantação de serviços.*/}
            {/*Desenvolvedor full-stack com foco no back-end e um ano de experiência em aplicações PHP. Familiarizado em tecnologias Javascript, como Node.js, Typescript, Express.js, Nest.js e Next.js, além de habilidades em ferramentas de testes unitários. Possuo habilidades na implantação de serviços com nginx como load balancer, uso eficiente do Docker e construção de pipelines de implantação. Sou entusiasta e comprometido em aplicar a tecnologia para desenvolver soluções e resolver problemas. Minha trajetória inclui implementação de novos fluxos na regra de negócios, aprimoramento do layout front-end, automação de processos, integração de gateways de pagamento e provisionamento de infraestrutura na nuvem.*/}
            {person.summary}
          </Experience.Line>
        </Experience.Content>
      </Experience.Root>

      <div className="container flex flex-row gap-2 mt-6">
        <div className="flex flex-col">
          <h3 className="text-md font-bold">Habilidades</h3>
          <ul className="hard-skills pl-2 flex flex-col">
            <Experience.Line>{person.skills}</Experience.Line>
            {/*<Experience.Line withDot>PHP +7.4 e +8.3</Experience.Line>*/}
            {/*<Experience.Line withDot>Laravel / Yii2 / Hyperf</Experience.Line>*/}
            {/*<Experience.Line withDot>JavaScript / TypeScript</Experience.Line>*/}
            {/*<Experience.Line withDot>React.js / Next.js / Nullstack</Experience.Line>*/}
            {/*<Experience.Line withDot>Express / Fastify / Nest.js</Experience.Line>*/}
            {/*<Experience.Line withDot>Prisma / TypeORM / Knex.js</Experience.Line>*/}
            {/*<Experience.Line withDot>Testing Libraries (Jest)</Experience.Line>*/}
            {/*<Experience.Line withDot>Git / GitHub / Github Actions</Experience.Line>*/}
            {/*<Experience.Line withDot>Style Components / Tailwind</Experience.Line>*/}
            {/*<Experience.Line withDot>CI / CD</Experience.Line>*/}
            {/*<Experience.Line withDot>Docker e Docker Compose</Experience.Line>*/}
            {/*<Experience.Line withDot>MySQL / PostgreSQL / SQLite / MongoDB</Experience.Line>*/}
          </ul>
        </div>

        {/*<div className="flex flex-col">*/}
        {/*    <h3 className="text-md font-bold">Soft Skills</h3>*/}
        {/*    <ul className="soft-skills pl-2">*/}
        {/*        <Experience.Line withDot>Inteligência emocional</Experience.Line>*/}
        {/*        <Experience.Line withDot>Autoconhecimento</Experience.Line>*/}
        {/*        <Experience.Line withDot>Autoaprendizagem</Experience.Line>*/}
        {/*        <Experience.Line withDot>Organizado</Experience.Line>*/}
        {/*        <Experience.Line withDot>Trabalho em equipe</Experience.Line>*/}
        {/*    </ul>*/}
        {/*</div>*/}
      </div>

      <div>
        <h2 className="mt-6 text-lg font-bold">Experiência de trabalho</h2>

        {person.workExperiences.map((workExperience) => {
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
                      <Experience.Line key={achievement.id} withDot={true}>
                        {achievement.content}
                      </Experience.Line>
                    )
                  })}
                </Experience.Lines>
              </Experience.Container>
            </Experience.Root>
          )
        })}
      </div>

      <div className="mt-6">
        <h2 className="mt-6 text-lg font-bold">Educação</h2>

        <Experience.Root className="flex flex-col gap-4">
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

          {/*<Experience.Container>*/}
          {/*    <Experience.Content>*/}
          {/*        <Experience.Line withDot activityTime="3 anos">FATEC Araçatuba</Experience.Line>*/}
          {/*        <Experience.Line withDot activityTime="1 ano e 5 meses">ETEC Araçatuba</Experience.Line>*/}
          {/*        <Experience.Line withDot activityTime="3 anos">C.E.L Araçatuba</Experience.Line>*/}
          {/*        <Experience.Line withDot activityTime="Ensino médio completo">Purcina Elisa de*/}
          {/*            Almeida</Experience.Line>*/}
          {/*    </Experience.Content>*/}
          {/*</Experience.Container>*/}
        </Experience.Root>
      </div>

      <div className="mt-6">
        {/*<Experience.Root>*/}
        {/*    <Experience.Header*/}
        {/*        category="Idiomas"*/}
        {/*    />*/}

        {/*    <Experience.Container>*/}
        {/*        <Experience.Content>*/}
        {/*            <Experience.Line withDot>Português - Nativo</Experience.Line>*/}
        {/*            <Experience.Line withDot>Inglês - Técnico para escrita e leitura</Experience.Line>*/}
        {/*            <Experience.Line withDot>Espanhol - Escrita, leitura, fala e compreensão</Experience.Line>*/}
        {/*        </Experience.Content>*/}
        {/*    </Experience.Container>*/}
        {/*</Experience.Root>*/}
      </div>
    </section>
  )
}

export function CVTemplatePage() {
  return <></>
  // return (
  //   <section className="p-4 lg:px-0 lg:mx-auto lg:max-w-4xl">
  //     <div className="flex flex-col lg:flex-row lg:justify-between">
  //       <div className="who-is">
  //         <h1 className="text-xl lg:text-5xl font-extrabold m-0 uppercase">
  //           Hállex Costa
  //         </h1>
  //         <h1 className="text-lg lg:text-4xl font-extrabold m-0 uppercase">
  //           Desenvolvedor Fullstack
  //         </h1>
  //       </div>
  //
  //       <div className="contact-list mt-2 grid grid-rows-3 grid-flow-col gap-1 lg:flex lg:flex-col">
  //         <Contact name="linkedin">
  //           <Icons.Linkedin />
  //           <span className="text-xs">https://linkedin.com/in/hallexcosta</span>
  //         </Contact>
  //
  //         <Contact name="github">
  //           <Icons.Github />
  //           <span className="text-xs">https://github.com/hallexcosta</span>
  //         </Contact>
  //
  //         <Contact name="email">
  //           <Icons.Email />
  //           <span className="text-xs">hallex.costa@hotmail.com</span>
  //         </Contact>
  //
  //         <Contact name="location">
  //           <Icons.Location />
  //           <span className="text-xs">Araçatuba, SP, Brasil</span>
  //         </Contact>
  //
  //         <Contact name="whatsapp">
  //           <Icons.Whatsapp />
  //           <span className="text-xs">(18) 99788-7240</span>
  //         </Contact>
  //       </div>
  //     </div>
  //
  //     <Experience.Root>
  //       <Experience.Title>Resumo de perfil</Experience.Title>
  //       <Experience.Content>
  //         <Experience.Line>
  //           {/*Sou uma pessoa entusiasmada e comprometida em aproveitar o poder da tecnologia para desenvolver soluções e resolver problemas. Minha experiência como Desenvolvedor PHP back-end inclui a implementação de novos fluxos na regra de negócios de plataformas, aprimoramento do layout front-end, automação de processos, integração de gateways de pagamento, provisionamento de infraestrutura utilizando a nuvem (Cloud) e implantação de serviços.*/}
  //           Desenvolvedor full-stack com foco no back-end e um ano de
  //           experiência em aplicações PHP. Familiarizado em tecnologias
  //           Javascript, como Node.js, Typescript, Express.js, Nest.js e Next.js,
  //           além de habilidades em ferramentas de testes unitários. Possuo
  //           habilidades na implantação de serviços com nginx como load balancer,
  //           uso eficiente do Docker e construção de pipelines de implantação.
  //           Sou entusiasta e comprometido em aplicar a tecnologia para
  //           desenvolver soluções e resolver problemas. Minha trajetória inclui
  //           implementação de novos fluxos na regra de negócios, aprimoramento do
  //           layout front-end, automação de processos, integração de gateways de
  //           pagamento e provisionamento de infraestrutura na nuvem.
  //         </Experience.Line>
  //       </Experience.Content>
  //     </Experience.Root>
  //
  //     <div className="container flex flex-col gap-2 mt-6 sm:flex-row lg:gap-4">
  //       <div className="flex flex-col">
  //         <h3 className="text-md font-bold">Hard Skills</h3>
  //         <ul className="hard-skills pl-2 flex flex-col sm:grid sm:grid-rows-6 sm:grid-flow-col sm:gap-x-4">
  //           <Experience.Line withDot>PHP +7.4 e +8.3</Experience.Line>
  //           <Experience.Line withDot>Laravel / Yii2 / Hyperf</Experience.Line>
  //           <Experience.Line withDot>JavaScript / TypeScript</Experience.Line>
  //           <Experience.Line withDot>
  //             React.js / Next.js / Nullstack
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Express / Fastify / Nest.js
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Prisma / TypeORM / Knex.js
  //           </Experience.Line>
  //           <Experience.Line withDot>Testing Libraries (Jest)</Experience.Line>
  //           <Experience.Line withDot>
  //             Git / GitHub / Github Actions
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Style Components / Tailwind
  //           </Experience.Line>
  //           <Experience.Line withDot>CI / CD</Experience.Line>
  //           <Experience.Line withDot>Docker e Docker Compose</Experience.Line>
  //           <Experience.Line withDot>
  //             MySQL / PostgreSQL / SQLite / MongoDB
  //           </Experience.Line>
  //         </ul>
  //       </div>
  //
  //       <div className="flex flex-col">
  //         <h3 className="text-md font-bold">Soft Skills</h3>
  //         <ul className="soft-skills pl-2">
  //           <Experience.Line withDot>Inteligência emocional</Experience.Line>
  //           <Experience.Line withDot>Autoconhecimento</Experience.Line>
  //           <Experience.Line withDot>Autoaprendizagem</Experience.Line>
  //           <Experience.Line withDot>Organizado</Experience.Line>
  //           <Experience.Line withDot>Trabalho em equipe</Experience.Line>
  //         </ul>
  //       </div>
  //     </div>
  //
  //     <Experience.Root>
  //       <Experience.Title>Experiência de trabalho</Experience.Title>
  //
  //       <Experience.Container>
  //         <Experience.Header
  //           role="Desenvolvedor PHP"
  //           enterprise="Neoplan"
  //           activityTime="6 meses"
  //           currentActivity
  //         />
  //         <Experience.Lines>
  //           <Experience.Line>
  //             Atuei na implementando de um novo fluxo na regra de negócios da
  //             plataforma. Nesse novo contexto, a plataforma recebe os pagamentos
  //             do contratante e realiza a liberação do pagamento para o prestador
  //             de serviços após a confirmação do contratante, por meio do gateway
  //             de pagamento integrado à aplicação.
  //           </Experience.Line>
  //
  //           <br />
  //           <Experience.Line>Minhas atividades: </Experience.Line>
  //           <br />
  //
  //           <Experience.Line withDot>
  //             Aprimoramento no layout do front-end
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Implementação de um modulo de tradução permitindo o usuário
  //             escolher o idioma inglês ou português para utilizar o aplicativo.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Implementação de funcionalidade de recuperação de senha através do
  //             E-mail.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Implementação filas/background jobs utilizando o Redis com Yii2.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Automatização no fluxo de Done, para auto confirmar caso passe 2
  //             dias que o evento foi iniciado e nenhuma de ambas as partes
  //             fizeram a confirmação pela plataforma. A aplicação identifica
  //             esses saques pendentes sem confirmação e envia para seus
  //             respectivos recebedores.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Implementando uma nova logica no filtro de pesquisa para buscar
  //             músicos que possua pelo menos um dos estilos musicais aplicados no
  //             filtro.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Implementação da Push Notifications, para notificar os
  //             dispositivos de um usuário sobre alguma atividade prolongada ou
  //             que aconteça em background como confirmação de pagamento,
  //             recebimentos, mensagens, solicitações de eventos (aceitos,
  //             recusados, cancelados e concluídos).
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Provisionamento e escalonamento de três novas instâncias do
  //             back-end e oito do front-end.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Implementação de politica de cancelamento e estornos em eventos,
  //             que são aplicados tanto ao contratante quanto em músicos, que
  //             cancelam em cima da hora, utilizando o gateway de pagamento.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Implementando mecanismo de backup do banco de dados
  //             periodicamente, e mantendo um histórico de backups em Cloud usando
  //             os serviços da Firebase Cloud Storage.
  //           </Experience.Line>
  //         </Experience.Lines>
  //       </Experience.Container>
  //
  //       <Experience.Container>
  //         <Experience.Header
  //           role="Desenvolvedor PHP"
  //           enterprise="Neoplan"
  //           activityTime="8 meses"
  //         />
  //         <Experience.Lines>
  //           <Experience.Line>
  //             Atuei no desenvolvimento de uma plataforma de agenciamento de
  //             músicos, onde os contratantes poderiam se cadastrar para solicitar
  //             eventos para os músicos, fazer possíveis contratações, avaliar a
  //             performance tanto do músico, dialogar ou tirar dúvidas com o chat
  //             da plataforma, utilizar filtro de busca por músicos, através da
  //             sua cidade usando latitude e longitude em um raio determinado,
  //             filtro por data de disponibilidade, filtro de estilos musicais,
  //             filtro por instrumentos musicais, etc.
  //           </Experience.Line>
  //
  //           <br />
  //           <Experience.Line>
  //             Principais responsabilidades desempenhadas:{' '}
  //           </Experience.Line>
  //           <br />
  //
  //           <Experience.Line withDot>
  //             Integrar o backend com o frontend.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Criar arquivos de migrações para aprimorar a criação e alteração
  //             de tabelas ou colunas no banco de dados.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Desenvolver seguindo boas práticas de código, e a arquitetura e
  //             valores que o framework solicita.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Colaborar no planejamento do Checkout Próprio da aplicação em
  //             conjunto com o desenvolvedor frontend e designer.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Integração com o novo gateway de pagamento
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Implementação do método de pagamento na regra de negócios da
  //             aplicação.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Implementação de um novo fluxo de pagamento, onde a plataforma
  //             recebe os valores dos contratantes e retém juntamente com gateway
  //             de pagamento, e permite a liberação quando ambos envolvidos tanto
  //             prestador de serviço (músico), quanto o contratante, fizerem a
  //             confirmação na plataforma, liberar saque.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Implementação de funcionalidade de saque, após a confirmação do
  //             show.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Containerização da aplicação usando Docker, em conjunto com Docker
  //             Compose, para o gerenciamento e orquestração dos containers, de
  //             aplicação, de filas, de banco de dados e redes.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Aplicar um modelo de CI/CD com GitHub Actions.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Configurar zonas de DNS (subdomínios) utilizando a Cloudflare.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Realização da implantação da plataforma na Digital Ocean.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Configuração Nginx, para atuar como proxy reverso e balanceador de
  //             carga, para redirecionar o tráfego de requisições provenientes
  //             tanto dos domínios do backend quanto do frontend para as
  //             respectivas aplicações.
  //           </Experience.Line>
  //         </Experience.Lines>
  //       </Experience.Container>
  //     </Experience.Root>
  //
  //     <Experience.Root>
  //       <Experience.Header
  //         role="Estagiário"
  //         enterprise="FATEC"
  //         activityTime="4 meses"
  //         // currentActivity
  //       />
  //
  //       <Experience.Container>
  //         <Experience.Content>
  //           <Experience.Line withDot>
  //             Desenvolver sistema interno de controle de T.G (Trabalho de
  //             Graduação) para a FATEC Araçatuba.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Utilizar a linguagem de programação PHP para desenvolver
  //             funcionalidades no back-end.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Utilizar template HTML, CSS e JAVASCRIPT para construção do
  //             front-end.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Realizar a integração com back-end e front-end.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Realizar integração com sistema de noticias para novo site da
  //             FATEC Araçatuba.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Realizar tarefas para ferramenta interna da empresa.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Utilizar o framework Adonis 4 para realizações tarefas no
  //             back-end.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Utilizar o framework React.js com Typescript para realizações
  //             tarefas no front-end.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Aprender sobre processos do desenvolvimento, como escolha da
  //             tecnologia e preparação de setup de um projeto.
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Desenvolvimento de back-end de um aplicativo de Ongs e Doadores.
  //           </Experience.Line>
  //         </Experience.Content>
  //       </Experience.Container>
  //     </Experience.Root>
  //
  //     <Experience.Root>
  //       <Experience.Header category="Instituição educacional" />
  //
  //       <Experience.Container>
  //         <Experience.Content>
  //           <Experience.Line withDot activityTime="3 anos">
  //             FATEC Araçatuba
  //           </Experience.Line>
  //           <Experience.Line withDot activityTime="1 ano e 5 meses">
  //             ETEC Araçatuba
  //           </Experience.Line>
  //           <Experience.Line withDot activityTime="3 anos">
  //             C.E.L Araçatuba
  //           </Experience.Line>
  //           <Experience.Line withDot activityTime="Ensino médio completo">
  //             Purcina Elisa de Almeida
  //           </Experience.Line>
  //         </Experience.Content>
  //       </Experience.Container>
  //     </Experience.Root>
  //
  //     <Experience.Root>
  //       <Experience.Header category="Idiomas" />
  //
  //       <Experience.Container>
  //         <Experience.Content>
  //           <Experience.Line withDot>Português - Nativo</Experience.Line>
  //           <Experience.Line withDot>
  //             Inglês - Técnico para escrita e leitura
  //           </Experience.Line>
  //           <Experience.Line withDot>
  //             Espanhol - Escrita, leitura, fala e compreensão
  //           </Experience.Line>
  //         </Experience.Content>
  //       </Experience.Container>
  //     </Experience.Root>
  //   </section>
  // )
}

export default async function Page() {
  return <CVTemplatePage />
}
