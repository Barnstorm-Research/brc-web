import puppeteer from "puppeteer";

const URL = "https://www.indeed.com/cmp/Barnstorm-Research/jobs";

export type JobType = {
  title: string;
  url: string;
};

export async function scrapeJobs() {
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "/usr/bin/google-chrome",
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();

  // set headers to look less like a bot on the request
  await page.setExtraHTTPHeaders({
    authority: "www.indeed.com",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
    "upgrade-insecure-requests": "1",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9,en;q=0.8",
  });

  await page.goto(URL);

  const jobsData = await page.evaluate(() => {
    const jobElementsArr = document.querySelectorAll(
      "#mosaic-jobList h2.jobTitle"
    );

    return Array.from(jobElementsArr).map((job) => {
      const jobTitle = job.querySelector("span")?.innerText;
      // get the base url
      let jobUrl = job.querySelector("a")?.href;
      // get the specific job id
      const jk = job.querySelector("a")?.getAttribute("data-jk");

      if (jobUrl) {
        // remove # from the end of the url and append text needed to link to specific job
        jobUrl = `${jobUrl?.slice(0, -1)}?jk=${jk}&start=0`;
      }
      return { title: jobTitle, url: jobUrl };
    });
  });

  // filter out elements without a title or url that may have been inadvertently selected
  const completeJobsData = jobsData.filter((job): job is JobType => {
    return job.title !== undefined && job.url !== undefined;
  });

  await browser.close();
  return completeJobsData;
}
