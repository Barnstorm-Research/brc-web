const Home = () => {
  return (
    <main className="flex flex-col p-6 sm:p-12 flex-1">
      <section id="about">
        <div className="px-4 py-8 sm:p-12 md:p-16 my-24">
          <div className="relative w-fit m-auto sm:p-16 max-w-2xl">
            <h2 className="text-center text-2xl uppercase tracking-widest pb-12 px-4 text-neutral-500">
              Our Philosophy
            </h2>
            <p className="max-w-4xl m-auto text-center p-4 relative text-2xl font-thin">
              At Barnstorm Research, we believe in the power of{" "}
              <span className="text-accent-text">ideas</span>, and in the{" "}
              <span className="text-accent-text">people</span> that bring them
              to light.
            </p>
            <div className="h-8 w-8 border border-solid border-neutral-700 top-0 left-0  absolute border-r-0 border-b-0 hidden sm:block"></div>
            <div className="h-8 w-8 border border-solid border-neutral-700 bottom-0 right-0 absolute border-l-0 border-t-0 hidden sm:block"></div>
            <div className="h-8 w-8 border border-solid border-neutral-700 top-0 right-0 absolute border-l-0 border-b-0 hidden sm:block"></div>
            <div className="h-8 w-8 border border-solid border-neutral-700 bottom-0 left-0  absolute border-r-0 border-t-0 hidden sm:block"></div>
          </div>
        </div>

        <div className="px-4 py-8 sm:p-12 md:p-16 mb-32 sm:mb-44 bg-neutral-950 sm:-mx-12 -mx-6">
          <h2 className="text-2xl text-center uppercase tracking-widest p-4 pb-12 md:pb-24 text-neutral-500">
            What We Do
          </h2>
          <div className="relative m-auto md:flex items-center justify-center gap-12 max-w-6xl pb-4">
            <p className="max-w-lg sm:text-center p-4 md:px-8 lg:px-12 xl:px-24 relative text-neutral-100 text-2xl font-bold m-auto md:min-w-[200px]">
              We develop{" "}
              <span className="text-accent-text">custom software</span> for our
              clients.
            </p>
            <div className="w-[1px] h-44 bg-neutral-700 hidden md:block"></div>
            <p className="sm:text-center p-4 relative text-neutral-300 max-w-lg m-auto font-thin">
              We focus first on creating a solid core functionality, then
              building on features the customer requests. We develop web-based
              user interfaces to allow military personnel to rapidly ramp up on
              new areas of interest, smart back-ends that apply machine learning
              techniques to pull out important information, and developer
              frameworks that make it easier to implement new planning domains –
              saving time and money for our customers.
            </p>
          </div>
        </div>

        <div className="text-center text-3xl uppercase tracking-widest pb-24 sm:pb-32 px-4 text-accent-text">
          Our Specialties
        </div>

        <div className="sm:px-8 p-4 py-16 relative max-w-7xl m-auto mb-32 md:mb-64 min-h-[470px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 max-w-xl">
            Coordination Under Uncertainty
          </h2>
          <p className="z-10 p-4 md:max-w-md lg:max-w-xl xl:max-w-3xl border-l border-solid border-neutral-700 text-neutral-100 font-thin text-lg">
            We specialize in helping teams of manned and unmanned vehicles
            communicate in limited communications environments. Barnstorm
            Research has developed software to assist in missions that need
            coordinated behavior between multiple friendly forces. We use
            state-of-the-art Machine Learning techniques to reduce the mission
            plan sizes and enable assets to better predict behavior.
          </p>
          <div className="bg-neutral-950 hidden md:block absolute right-96 top-0 bottom-0 w-60 lg:w-96 -z-10"></div>
          <div className="bg-neutral-800 absolute right-0 top-0 bottom-0 left-0 md:w-96 md:left-auto -z-10 md:bg-[url('../public/image-1.jpg')] bg-no-repeat bg-cover bg-center brightness-[40%] lg:brightness-75 xl:brightness-100"></div>
          <div className="h-32 border-r-2 border-solid border-neutral-800 absolute -bottom-32 right-0 hidden md:block"></div>
        </div>

        <div className="sm:px-8 p-4 py-16 relative max-w-7xl m-auto mb-32 md:mb-64 min-h-[470px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 max-w-xl md:text-right md:ml-auto">
            Machine Learning and Natural Language Processing
          </h2>
          <p className="z-10 p-4 md:max-w-md lg:max-w-xl xl:max-w-3xl border-l md:border-l-0 md:border-r border-solid border-neutral-700 text-neutral-100 md:ml-auto md:text-right font-thin text-lg">
            We aim to make our customers’ workflows more effective and efficient
            by creating solutions that literally learn as they go. By
            discovering patterns over time, we allow users to anticipate
            upcoming needs, preposition data, and get a head start on tasks. Our
            concept clustering technology goes a step further – helping present
            results to the user that could otherwise be easily missed.
          </p>
          <div className="bg-neutral-950 hidden md:block absolute left-96 top-0 bottom-0 w-60 lg:w-96 -z-10"></div>
          <div className="bg-neutral-800 absolute left-0 top-0 bottom-0 right-0 md:w-96 md:right-auto -z-10 md:bg-[url('../public/image-2.jpg')] bg-no-repeat bg-cover bg-center brightness-[40%] lg:brightness-75 xl:brightness-100"></div>
          <div className="h-32 border-l-2 border-solid border-neutral-800 absolute -bottom-32 left-0 hidden md:block"></div>
        </div>

        <div className="sm:px-8 p-4 py-16 relative max-w-7xl m-auto mb-32 md:mb-64 min-h-[470px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 max-w-xl">
            Rapid User Experience Development
          </h2>
          <p className="z-10 p-4 md:max-w-md lg:max-w-xl xl:max-w-3xl border-l border-solid border-neutral-700 text-neutral-100 font-thin text-lg">
            We specialize in early concept generation and prototype
            implementation. We apply our ideation approach to the design of
            autonomous, adaptable and verifiable cyber-physical systems. We
            favor lightweight systems and software architectures, suitable for
            today’s rapidly evolving needs and infrastructure. We seek solutions
            with long life cycles and low maintenance costs.
          </p>
          <div className="bg-neutral-950 hidden md:block absolute right-96 top-0 bottom-0 w-60 lg:w-96 -z-10"></div>
          <div className="bg-neutral-800 absolute right-0 top-0 bottom-0 left-0 md:w-96 md:left-auto -z-10 md:bg-[url('../public/image-3.jpg')] bg-no-repeat bg-cover bg-center brightness-[40%] lg:brightness-75 xl:brightness-100"></div>
          <div className="h-32 border-r-2 border-solid border-neutral-800 absolute -bottom-32 right-0 hidden md:block"></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
