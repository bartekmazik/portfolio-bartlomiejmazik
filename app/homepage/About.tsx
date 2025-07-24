import React from "react";
import Card from "../components/Card";
import Image from "next/image";
import Circle from "../components/Circle";
import { Users } from "lucide-react";

const About = () => {
  return (
    <section className="lg:h-[90vh] p-4 scroll-mt-22" id="about">
      <Card className="bg-white h-full  w-full flex flex-col sm:flex-row justify-between">
        <div className="w-full lg:w-1/3 flex flex-col gap-4 justify-between">
          <div className="text-center sm:text-start">
            <h1 className="font-bold text-3xl sm:text-5xl pb-4">About me</h1>
            <p className="text-lg text-start">
              I’m aspiring full-stack developer ready to make creative software
              and design for you and your company. Im interested in new
              technologies and willing to constantly update my knowledge.
              Personally i’m also a drone pilot with experience in video making
              and editing.
            </p>
          </div>
          <div className="flex flex-col gap-4 pb-12">
            <p className="text-xl font-bold">My interests</p>
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                {" "}
                <Image
                  src="/interests/drone.svg"
                  alt="drone"
                  width={32}
                  height={32}
                />
              </Circle>
              <p className="text-lg sm:text-xl ">Certified drone pilot</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Users width={32} height={32} />
              </Circle>
              <p className="text-lg sm:text-xl ">
                Coordinating student projects
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Circle variant="small">
                <Image
                  src="/interests/design.svg"
                  alt="design"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </Circle>
              <p className="text-lg sm:text-xl ">Web design and development</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-1/2 border-4 border-black rounded-lg ">
          <Image src="/me.jpg" fill alt="bartek" className="object-cover" />
        </div>
      </Card>
    </section>
  );
};

export default About;
