import Link from "next/link";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="flex flex-col p-6 sm:p-12 flex-1">
      <section className="min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-104px)] flex flex-col justify-center sm:pb-24 md:pl-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center text-neutral-800 sm:text-left pb-8">
          Barnstorm Research
        </h1>
        <p className="text-neutral-500 text-lg sm:text-xl lg:text-2xl text-center sm:text-left">
          Advanced Software Solutions for Cutting Edge Research
        </p>
        <p className="text-neutral-400 text-lg py-10 font-light mb-16 text-center sm:text-left max-w-xl">
          Some text here about what we do. This text is a little smaller and
          should be a few sentences. At the end of this you should know what
          Barnstorm does.
        </p>
        <div className="flex flex-col xs:flex-row gap-6 items-center justify-center sm:justify-start">
          <Button variant="accent" asChild className="w-40">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" asChild className="w-40">
            <Link href="/#about">About Us</Link>
          </Button>
        </div>
      </section>
      <h1>About</h1>
    </main>
  );
};

export default Home;
