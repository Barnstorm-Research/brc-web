import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TeamMemberLinkType } from "../publications/page";

const PublicationCard = ({ name, href, image, prefix }: TeamMemberLinkType) => {
  const nameSplit = name.split(" ");
  const firstInitial = nameSplit[0][0];
  const lastInitial = nameSplit[nameSplit.length - 1][0];

  const cardBg = "bg-neutral-50";
  const cardTextColor = "text-main-accent";
  const cardFooterBg = "bg-neutral-50";
  const cardFooterTextColor = "text-neutral-800";

  return (
    <Link
      href={href}
      className={`group w-full max-w-[380px] sm:w-[380px] md:max-w-none shadow-lg rounded-lg overflow-hidden md:hover:shadow-2xl transition-all duration-700 md:hover:scale-105 delay-100 ${cardTextColor} ${cardBg} border border-solid border-neutral-200`}
    >
      <div className="flex-col w-full relative">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="w-full h-80 bg-cover bg-center object-cover"
          />
        ) : (
          <div className="w-full h-80 text-9xl flex justify-center items-center font-thin">
            <div>{`${firstInitial}${lastInitial}`}</div>
          </div>
        )}
        <div
          className={`text-center px-4 py-6 ${cardFooterBg} relative ${cardFooterTextColor} flex justify-center items-center`}
        >
          <div className="md:group-hover:-ml-10 transition-all duration-500 ease-in-out relative w-fit font-extralight text-lg z-0 delay-100">
            <span
              className={`${cardFooterBg} z-10`}
            >{`${prefix} ${name}`}</span>
            <ArrowRight
              size={23}
              className="md:group-hover:opacity-100 opacity-0 transition-all absolute right-0 md:group-hover:-right-10 top-[3px] duration-500 -z-[1] delay-100"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PublicationCard;
