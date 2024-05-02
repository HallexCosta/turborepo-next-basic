# Personal Website

Welcome to the official repository for my personal website, a project that showcases my abilities and the technologies I love working with. This README provides insights into the structure of the project, the technologies used, and how you can explore the code yourself.

## Project Overview

This project is set up as a monorepo using TurboRepo, which allows for seamless management of multiple packages that can be developed independently but work together.

### Technologies Used

- [**TurboRepo**](https://turbo.build/repo/docs): A high-performance build system optimized for JavaScript and TypeScript monorepos. It helps in managing multiple related projects in a single repository.
- [**Next.js**](https://nextjs.org/docs): A React framework that enables functionality such as server-side rendering and generating static websites for React based projects.
- [**TailwindCSS**](https://tailwindcss.com/): A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.
- [**Vercel**](https://vercel.com): The hosting platform that seamlessly integrates with Next.js and TurboRepo, providing an optimal environment for deploying modern web applications.

## Repository Structure

The main parts of the website are contained within the `apps/hallexcosta/(landing-presentation)` directory. Here's what you'll find in the repository:

- `apps/`: Contains the source code for the website and any future projects that will be integrated.
- `packages/`: Reusable packages that can be shared across different parts of the website or in new projects.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/HallexCosta/turborepo-next-basic.git portfolios
cd portfolios
pnpm install
```

To run the website locally, use the following command:

```bash
pnpm run dev
```

Navigate to http://localhost:3001 to view the project in your browser `apps/hallexcosta`.

Design credits to **[Dina Iakovenko](https://www.linkedin.com/in/dina-iakovenko)** whose original design can be viewed on Behance.

**References**  
Live Site: https://hallexcosta.com  
Repository: https://github.com/HallexCosta/turborepo-next-basic  
Behance Design Inspiration: https://www.behance.net/gallery/162243505/Portfolio-website-forfront-end-developer
