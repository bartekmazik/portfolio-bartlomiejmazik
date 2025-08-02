"use client";

import React, { useState } from "react";
import Card from "../components/Card";
import { Mail, MapPin, Phone } from "lucide-react";
import FormButton from "../components/FormButton";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { useForm } from "react-hook-form";

const messageSchema = z.object({
  email: z.string().email("Incorrect email."),
  message: z.string().min(1, "Message cannot be empty."),
});

type MessageBody = z.infer<typeof messageSchema>;

const ContactForm = () => {
  const [status, setStatus] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<MessageBody>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function sendMessage(data: MessageBody) {
    setLoading(true);
    try {
      const res = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const info = await res.json();
      setLoading(false);
      setStatus(info.message);
      reset();
    } catch {
      setStatus("Try again later.");
    }
  }
  return (
    <Card
      className="sm:min-h-[50vh] md:min-h-[30vh] lg:min-h-full bg-white lg:w-1/3"
      shadow={false}
    >
      <form
        className="flex flex-col gap-2 h-full"
        onSubmit={handleSubmit(sendMessage)}
      >
        <input
          placeholder="Email"
          className="border-2 border-gray-200 rounded-lg p-2 "
          {...register("email")}
        ></input>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 ml-2">
            {errors.email.message}
          </p>
        )}
        <textarea
          placeholder="Message"
          className="border-2 border-gray-200 h-full rounded-lg p-2"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1 ml-2">
            {errors.message.message}
          </p>
        )}
        <div className="self-center p-4">
          {status ? (
            <div className="py-4 px-6 font-bold w-full text-lg ">{status}</div>
          ) : (
            <FormButton
              text={isSubmitting ? "Sending" : "Send message"}
              loading={loading}
              variant="yellow"
              className={`${status ? "hidden" : ""}`}
            />
          )}
        </div>
      </form>
    </Card>
  );
};

const Contact = () => {
  return (
    <section className="lg:min-h-[90vh] p-4 scroll-mt-22" id="contact">
      <Card className="h-full bg-white flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-4">
          <h2 className=" font-bold text-3xl text-center sm:text-start sm:text-5xl">
            {`Let's talk`}
          </h2>
          <p className="text-lg lg:w-2/3 font-light">
            {`Have a project in mind? Want to collaborate? Or just want to say
            hello? I'd love to hear from you. Drop me a message and let's start
            a conversation.`}
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
