import React from "react";
import Card from "../components/Card";
import Circle from "../components/Circle";
import Image from "next/image";

const TechnologyCard = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="bg-white w-full lg:w-1/3 flex flex-col justify-start gap-6 h-full ">
      <h2 className="text-2xl font-bold">{text}</h2>
      <div className="flex flex-col gap-2">{children}</div>
    </Card>
  );
};

const TechStack = () => {
  return (
    <section className="lg:h-[90vh] p-4 scroll-mt-22" id="tech">
      <Card className="w-full h-full bg-blueprimary flex flex-col gap-6">
        <div className="w-full lg:w-2/5 h-1/3">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center sm:text-start pb-4">
            Tech stack
          </h1>
          <p className="text-lg text-white">
            So far i worked with many web technologies which helped me
            understanding how programming works and made me create great
            applications used in business.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:h-2/3">
          <TechnologyCard text="Front-end">
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Image src="/tech/nextjs.svg" alt="" height={36} width={36} />
              </Circle>
              Next.js
            </div>
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Image src="/tech/react.svg" alt="" height={36} width={36} />
              </Circle>
              React
            </div>{" "}
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Image
                  src="/tech/typescript.svg"
                  alt=""
                  height={36}
                  width={36}
                />
              </Circle>
              Typescript
            </div>{" "}
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Image src="/tech/tailwind.svg" alt="" height={36} width={36} />
              </Circle>
              TailwindCSS
            </div>
          </TechnologyCard>
          <TechnologyCard text="Back-end">
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Image src="/tech/nestjs.svg" alt="" height={36} width={36} />
              </Circle>
              Nest.js
            </div>
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Image src="/tech/node.svg" alt="" height={36} width={36} />
              </Circle>
              Node.js
            </div>{" "}
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Image src="/tech/prisma.svg" alt="" height={36} width={36} />
              </Circle>
              Prisma
            </div>{" "}
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Image
                  src="/tech/postgresql.svg"
                  alt=""
                  height={36}
                  width={36}
                />
              </Circle>
              PostgreSQL
            </div>
          </TechnologyCard>
          <TechnologyCard text="Tools">
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Image src="/tech/vscode.svg" alt="" height={36} width={36} />
              </Circle>
              VS Code
            </div>
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Image src="/tech/git.svg" alt="" height={36} width={36} />
              </Circle>
              Git
            </div>{" "}
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Image src="/tech/figma.svg" alt="" height={36} width={36} />
              </Circle>
              Figma
            </div>{" "}
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Image
                  src="/tech/wordpress.svg"
                  alt=""
                  height={36}
                  width={36}
                />
              </Circle>
              Wordpress
            </div>
          </TechnologyCard>
        </div>
      </Card>
    </section>
  );
};

export default TechStack;
