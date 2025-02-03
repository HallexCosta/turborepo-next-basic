"use client";
import {
	Avatar,
	BoxInvisible,
	ButtonGradient,
	Circle,
	Container,
	Description,
	Header,
	Project,
	ScrollUp,
	Section,
	SocialLink,
	Technology,
	Title,
} from "@portfolios/ui";

import AnimesUnitedThumbnail from "../../assets/images/animes-united-thumbnail.png";
const poppins = {
	className: "",
};

export default function Page() {
	return (
		<>
			<ScrollUp />

			<Header.Root className="mx-auto px-6 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
				<Container className="lg:justify-between items-center md: gap-6">
					<Header.Content className="text-white font-bold text-5xl">
						I.M portfolio
					</Header.Content>

					<Header.Content className="text-white font-sm text-md flex gap-20">
						<a href="#projects">Projects</a>
						<a href="#technologies">Technologies</a>
						<a href="#about-me">About me</a>
					</Header.Content>

					<Header.Content className="text-white lg:font-sm lg:text-md flex gap-6 justify-end">
						<SocialLink name="github" url="https://github.com/hallexcosta" />
						<SocialLink
							name="linkedin"
							url="https://linkedin.com/in/hallexcosta"
						/>
						<SocialLink name="instagram" url="https://instagram/hallexcosta" />
						<SocialLink name="email" url="mailto:hallex.costa@hotmail.com" />
					</Header.Content>
				</Container>
			</Header.Root>

			<main className="lg:mt-28">
				<Section className="mx-auto px-6 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl mt-16">
					<Container className="flex flex-row sm:items-center sm:justify-center md:items-start md:justify-start">
						<div className="w-full xl:w-1/2">
							<Title.Root>
								<Title.Top messages={["I'm Hállex Costa"]} />
								<Title.Down
									messages={[
										1300,
										"Backend developer",
										1300,
										"Fullstack BE-heavy developer on focus backend",
									]}
								/>
							</Title.Root>

							<Description content="A FullStack Web Developer BE-heavy. Passionate about typescript programming. I am enthusiastic and committed to harnessing the power of technology to develop solutions innovative. I am always looking for ways to apply my knowledge and technology skills to solve problems and make the world a better place." />

							<div className="mt-16">
								<ButtonGradient
									slot
									pdfUrl="/assets/pdf/curriculo-hallexcosta.pdf"
									content="Download CV"
								/>
								{/* curriculum */}
							</div>
						</div>

						<div className="hidden lg:w-1/2 lg:block relative sm:mt-40 lg:mt-0">
							<Avatar>
								<Circle.Root
									size="lg"
									className="hidden xl:block -z-20 absolute max-w-[400px] max-h-[400px]"
								/>

								<Circle.Root
									size="md"
									className="right-28 lg:right-0 xl:-top-28 xl:right-10 absolute"
								>
									<Circle.BackgroundImage url="https://github.com/hallexcosta.png" />
								</Circle.Root>

								<Circle.Root
									size="sm"
									className="-z-10 md:top-26 md:-right-20 lg:top-40 lg:right-0 xl:top-32 xl:right-10 rotate-45 bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-700 absolute"
								/>
							</Avatar>
						</div>
					</Container>
				</Section>

				<Section className="mx-auto px-6 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl mt-16">
					<Container>
						<div className="flex flex-col items-center justify-center mt-6 lg:mt-[152px] w-full">
							<h2
								id="projects"
								className={`${poppins.className} text-5xl text-white w-full`}
							>
								Projects
							</h2>

							<div className="grid grid-cols-1 md:grid-cols-2 w-full mt-16 gap-8">
								<Project
									title="Bank Service"
									description="Bank Service is a comprehensive banking application built to manage various financial operations. It includes features such as account management, transaction tracking, and financial reporting. The project is developed using modern web technologies to ensure security, scalability, and a seamless user experience."
									imageUrl="/assets/projects/dashboard.png"
									repositoryUrl="https://github.com/HallexCosta/woovi-fullstack-challenger"
									realworld
								/>

								<Project
									title="Gigz Music"
									description="Gigz Music is a real-world project built for clients using PHP technologies with the Yii2 framework on the backend and PHP + SASS + Vanilla Javascript on the frontend.
The app has several features, such as Web Push Notifications, musician filters by location within a 50-mile radius, concert schedules, availability calendars, and more."
									imageUrl="/assets/projects/gigzmusic.png"
									previewUrl="https://gigzmusic.com"
									realworld
								/>

								<Project
									title="Be a Savior - Server - NGO and Donor Management System"
									description="Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals."
									imageUrl="https://github.com/HallanCosta/be-a-savior/raw/main/docs/images/telas.png"
									previewUrl="https://google.com"
									repositoryUrl="https://github.com/hallexcosta/be-a-savior"
									realworld
								/>

								<Project
									title="NLW Setup - Habits"
									description="The project is a Habit Tracker, that allow a user to create a new Habit and see your summary of habits completed or non-completed changing the colors tone acoordingly with progress of user."
									imageUrl="https://github.com/HallexCosta/habits-tracker/blob/main/docs/images/web/home.png?raw=true"
									previewUrl="https://your-habits.netlify.app/"
									repositoryUrl="https://github.com/HallexCosta/habits-tracker"
									sideproject
								/>

								<Project
									title="League of Legends"
									description="The project is basead on the League of Legends Oficial Client. This project was used to training my skills with CSS, Figma and Clone interfaces."
									imageUrl="https://github.com/HallexCosta/league-of-legends-login-page/blob/main/docs/images/light/lg.png?raw=true"
									previewUrl="https://league-of-legends-client-login.netlify.app"
									repositoryUrl="https://github.com/HallexCosta/league-of-legends-login-page"
									sideproject
								/>

								<Project
									title="Animes United"
									description="Animes United is a platform for streaming and watching anime. It provides a user-friendly interface to browse, search, and watch your favorite anime series and movies."
									imageUrl={AnimesUnitedThumbnail.src}
									// previewUrl="https://google.com"
									repositoryUrl="https://github.com/hallexcosta/animes-united"
									sideproject
								/>
							</div>
						</div>
					</Container>
				</Section>

				<Section className="mx-auto px-6 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl mt-16">
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
									{/* <Technology.Bullet /> */}
									<Technology.SkillIcon name="ts" />
									<Technology.Content text="Typescript" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="nodejs" />
									{/* <Technology.Bullet /> */}
									<Technology.Content text="Node.js" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="js" />
									{/* <Technology.Bullet /> */}
									<Technology.Content text="Javascript" />
								</Technology.Root>

								<Technology.Root>
									{/* <Technology.SkillIcon name="js" /> */}
									<Technology.Bullet />
									<Technology.Content text="Relay" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="expressjs" />
									<Technology.Content text="Express.js" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="nestjs" />
									<Technology.Content text="Nest.js" />
								</Technology.Root>

								<Technology.Root>
									{/* <Technology.Bullet /> */}
									<Technology.SkillIcon name="mysql" />
									<Technology.Content text="MySQL" />
								</Technology.Root>

								<Technology.Root>
									{/* <Technology.Bullet /> */}
									<Technology.SkillIcon name="docker" />
									<Technology.Content text="Docker" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="docker" />
									<Technology.Content text="Docker Compose" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="nginx" />
									<Technology.Content text="Nginx" />
								</Technology.Root>

								<Technology.Root>
									<Technology.Bullet />
									<Technology.Content text="Digital Ocean" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="php" />
									<Technology.Content text="PHP" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="laravel" />
									<Technology.Content text="Laravel" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="hyperf" />
									<Technology.Content text="Hyperf" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="postgresql" />
									<Technology.Content text="PostgreSQL" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="mongodb" />
									<Technology.Content text="MongDB" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="react" />
									<Technology.Content text="React.js" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="nextjs" />
									<Technology.Content text="Next.js" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="phpstorm" />
									<Technology.Content text="PHPstorm" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="webstorm" />
									<Technology.Content text="Webstorm" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="neovim" />
									<Technology.Content text="neovim" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="cloudflare" />
									<Technology.Content text="Cloudflare" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="cypress" />
									<Technology.Content text="Cypress" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="git" />
									<Technology.Content text="Git" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="obsidian" />
									<Technology.Content text="Obsidian" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="github" />
									<Technology.Content text="Github" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="graphql" />
									<Technology.Content text="GraphQL" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="jest" />
									<Technology.Content text="Jest" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="linux" />
									<Technology.Content text="Linux" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="netlify" />
									<Technology.Content text="Netlify" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="pnpm" />
									<Technology.Content text="Pnpm" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="prisma" />
									<Technology.Content text="Prisma" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="redis" />
									<Technology.Content text="Redis" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="sqlite" />
									<Technology.Content text="SQLite" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="sass" />
									<Technology.Content text="SASS" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="vitest" />
									<Technology.Content text="Vitest" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="vite" />
									<Technology.Content text="Vite" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="vscode" />
									<Technology.Content text="Vscode" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="tailwindcss" />
									<Technology.Content text="TailwindCSS" />
								</Technology.Root>

								<Technology.Root>
									<Technology.SkillIcon name="figma" />
									<Technology.Content text="Figma" />
								</Technology.Root>

								{/* <Technology.Root>
									<Technology.SkillIcon name="aws" />
									<Technology.Content text="AWS" />
								</Technology.Root> */}
							</div>
						</div>
					</Container>
				</Section>

				{/* <BoxInvisible /> */}

				<Section className="mx-auto px-6 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl mt-16">
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

									{/* <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} /> */}
								</ol>
							</div>

							<BoxInvisible />
							<BoxInvisible />
						</div>
					</Container>
				</Section>
			</main>
		</>
	);
}
