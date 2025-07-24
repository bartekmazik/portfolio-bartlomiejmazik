import React from "react";

const Card = ({
  className,
  children,
  shadow = true,
}: {
  className: string;
  children: React.ReactNode;
  shadow?: boolean;
}) => {
  return (
    <div
      className={`${className} border-4 border-black ${
        shadow ? "drop-shadow-small" : ""
      } rounded-xl min-h-[20vh] p-4 `}
    >
      {children}
    </div>
  );
};

export default Card;
