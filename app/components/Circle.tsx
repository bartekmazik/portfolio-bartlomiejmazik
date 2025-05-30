import Link from "next/link";
import React from "react";

const Circle = ({
  variant,
  children,
  href,
}: {
  variant: "small" | "big" | "button-big" | "button-small";
  children: React.ReactNode;
  href?: string;
}) => {
  {
    /*if circle is a link */
  }
  if (variant.slice(0, 6) === "button") {
    return (
      <Link
        className={`relative bg-white p-1 flex flex-col items-center justify-center border-4 border-black overflow-hidden rounded-full hover:bg-gray-50 hover:scale-105 transition duration-200 ${
          variant.slice(7) === "small" ? "h-16 w-16" : "h-32 w-32"
        } `}
        href={`${href}`}
      >
        {children}
      </Link>
    );
  } else {
    {
      /*if circle is static prop */
    }
    return (
      <div
        className={`relative bg-white border-4 border-black rounded-full ${
          variant === "small" ? "h-16 w-16" : "h-32 w-32"
        } `}
      >
        {children}
      </div>
    );
  }
};

export default Circle;
