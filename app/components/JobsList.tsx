import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { MapPin, Clock2 } from "lucide-react";
import { scrapeJobs } from "../jobScraper";

const JobsList = async () => {
  const jobsData = await scrapeJobs();

  const jobCards =
    jobsData.length > 0
      ? jobsData.map((job) => {
          return (
            <Link href={job.url} key={job.url}>
              <div className="group w-full bg-neutral-50 rounded-md p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500 delay-75 border border-solid border-neutral-300">
                <div className="pb-4 mb-6 font-semibold text-lg sm:text-xl border-b border-solid border-neutral-300">
                  {job.title}
                </div>
                <div className="pb-4 flex items-center gap-2 text-neutral-600 font-light">
                  <MapPin size={17} />
                  <div>Remote</div>
                </div>

                <div className="pb-8 flex items-center gap-2 text-neutral-600 font-light">
                  <Clock2 size={15} />
                  <div>Part-time/Full-time</div>
                </div>
                <div className="flex justify-between items-center text-neutral-400 text-sm group-hover:text-neutral-900 transition-all duration-300">
                  <span className="underline group-hover:decoration-neutral-500 underline-offset-4 decoration-1 decoration-transparent transition-all duration-500">
                    View on indeed
                  </span>
                  <ExternalLink size={20} />
                </div>
              </div>
            </Link>
          );
        })
      : null;

  return (
    <>
      {jobsData.length > 0 ? (
        <div className="mx-w-2xl m-auto flex flex-col gap-6 py-6">
          {jobCards}
        </div>
      ) : (
        <section className="text-center mt-12 sm:mt-20">
          <p className="text-lg sm:text-xl text-neutral-500 max-w-xl mx-auto">
            There are no open positions currently, but be sure to check back as
            we post openings regularly.
          </p>
          <div className="mt-28">
            You can also check us out on
            <Link
              href="https://www.indeed.com/cmp/Barnstorm-Research/jobs"
              className="hover:text-neutral-500 underline px-1 inline"
            >
              indeed
            </Link>
            to keep up with our latest job openings.
          </div>
        </section>
      )}
    </>
  );
};

export default JobsList;
