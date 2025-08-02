import React from "react";
import Card from "../components/Card";
import Circle from "../components/Circle";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Button from "../components/Button";

const HeroTech = () => {
  return (
    <Card className="bg-blue-500 w-full sm:w-1/3 h-full flex flex-col gap-4 items-center sm:items-start justify-between ">
      <div className="flex flex-col items-center sm:items-start">
        <h2 className="text-2xl sm:text-3xl font-bold text-white pb-2">
          Technologies and tools
        </h2>
        <p className="px-3 sm:px-0 sm:w-3/4 sm:text-start text-center text-white">
          Everyday I learn new technologies to keep up the best quality of my
          websites.
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-row overflow-visible -space-x-6">
          <Circle variant="small">
            <Image src="/tech/figma.svg" alt="figma" width={36} height={36} />
          </Circle>
          <Circle variant="small">
            <Image src="/tech/vscode.svg" alt="vscode" width={36} height={36} />
          </Circle>
          <Circle variant="small">
            <Image
              src="/tech/tailwind.svg"
              alt="tailwind"
              width={36}
              height={36}
            />
          </Circle>
          <Circle variant="small">
            <Image src="/tech/nestjs.svg" alt="nestjs" width={36} height={36} />
          </Circle>
          <Circle variant="small">
            <Image src="/tech/nextjs.svg" alt="nextjs" width={36} height={36} />
          </Circle>
        </div>
        <p className="text-white"> ... and more</p>
      </div>
      <Button
        variant="white"
        href="#tech"
        text="Show tech stack"
        className="w-full lg:w-fit"
      />
    </Card>
  );
};

const HeroCustomers = () => {
  return (
    <Card className="bg-purpleprimary w-full  sm:w-1/3 h-full flex flex-col gap-4 sm:items-start items-center justify-between ">
      <div className="flex flex-col items-center sm:items-start">
        <h2 className="text-2xl sm:text-3xl font-bold text-white pb-2">
          Happy customers
        </h2>
        <p className="w-full sm:text-start text-center px-2 sm:px-0 sm:w-3/4 text-white">
          Created websites for clients that worked and meet their requirements.
        </p>
      </div>

      <Button
        variant="white"
        href="#advantages"
        text="See advantages"
        className="w-full lg:w-fit"
      />
    </Card>
  );
};

const HeroExperience = () => {
  return (
    <Card className="bg-greenprimary w-full sm:w-1/3 h-full  flex flex-col items-center sm:items-start gap-4 justify-between ">
      <div className="flex flex-col items-center sm:items-start">
        <h2 className="text-2xl sm:text-3xl font-bold text-white pb-2">
          3+ years experience
        </h2>
        <p className="w-full px-3 sm:text-start text-center sm:px-0 sm:w-3/4 text-white">
          Provided by self-made projects using back-end and front-end
          technologies.
        </p>
      </div>

      <Button
        variant="white"
        href="#projects"
        text="Projects"
        className="w-full lg:w-fit"
      />
    </Card>
  );
};

const HeroMain = () => {
  return (
    <Card className="bg-white h-1/2 flex flex-row justify-between">
      {/*Left side */}
      <div className="w-full flex flex-col gap-8 h-full justify-between">
        <div className="w-full flex flex-col items-center sm:items-start">
          <h1 className="text-2xl sm:text-6xl font-bold sm:pb-2">
            Full-stack developer
          </h1>
          <p className="text-md sm:text-lg">
            Willing to learn and ready to work
          </p>
        </div>
        <div className="flex flex-row justify-center sm:justify-start items-center gap-2">
          <Circle variant="button-small" href="https://github.com/bartekmazik">
            <GitHubLogoIcon width={"full"} height={"full"} />
          </Circle>
          <Circle
            variant="button-small"
            href="https://www.linkedin.com/in/bartlomiejmazik/"
          >
            <Image
              src="/socials/linkedin.svg"
              alt="linkedin"
              width={24}
              height={24}
            />
          </Circle>

          <Circle variant="button-small" href="/bartlomiej-mazik-cv.pdf">
            <Image
              src="/socials/resume.png"
              alt="linkedin"
              width={32}
              height={32}
            />
          </Circle>
        </div>
      </div>
      {/*Right side */}
      <div className="sm:block hidden relative w-2/5 h-full  rounded-lg overflow-hidden">
        <Image
          src="/coding-guy.webp"
          width={1024}
          height={1024}
          priority
          alt="Hero Coding Guy Picture"
          className="object-bottom"
        />
      </div>
    </Card>
  );
};

const Hero = () => {
  return (
    <section className="sm:h-full md:h-[70vh] lg:h-[90vh] p-4 flex flex-col gap-4">
      <HeroMain />
      <div className="flex flex-col sm:flex-row h-full md:h-1/2 gap-4">
        <HeroTech />
        <HeroCustomers />
        <HeroExperience />
      </div>
    </section>
  );
};

export default Hero;
