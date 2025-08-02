import { LoaderCircle } from "lucide-react";
import React from "react";

const FormButton = ({
  variant,
  text,
  className,
  loading,
}: {
  variant: "yellow" | "white";
  text: string;
  loading: boolean;

  className?: string;
}) => {
  return (
    <button
      type="submit"
      className={`${
        variant === "yellow"
          ? "bg-background hover:bg-[#ffde90]"
          : "bg-white hover:bg-gray-50"
      } ${className} flex flex-row items-center gap-2 justify-center py-2 font-bold text-center w-fit shrink-0 text-sm xl:text-lg px-6 hover: border-4 border-black drop-shadow-small rounded-xl transition duration-200  hover:scale-102 `}
    >
      {text}
      {loading && (
        <LoaderCircle className=" animate-spin" width={24} height={24} />
      )}
    </button>
  );
};

export default FormButton;
