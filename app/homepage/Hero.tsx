import React from "react";
import Card from "../components/Card";
import Circle from "../components/Circle";
import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Button from "../components/Button";

const HeroTech = () => {
  return (
    <Card className="bg-blue-500 w-1/3 h-full flex flex-col justify-between ">
      <div>
        <h2 className="text-3xl font-bold text-white">Technologies</h2>
        <p className="w-3/4 text-white">
          Everyday I learn new technologies to keep up the best quality of my
          websites
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-row overflow-visible -space-x-8">
          <Circle variant="small">a</Circle>
          <Circle variant="small">a</Circle>
          <Circle variant="small">a</Circle>
          <Circle variant="small">a</Circle>
          <Circle variant="small">a</Circle>
        </div>
        <p className="text-white"> ... and more</p>
      </div>
      <Button variant="white" href="/" text="Show tech stack" />
    </Card>
  );
};

const HeroCustomers = () => {
  return (
    <Card className="bg-purpleprimary w-1/3 h-full flex flex-col justify-between ">
      <div>
        <h2 className="text-3xl font-bold text-white">Happy customers</h2>
        <p className="w-3/4 text-white">
          Created websites for clients that worked and meet their requirements
        </p>
      </div>

      <Button variant="white" href="/" text="See advantages" />
    </Card>
  );
};

const HeroExperience = () => {
  return (
    <Card className="bg-greenprimary w-1/3 h-full flex flex-col justify-between ">
      <div>
        <h2 className="text-3xl font-bold text-white">3+ years experience</h2>
        <p className="w-3/4 text-white">
          Provided by self-made projects using back-end and front-end
          technologies
        </p>
      </div>

      <Button variant="white" href="/" text="Projects" />
    </Card>
  );
};

const HeroMain = () => {
  return (
    <Card className="bg-white h-1/2 flex flex-row justify-between">
      {/*Left side */}
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold">Full-stack developer</h1>
          <p className="text-lg">Willing to learn and ready to work</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Circle variant="button-small">
            <GitHubLogoIcon width={"full"} height={"full"} />
          </Circle>
          <Circle variant="button-small">
            <LinkedInLogoIcon width={"full"} height={"full"} />
          </Circle>

          <Circle variant="small">abc</Circle>
        </div>
      </div>
      {/*Right side */}
      <div className="relative w-1/2 h-full border-4 border-black rounded-lg overflow-hidden">
        <Image
          src="/coding-at-desk-1.png"
          fill
          alt="heroguy"
          className="object-bottom"
        />
      </div>
    </Card>
  );
};

const Hero = () => {
  return (
    <section className="h-[90vh] p-4 flex flex-col gap-4">
      <HeroMain />
      <div className="flex flex-row h-1/2 gap-4">
        <HeroTech />
        <HeroCustomers />
        <HeroExperience />
      </div>
    </section>
  );
};

export default Hero;
