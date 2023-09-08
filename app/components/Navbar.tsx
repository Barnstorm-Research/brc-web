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
  { path: "/#about", text: "About" },
  { path: "/publications", text: "Publications" },
  { path: "/contact", text: "Contact Us" },
  { path: "/join", text: "Join Our Team" },
];

const getActiveRouteBool = (currentRoute: string, href: string) => {
  return (
    currentRoute.includes(href.slice(1)) ||
    (currentRoute === "/" && href === "/#about")
  );
};

type HeaderNavLinkProps = {
  href: string;
  text: string;
};

const HeaderNavLink = ({ href, text }: HeaderNavLinkProps) => {
  const currentRoute = usePathname();

  const isActiveRoute = getActiveRouteBool(currentRoute, href);

  return (
    <Link
      href={href}
      className={`${
        isActiveRoute
          ? " text-neutral-200 underline underline-offset-8 hover:cursor-default"
          : "text-neutral-400 hover:text-neutral-200 border-transparent"
      } w-fit whitespace-nowrap transition-all duration-300 py-4 px-4 text-center font-light`}
    >
      {text}
    </Link>
  );
};

type MobileNavLinkProps = {
  href: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const MobileNavLink = ({ href, text, onClick }: MobileNavLinkProps) => {
  const currentRoute = usePathname();

  const isActiveRoute = getActiveRouteBool(currentRoute, href);

  return (
    <Link
      href={href}
      className={`${
        isActiveRoute
          ? "text-neutral-200 bg-neutral-900 rounded font-semibold hover:cursor-default"
          : "text-neutral-400 hover:text-neutral-100"
      }   whitespace-nowrap transition-all duration-300 text-left`}
    >
      <div className="py-2 px-4" onClick={onClick}>
        {text}
      </div>
    </Link>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-end items-center px-4 bg-neutral-900 shadow-lg">
      {/* Desktop Nav */}
      <nav className="hidden sm:block">
        <ul className="flex gap-4 md:gap-10 justify-center">
          {links.map((link) => {
            return (
              <HeaderNavLink
                href={link.path}
                text={link.text}
                key={link.text}
              />
            );
          })}
        </ul>
      </nav>

      {/* Mobile nav */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="sm:hidden py-4">
          <Image
            src={hamburgerMenu as string}
            alt="Menu."
            className="h-6 w-6"
          />
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="text-neutral-300">Menu</SheetTitle>
            <nav className="flex flex-col gap-3">
              {links.map((link) => {
                return (
                  <MobileNavLink
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
