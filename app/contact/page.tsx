import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Our Team",
};

const ContactPage = () => {
  return (
    <main className="flex flex-col p-12 flex-1">
      <h1>Contact Us</h1>
    </main>
  );
};

export default ContactPage;
