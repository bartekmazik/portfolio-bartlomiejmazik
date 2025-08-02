import Link from "next/link";
import React from "react";

const Button = ({
  variant,
  text,
  href,
  className,
}: {
  variant: "yellow" | "white";
  text: string;
  href?: string;
  className?: string;
  submit?: boolean;
}) => {
  return (
    <Link
      className={`${
        variant === "yellow"
          ? "bg-background hover:bg-[#ffde90]"
          : "bg-white hover:bg-gray-50"
      } ${className} py-2 font-bold text-center w-fit shrink-0 text-sm xl:text-lg px-6 hover: border-4 border-black drop-shadow-small rounded-xl transition duration-200  hover:scale-102 `}
      href={href || "/"}
    >
      {text}
    </Link>
  );
};

export default Button;
