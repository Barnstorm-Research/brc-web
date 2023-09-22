import type { Metadata } from "next";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { ExternalLink } from "lucide-react";
import PublicationCard from "../components/PublicationCard";

export const metadata: Metadata = {
  title: "Publications",
  description: "Notable Publications from Our Team",
};

export type TeamMemberLinkType = {
  name: string;
  href: string;
  image?: StaticImageData;
  prefix: "Dr." | "Ms." | "Mr.";
};

const PublicationsPage = () => {
  const teamMemberLinks: TeamMemberLinkType[] = [
    {
      name: "Jorge Tierno",
      href: "https://scholar.google.com/citations?user=sqNXWIMAAAAJ&hl=en&oi=ao",
      image: undefined,
      prefix: "Dr.",
    },
    {
      name: "Rem Wransky",
      href: "https://scholar.google.com/citations?user=oO21unYAAAAJ&hl=en&oi=sra",
      image: undefined,
      prefix: "Ms.",
    },
    // {
    //   name: "Lissangel Martinez",
    //   href: "",
    //   image: undefined,
    //   prefix: "Ms.",
    // },
  ];

  const barnstormPublications = [
    {
      href: "https://barnstormresearch.com/wp-content/uploads/2019/09/NLP2FMachine-Learning-Icon.pdf",
      text: "Improving the Robustness of Team Collaboration through Analysis of Qualitative Interactions",
    },
  ];

  const barnstormRepos = [
    {
      href: "https://github.com/jtierno2/scilabscripts",
      text: "Scilab Scripts for DataAnalysis",
    },
    {
      href: "https://github.com/jtierno2/Latexfiles",
      text: "LaTeX scripts for formatting proposals",
    },
  ];

  return (
    <main className="flex flex-col p-6 sm:p-12 flex-1">
      <h1 className="text-2xl text-neutral-700 tracking-wider uppercase mb-32">
        Publications
      </h1>

      <section className="mb-40">
        <div className="flex justify-center items-center pb-12">
          <div className="h-[1px] flex-1 bg-neutral-300 mx-2 max-w-sm hidden sm:block"></div>
          <h2 className="text-xl uppercase tracking-widest text-neutral-600 text-center sm:mx-2">
            Team Member Publications
          </h2>
          <div className="h-[1px] flex-1 bg-neutral-300 mx-2 max-w-sm hidden sm:block"></div>
        </div>
        <div className="flex flex-wrap gap-8 items-center justify-center max-w-7xl xl:m-auto">
          {teamMemberLinks.map((link) => {
            return (
              <PublicationCard
                name={link.name}
                href={link.href}
                image={link.image}
                prefix={link.prefix}
                key={link.name}
              />
            );
          })}
        </div>
      </section>

      <section className="mt-12 mb-24 bg-main-accent py-40 px-4 sm:px-8 -mx-6 sm:-mx-12">
        <h2 className="text-xl pb-10 uppercase tracking-widest text-neutral-100">
          Barnstorm Research Publications
        </h2>
        <ul className="flex flex-col gap-4">
          {barnstormPublications.map((pub, i) => {
            return (
              <li key={pub.text}>
                <Link
                  href={pub.href}
                  target="_blank"
                  className="flex gap-4 items-center text-neutral-300 w-fit group"
                >
                  <span>
                    <span className="mr-4 font-extralight text-lg hover:tracking-wide transition-all duration-500 delay-75">
                      {`${i + 1}. ${pub.text}`}
                    </span>
                    <ExternalLink
                      size={17}
                      className="-mt-1 inline transition-all opacity-0 group-hover:opacity-100 duration-300 delay-200"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-24 mb-40">
        <h2 className="text-xl pb-10 uppercase tracking-widest text-neutral-600">
          Barnstorm Research Public Code Repositories
        </h2>
        <ul className="flex flex-col gap-4">
          {barnstormRepos.map((repo, i) => {
            return (
              <li key={repo.text}>
                <Link
                  href={repo.href}
                  className="flex gap-4 items-center hover:text-main-accent w-fit group"
                >
                  <span>
                    <span className="mr-4 font-extralight text-lg text-neutral-950 hover:tracking-wide transition-all duration-500 delay-75">
                      {`${i + 1}. ${repo.text}`}
                    </span>
                    <ExternalLink
                      size={17}
                      className="-mt-1 inline transition-all opacity-0 group-hover:opacity-100 duration-300 delay-200"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default PublicationsPage;
