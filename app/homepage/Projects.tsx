import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Image from "next/image";

const Project = ({
  title,
  description,
  imageUrl,
  imageAlt,
  border,
}: {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  border: boolean;
}) => {
  return (
    <div
      className={`w-full lg:min-h-[40vh] flex flex-col-reverse gap-6 lg:flex-row items-center sm:items-start justify-between ${
        border ? "border-b-4" : ""
      } py-6`}
    >
      <div className="lg:w-1/3 flex flex-col items-center sm:items-start gap-6 justify-between">
        <div>
          <h2 className="text-white text-center sm:text-start text-2xl sm:text-3xl font-bold pb-2">
            {title}
          </h2>
          <p className="text-white">{description}</p>
        </div>
        <Button
          text="See demo"
          variant="yellow"
          href="costam"
          className="w-full sm:w-fit text-center self-center lg:self-auto"
        />
      </div>
      <div className="relative border-4 rounded-lg w-full h-40 sm:h-96 lg:h-64  lg:w-1/3 bg-white overflow-hidden">
        <Image src={imageUrl} alt={imageAlt} fill />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      className="min-h-[90vh] flex flex-col p-4 gap-4 scroll-mt-22"
      id="projects"
    >
      <Card className="bg-greenprimary flex-grow ">
        <div className="border-b-4 pb-6 lg:h-[30vh] flex flex-col items-center sm:items-start">
          <h2 className="text-3xl text-center sm:text-start sm:text-5xl text-white font-bold pb-4">
            Projects
          </h2>
          <p className="text-lg text-white md:w-4/5 lg:w-2/5">
            Made some projects in various technologies which helped me
            understanding proper rules of coding and showed me how to reach
            client requirements. Here are some of them.
          </p>
        </div>
        <Project
          title="Projectorium - project management app"
          description="Project used to present how gamification and project management
            could work together. App is made with Next.js, Nest.js and
            PrismaORM. It has various functions like creating and managing team
            project, complex ranking based on points given from tasks,
            milestones, notes and virtual mentor."
          imageAlt="Projectorium"
          imageUrl="/projects/projectorium.png"
          border={true}
        />
        <Project
          title="Manuart Festiwal - handmade festival page"
          description="Webpage for handmade festival in Katowice. Backend and frontend is based on Next.js along with PrismaORM. Webpage consists of pages and components like: location map, newsletter form, contact form and informative components describing the festival."
          imageAlt="Manuart Festiwal"
          imageUrl="/projects/manuart.png"
          border={true}
        />
        <Project
          title="Let's Brick It Down! - brick building event page"
          description="Webpage for brick building festival in Katowice. Project was made in Next.js without server functions. Design of this page was self-made and shows the beauty of neobrutalistic style."
          imageAlt="Lets brick it down"
          imageUrl="/projects/letsbrickitdown.png"
          border={false}
        />
      </Card>
    </section>
  );
};

export default Projects;
