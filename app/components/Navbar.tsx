import React from "react";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-screen z-50 h-[10vh] bg-white border-b-4 border-black px-6 flex flex-row items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        Bartłomiej Mazik
      </Link>
      <Button variant="yellow" text="Contact" href="/contact" />
    </div>
  );
};

export default Navbar;
