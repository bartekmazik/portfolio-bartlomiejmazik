import React from "react";

const Card = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`${className} border-4 border-black drop-shadow-small rounded-xl min-h-[20vh] p-4 `}
    >
      {children}
    </div>
  );
};

export default Card;
