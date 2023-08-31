"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import hamburgerMenu from "../../public/hamburger-menu.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { path: "/", text: "About" },
  { path: "/publications", text: "Publications" },
  { path: "/contact", text: "Contact Us" },
  { path: "/join", text: "Join Our Team" },
];

type NavLinkProps = {
  href: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

const NavLink = ({ href, text, onClick }: NavLinkProps) => {
  const currentRoute = usePathname();

  return (
    <Link
      href={href}
      className={`text-stone-900 hover:text-stone-600 w-fit ${
        currentRoute === href ? "underline" : ""
      }`}
    >
      {onClick ? <span onClick={onClick}>{text}</span> : text}
    </Link>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="bg-background flex justify-end items-center p-4">
      {/* Desktop Nav */}
      <nav className="hidden sm:block">
        <ul className="flex gap-6 md:gap-12 justify-center">
          {links.map((link) => {
            return (
              <NavLink href={link.path} text={link.text} key={link.text} />
            );
          })}
        </ul>
      </nav>

      {/* Mobile nav */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="sm:hidden">
          <Image
            src={hamburgerMenu as string}
            alt="Menu."
            className="h-6 w-6"
          />
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <nav className="flex flex-col gap-2">
              {links.map((link) => {
                return (
                  <NavLink
                    key={link.text}
                    href={link.path}
                    text={link.text}
                    onClick={() => setOpen(false)}
                  />
                );
              })}
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
