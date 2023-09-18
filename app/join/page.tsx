import type { Metadata } from "next";
import type { JobsListProps } from "../components/JobsList";
import JobsList from "../components/JobsList";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Join Our Team",
  description: "Join Our Team",
};

// DEMO USE ONLY
// const data: JobsListProps = {
//   jobs: [
//     {
//       url: "https://google.com",
//       title: "Software Develop 1",
//       shortDescription: "Make cool software for cool customers.",
//     },
//     {
//       url: "https://linkedin.com",
//       title: "Principal Research Engineer",
//       shortDescription:
//         "Think through really challenging but rewarding problems!",
//     },
//     {
//       url: "https://sbir.gov",
//       title: "Algorithm Developer",
//       shortDescription: "Create the latest in the world of AI, NLP, and more.",
//     },
//   ],
// };

// PRODUCTION DATA
const data: JobsListProps = { jobs: [] };

const JoinPage = () => {
  return (
    <main className="flex flex-col p-6 sm:p-12 flex-1 pb-24 sm:pb-24">
      <h1 className="text-2xl mb-20 uppercase tracking-widest text-center sm:text-left">
        Join Our Team
      </h1>
      <h2 className="text-xl sm:text-2xl text-center mb-4 uppercase tracking-widest text-neutral-600">
        Open Positions
      </h2>
      <Suspense
        fallback={
          <div className="text-center animate-pulse text-lg pt-16">
            Loading Jobs...
          </div>
        }
      >
        <JobsList {...data} />
      </Suspense>
    </main>
  );
};

export default JoinPage;
