import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Our Team",
};

const ContactPage = () => {
  return (
    <main className="flex flex-col p-6 sm:p-12 flex-1">
      <h1 className="text-center text-2xl uppercase tracking-widest pb-12 px-4 text-neutral-400 font-extralight">
        Contact Us
      </h1>
      <div className="gap-x-6 gap-y-6 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] grid-flow-row items-stretch justify-items-stretch grid">
        {/* <div className="bg-white flex-col justify-between items-start flex overflow-hidden rounded-xl"> */}
        <div className="group w-full mb-0 mt-0 mb-[15px] mx-0 bg-neutral-50 rounded-md p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500 delay-75 border border-solid border-neutral-300">
          <div className="z-[1] w-full flex-col flex-[1_0_auto] justify-between flex relative mx-auto">
            <div className="mb-8">
              <h2 className="inline text-[#1d252d] tracking-[-0.02em] text-2xl font-semibold leading-[120%] mb-2">
                Feel free to reach out!
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
        <div className="tracking-[0] text-base font-normal leading-[132%] block"></div>
      </div>
    </main>
  );
};

export default ContactPage;
