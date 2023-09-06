"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin } from "lucide-react";

type FooterNavLinkProps = {
  href: string;
  text: string;
};

const FooterNavLink = ({ href, text }: FooterNavLinkProps) => {
  const currentRoute = usePathname();

  const shouldHaveUnderline =
    currentRoute.includes(href.slice(1)) ||
    (currentRoute === "/" && href === "/#about");

  return (
    <Link
      href={href}
      className="text-neutral-500 hover:text-neutral-100 w-fit whitespace-nowrap transition-all duration-300"
    >
      <span>{text}</span>
      <div
        className={`w-6 h-[1px] ${
          shouldHaveUnderline ? "bg-neutral-500" : "bg-neutral-900"
        }`}
      ></div>
    </Link>
  );
};

const links = [
  { path: "/#about", text: "About" },
  { path: "/publications", text: "Publications" },
  { path: "/contact", text: "Contact Us" },
  { path: "/join", text: "Join Our Team" },
];

const Footer = () => {
  return (
    <footer className="px-4 pb-6 pt-16 bg-neutral-900 text-center text-neutral-500">
      <div className="sm:flex justify-around items-center mb-16">
        <div className="mb-20 sm:mb-0 flex-1">
          <h2 className="text-xl lg:text-2xl pb-4 lg:px-16 text-neutral-500 whitespace-nowrap">
            Barnstorm Research
          </h2>
          <div className="flex gap-6 text-neutral-500 justify-center items-center">
            <Link
              href="https://www.linkedin.com/company/barnstorm-research-corporation"
              className="hover:text-neutral-100 transition-all duration-300"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://github.com/Barnstorm-Research/brc-web"
              className="hover:text-neutral-100 transition-all duration-300"
            >
              <Github size={20} />
            </Link>
          </div>
        </div>
        <section className="flex-1">
          <h2 className="text-neutral-100 uppercase tracking-widest mb-4 text-left max-w-[190px] lg:max-w-md m-auto">
            Links
          </h2>
          <nav className="max-w-[190px] m-auto lg:max-w-md">
            <ul className="flex flex-col gap-2 items-start lg:flex-row lg:gap-8">
              {links.map((link) => {
                return (
                  <li key={link.text}>
                    <FooterNavLink href={link.path} text={link.text} />
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>
      </div>

      <section className="border-t border-solid border-neutral-700 pt-6 md:px-6 lg:px-12">
        <div className="flex flex-col gap-4 md:gap-12 md:flex-row items-center justify-center max-w-7xl m-auto">
          <div className="text-xs">
            Built by Developers at Barnstorm Research
          </div>
          <div className="hidden md:block h-8 w-[1px] bg-neutral-700"></div>
          <div className="text-xs">©2023 Barnstorm Research Corporation</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
