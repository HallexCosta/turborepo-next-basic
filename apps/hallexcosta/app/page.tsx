import { Avatar, BoxInvisible, ButtonGradient, Circle, Container, Description, Header, Project, ScrollUp, Section, SocialLink, Technology, Timeline, Title } from "ui";

// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   weight: "600",
//   subsets: ["latin"],
//   display: "swap",
// });

const poppins = {
  className: ''
}

export default function Page() {
  return (
    <>
      <Header.Root>
        <Container className="lg:justify-between">
          <Header.Content className="text-white font-medium text-2xl">
            I.M portifolio
          </Header.Content>

          <Header.Content className="text-white font-sm text-md flex gap-20 justify-center mb-4 mt-4">
            <a href="#projects">Projects</a>
            <a href="#technologies">Technologies</a>
            <a href="#about-me">About me</a>
          </Header.Content>

          <Header.Content className="text-white lg:font-sm lg:text-md flex gap-6 justify-end">
            <SocialLink name="github" url="https://github.com/hallexcosta" />
            <SocialLink name="linkedin" url="https://linkedin.com/in/hallexcosta" />
            <SocialLink name="instagram" url="https://instagram/hallexcosta" />
            <SocialLink name="facebook" url="https://github.com/hallexcosta" />
          </Header.Content>
        </Container>
      </Header.Root>

      <main className="lg:mt-28">
        <Section>
          <Container className="lg:flex lg:flex-row">
            <div className="w-full">
              <Title.Root>
                <Title.Top name="Hállex Costa" />
                <Title.Down content="backend developer" />
              </Title.Root>

              <Description content="A FullStack Web Developer BE-heavy. Passionate about typescript programming. I am enthusiastic and committed to harnessing the power of technology to develop solutions innovative. I am always looking for ways to apply my knowledge and technology skills to solve problems and make the world a better place." />

              <div className="mt-16">
                <ButtonGradient content="Download CV" />
              </div>
            </div>

            <div className="hidden lg:block relative -z-10 mt-40 lg:mt-0">
              <Avatar>
                <Circle.Root size="lg" className="hidden lg:block"/>

                <Circle.Root
                  size="sm"
                  className="top-24 -right-28 rotate-45 bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-700 absolute"
                />

                <Circle.Root size="md" className="-top-28 -right-10 absolute">
                  <Circle.BackgroundImage url="https://github.com/hallexcosta.png" />
                </Circle.Root>
              </Avatar>
            </div>
          </Container>

          <ScrollUp />
        </Section>

        <Section className="">
          <Container>
            <div className="flex flex-col mt-6 lg:mt-[152px] w-full">
              <h2
                id="projects"
                className={`${poppins.className} text-5xl text-white w-full`}
              >
                Projects
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-16 gap-8">
                <Project
                  title="Be a Savior - Server - NGO and Donor Management System"
                  description="Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals."
                  imageUrl="https://github.com/HallanCosta/be-a-savior/raw/main/docs/images/telas.png"
                  previewUrl="https://google.com"
                  repositoryUrl="https://github.com/hallexcosta/be-a-savior"
                />
                <Project
                  title="NLW Setup - Habits"
                  description="The project is a Habit Tracker, that allow a user to create a new Habit and see your summary of habits completed or non-completed changing the colors tone acoordingly with progress of user."
                  imageUrl="https://github.com/HallexCosta/habits-tracker/blob/main/docs/images/web/home.png?raw=true"
                  previewUrl="https://your-habits.netlify.app/"
                  repositoryUrl="https://github.com/HallexCosta/habits-tracker"
                  personal
                />

                <Project
                  title="League of Legends"
                  description="The project is basead on the League of Legends Oficial Client"
                  imageUrl="https://github.com/HallexCosta/league-of-legends-login-page/blob/main/docs/images/light/lg.png?raw=true"
                  previewUrl="https://league-of-legends-client-login.netlify.app"
                  repositoryUrl="https://github.com/HallexCosta/league-of-legends-login-page"
                />

                {/* <Project
                  title="Furniture store landing page"
                  description="Responsive HTML/CSS layout for online furniture store. HTML5, CSS3
                  (SCSS)"
                  imageUrl="https://github.com/exif-js/exif-js/assets/55293671/37717c42-5aa1-41c6-94a9-8314888e42f5"
                  previewUrl="https://google.com"
                  repositoryUrl="https://github.com/hallexcosta"
                /> */}
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="flex flex-col mt-6 lg:mt-[152px] w-full">
              <h2
                id="technologies"
                className={`${poppins.className} text-5xl text-white w-full`}
              >
                Technologies
              </h2>

              <div className="grid grid-cols-2 lg:grid-cols-3 w-full mt-16 gap-10">
                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="Javascript" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="Typescript" />
                </Technology.Root>
                
                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="Node.js" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="MySQL" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="Docker" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="Docker Compose" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="Nginx" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="Digital Ocean" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="PHP" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="PostgreSQL" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="AWS" />
                </Technology.Root>
              </div>
            </div>
          </Container>
        </Section>

        {/* <BoxInvisible /> */}

        <Section>
          <Container>
          <div className="flex flex-col mt-6 lg:mt-[152px] w-full">
              <h2
                id="about-me"
                className={`${poppins.className} text-5xl text-white w-full`}
              >
                About me
              </h2>

              {/* <div>
  <Timeline.Root>
    <Timeline.Separator>
      <Timeline.Dot />
      <Timeline.Connector />
    </Timeline.Separator>    
    <Timeline.Content>
      Eat
    </Timeline.Content>
  </Timeline.Root>
</div> */}
            <div className="flex items-center justify-center">
               <ol className="border-l-4 border-zinc-300 mt-16 max-w-6">
                <Timeline.Root>
                  <Timeline.Dot>
                    01.07.2021
                  </Timeline.Dot>

                  <Timeline.Content>
                    <Timeline.Title>
                      Title of section 1
                    </Timeline.Title>

                    <Timeline.Description>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque scelerisque diam non nisi semper, et elementum
                      lorem ornare. Maecenas placerat facilisis mollis. Duis
                      sagittis ligula in sodales vehicula.
                    </Timeline.Description>
                  </Timeline.Content>
                </Timeline.Root>
                

                <Timeline.Root>
                  <Timeline.Dot>
                    01.07.2022
                  </Timeline.Dot>

                  <Timeline.Content>
                    <Timeline.Title>
                      Title of section 2
                    </Timeline.Title>

                    <Timeline.Description>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque scelerisque diam non nisi semper, et elementum
                      lorem ornare. Maecenas placerat facilisis mollis. Duis
                      sagittis ligula in sodales vehicula.
                    </Timeline.Description>
                  </Timeline.Content>
                </Timeline.Root>

                <Timeline.Root>
                  <Timeline.Dot>
                    01.07.2023
                  </Timeline.Dot>

                  <Timeline.Content>
                    <Timeline.Title>
                      Title of section 3
                    </Timeline.Title>

                    <Timeline.Description>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque scelerisque diam non nisi semper, et elementum
                      lorem ornare. Maecenas placerat facilisis mollis. Duis
                      sagittis ligula in sodales vehicula.
                    </Timeline.Description>
                  </Timeline.Content>
                </Timeline.Root>
                </ol> 

              </div>

              <BoxInvisible/>
              <BoxInvisible/>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
