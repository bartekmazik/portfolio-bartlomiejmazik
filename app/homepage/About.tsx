import React from "react";
import Card from "../components/Card";
import Circle from "../components/Circle";

const About = () => {
  return (
    <section className="h-[90vh] p-4">
      <Card className="bg-white h-full  w-full flex flex-row justify-between">
        <div className="w-1/3 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-5xl">About me</h1>
            <p className="text-lg">
              I’m aspiring full-stack developer ready to make creative software
              and design for you and your company. Im interested in new
              technologies and willing to constantly update my knowledge.
              Personally i’m also a drone pilot with experience in video making
              and editing.
            </p>
          </div>
          <div className="flex flex-col gap-4 pb-12">
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>
              <p className="text-xl ">Located in Katowice</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>
              <p className="text-xl ">Located in Katowice</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">a</Circle>
              <p className="text-xl ">Located in Katowice</p>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 border-4 border-black rounded-lg "></div>
      </Card>
    </section>
  );
};

export default About;
