import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactForm = () => {
  return (
    <Card
      className="sm:h-[50vh] md:h-[30vh] lg:h-full bg-white lg:w-1/3"
      shadow={false}
    >
      <form className="flex flex-col gap-2 h-full">
        <input
          placeholder="Email"
          className="border-2 border-gray-200 rounded-lg p-2 "
        ></input>
        <textarea
          placeholder="Message"
          className="border-2 border-gray-200 h-full rounded-lg p-2"
        />
        <div className="self-center p-4">
          <Button text="Send message" variant="yellow" />
        </div>
      </form>
    </Card>
  );
};

const Contact = () => {
  return (
    <section className="lg:h-[90vh] p-4 scroll-mt-22" id="contact">
      <Card className="h-full bg-white flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-4">
          <h2 className=" font-bold text-3xl text-center sm:text-start sm:text-5xl">
            Let's talk
          </h2>
          <p className="text-lg lg:w-2/3 font-light">
            Have a project in mind? Want to collaborate? Or just want to say
            hello? I'd love to hear from you. Drop me a message and let's start
            a conversation.
          </p>
        </div>
        <div className="sm:h-2/3 flex flex-col lg:flex-row justify-between gap-6">
          <ContactForm />
          <Card className="bg-white w-full flex flex-col gap-6" shadow={false}>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl sm:text-3xl font-bold">
                You can also find me here
              </h3>
              <p className="text-lg">
                {" "}
                Prefer talking different way? Here are some informations how you
                can reach me!
              </p>
            </div>
            <h4 className="text-xl sm:text-2xl font-semibold">
              {" "}
              Contact information
            </h4>
            <div className="flex flex-row items-center gap-4 text-sm sm:text-lg font-light p-4 border-2 border-black rounded-xl">
              <Phone /> +48 579 814 481
            </div>
            <div className="flex flex-row items-center gap-4 text-xs sm:text-lg font-light p-4 border-2 border-black rounded-xl">
              <Mail /> bartlomiej.mazik1@gmail.com
            </div>
            <div className="flex flex-row items-center gap-4 text-sm sm:text-lg font-light p-4 border-2 border-black rounded-xl">
              <MapPin /> Katowice, Poland
            </div>
          </Card>
        </div>
      </Card>
    </section>
  );
};

export default Contact;
