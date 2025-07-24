import React from "react";
import Card from "../components/Card";
import Circle from "../components/Circle";
import { Code, Expand, Handshake } from "lucide-react";

const AdvantageCard = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="bg-white flex w-full flex-col text-black items-center gap-4 justify-start">
      <Circle variant="big">{children}</Circle>
      <h2 className="text-2xl text-center lg:text-start font-bold">{title}</h2>
      <p className="text-center">{description}</p>
    </Card>
  );
};

const WorkingWithMe = () => {
  return (
    <section className="p-4 lg:h-[90vh] scroll-mt-22" id="advantages">
      <Card className="bg-purpleprimary h-full flex flex-col gap-6 text-white">
        <div className="lg:h-1/3">
          <h1 className="text-3xl text-center sm:text-start sm:text-5xl font-bold pb-4">
            Work with me
          </h1>
          <p className="text-lg  lg:w-2/5">
            So far i worked with many web technologies which helped me
            understanding how programming works and made me create great
            applications used in business
          </p>
        </div>
        <div className="sm:h-2/3 flex flex-col sm:flex-row justify-between w-full gap-6 ">
          <AdvantageCard
            title="Clean and scalable code"
            description="I'm trying my best to create flexible and solid functionality for all of my projects."
          >
            <Code width={64} height={64} />
          </AdvantageCard>
          <AdvantageCard
            title="Communication and support"
            description="Communcation is a key to success. Working with me is easy and understandable. I try all my best to meet requirements for my clients."
          >
            <Handshake width={64} height={64} />
          </AdvantageCard>
          <AdvantageCard
            title="Responsive design"
            description="All my projects are made to look good on various device sizes. "
          >
            <Expand width={64} height={64} />
          </AdvantageCard>
        </div>
      </Card>
    </section>
  );
};

export default WorkingWithMe;
