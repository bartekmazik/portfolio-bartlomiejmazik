import Link from "next/link";
import React from "react";

const Button = ({
  variant,
  text,
  href,
}: {
  variant: "yellow" | "white";
  text: string;
  href: string;
}) => {
  return (
    <Link
      className={`${
        variant === "yellow"
          ? "bg-background hover:bg-[#ffde90]"
          : "bg-white hover:bg-gray-50"
      } py-2 font-bold text-lg px-6 hover: border-4 border-black drop-shadow-small rounded-xl transition duration-200  hover:scale-102 `}
      href={href}
    >
      {text}
    </Link>
  );
};

export default Button;
