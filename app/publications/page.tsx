import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description: "Notable Publications from Our Team",
};

const PublicationsPage = () => {
  return (
    <main className="flex flex-col p-12 flex-1">
      <h1>Publications</h1>
    </main>
  );
};

export default PublicationsPage;
