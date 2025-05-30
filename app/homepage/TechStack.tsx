import React from "react";
import Card from "../components/Card";
import Circle from "../components/Circle";

const TechnologyCard = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="bg-white w-1/3 flex flex-col justify-between h-full ">
      <h2 className="text-2xl font-bold">{text}</h2>
      <div className="flex flex-col gap-2">{children}</div>
    </Card>
  );
};

const TechStack = () => {
  return (
    <div className="h-[90vh] p-4">
      <Card className="w-full h-full bg-blueprimary ">
        <div className="w-2/5 h-1/3">
          <h1 className="text-5xl font-bold text-white">Tech stack</h1>
          <p className="text-xl text-white">
            So far i worked with many web technologies which helped me
            understanding how programming works and made me create great
            applications used in business
          </p>
        </div>
        <div className="flex flex-row justify-between gap-4 h-2/3">
          <TechnologyCard text="Front-end">
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>Next.js
            </div>
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>Next.js
            </div>{" "}
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>Next.js
            </div>{" "}
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>Next.js
            </div>
          </TechnologyCard>
          <TechnologyCard text="Back-end">
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>Next.js
            </div>
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>Next.js
            </div>{" "}
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>Next.js
            </div>{" "}
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>Next.js
            </div>
          </TechnologyCard>
          <TechnologyCard text="Tools">
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>Next.js
            </div>
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>Next.js
            </div>{" "}
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>Next.js
            </div>{" "}
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>Next.js
            </div>
          </TechnologyCard>
        </div>
      </Card>
    </div>
  );
};

export default TechStack;
