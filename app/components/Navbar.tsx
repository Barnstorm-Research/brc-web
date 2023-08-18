"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink = ({ href, text }: NavLinkProps) => {
  const currentRoute = usePathname();

  return (
    <Link
      href={href}
      className={`text-stone-900 hover:text-stone-600 w-fit ${
        currentRoute === href ? "underline" : ""
      }`}
    >
      {text}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-background">
      {/* Desktop Nav */}
      <ul className="hidden sm:flex gap-6 p-4 justify-center">
        <NavLink href="/" text="About" />
        <NavLink href="/publications" text="Publications" />
        <NavLink href="/contact" text="Contact" />
        <NavLink href="/join" text="Join Our Team" />
      </ul>

      {/* Mobile nav */}
      <ul className="flex flex-col gap-2 p-4 sm:hidden">
        <NavLink href="/" text="About" />
        <NavLink href="/publications" text="Publications" />
        <NavLink href="/contact" text="Contact" />
        <NavLink href="/join" text="Join Our Team" />
      </ul>
    </nav>
  );
};

export default Navbar;
