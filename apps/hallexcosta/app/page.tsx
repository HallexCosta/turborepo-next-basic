'use client'
import { Avatar, BoxInvisible, ButtonGradient, Circle, Container, Description, Header, Project, ScrollUp, Section, SocialLink, Technology, Title } from "ui";
import AnimesUnitedThumbnail from '../assets/images/animes-united-thumbnail.png'
// import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
// Timeline
// const poppins = Poppins({
//   weight: "600",
//   subsets: ["latin"],
//   display: "swap",
// });

import {Timeline} from 'primereact/timeline'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
// import './TimelineDemo.css';

const poppins = {
  className: ''
}

export default function Page() {
  const [timelines, setTimelines] = useState([])
  
  const events = [
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
];

const customizedMarker = (item) => {
    return (
        <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
            <i className={item.icon}></i>
        </span>
    );
};

const customizedContent = (item) => {
    return (
        <Card title={item.status} subTitle={item.date} className="bg-slate-800 rounded-xl p-7 text-white">
           <div className="flex flex-col gap-8">
           { item.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} width={200} className="shadow-1" />}
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            <Button label="Read more" className="p-button-text"></Button>
           </div>
        </Card>
    );
};

  useEffect(() => {
    setTimelines([
      {
        date: '2023.12.11',
        title: 'Some Title',
        description: 'Descriptiion',
      },
      {
        date: '2023.12.11',
        title: 'Some Title',
        description: 'Descriptiion',
      }
    ])
  }, [])

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
                <Title.Top messages={["I'm Hállex Costa"]} />
                <Title.Down messages={[
                    1300,
                    'Backend developer',
                    1300,
                    'Fullstack BE-heavy developer on focus backend'
                  ]}
                />
              </Title.Root>

              <Description content="A FullStack Web Developer BE-heavy. Passionate about typescript programming. I am enthusiastic and committed to harnessing the power of technology to develop solutions innovative. I am always looking for ways to apply my knowledge and technology skills to solve problems and make the world a better place." />

              <div className="mt-16">
                <ButtonGradient slot pdfUrl="/assets/pdf/curriculo-hallexcosta.pdf" content="Download CV"/>
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

        </Section>

        <ScrollUp />
        
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

                <Project
                  title="Animes United"
                  description="Your platform for streaming/watch animes"
                  imageUrl={AnimesUnitedThumbnail.src}
                  previewUrl="https://google.com"
                  repositoryUrl="https://github.com/hallexcosta/animes-united"
                />
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
              About me (Coming soon)
            </h2>

            <div className="flex items-center justify-center">
               <ol className="border-l-4 border-zinc-300 mt-16 max-w-6">
                {/* {timelines.map(timeline => (
                  <Timeline.Root>
                    <Timeline.Dot>
                      {timeline.date}
                    </Timeline.Dot>

                    <Timeline.Content>
                      <Timeline.Title>
                        {timeline.title}
                      </Timeline.Title>

                      <Timeline.Description>
                        {timeline.description}
                      </Timeline.Description>
                    </Timeline.Content>
                  </Timeline.Root>
                ))}                 */}


                  <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
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
