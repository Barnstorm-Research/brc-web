const Home = () => {
  return (
    <main className="flex flex-col p-6 sm:p-12 flex-1">
      <section id="about">
        <h1 className="text-3xl mb-16">About</h1>
        <div className="px-4 py-8 sm:p-12 md:p-16 bg-neutral-800 mb-44 sm:-mx-12 -mx-6">
          <div className="relative w-fit m-auto sm:px-16 sm:p-12">
            <h2 className="text-2xl text-center font-bold p-4">What We Do</h2>
            <p className="max-w-4xl m-auto sm:text-center p-4 relative text-sm sm:text-base text-neutral-300">
              We develop custom software for our clients. We focus first on
              creating a solid core functionality, then building on features the
              customer requests. We develop web-based user interfaces to allow
              military personnel to rapidly ramp up on new areas of interest,
              smart back-ends that apply machine learning techniques to pull out
              important information, and developer frameworks that make it
              easier to implement new planning domains – saving time and money
              for our customers.
            </p>
            <div className="h-12 w-12 border border-solid border-neutral-600 top-0 left-0  absolute border-r-0 border-b-0 hidden sm:block"></div>
            <div className="h-12 w-12 border border-solid border-neutral-600 bottom-0 right-0 absolute border-l-0 border-t-0 hidden sm:block"></div>
            <div className="h-12 w-12 border border-solid border-neutral-600 top-0 right-0 absolute border-l-0 border-b-0 hidden sm:block"></div>
            <div className="h-12 w-12 border border-solid border-neutral-600 bottom-0 left-0  absolute border-r-0 border-t-0 hidden sm:block"></div>
          </div>
        </div>

        <div className="sm:px-8 p-4 py-16 relative max-w-7xl m-auto mb-32 md:mb-64 min-h-[470px] flex flex-col justify-center">
          <h2 className="text-xl sm:text-3xl font-bold mb-6 max-w-xl">
            Coordination Under Uncertainty
          </h2>
          <p className="z-10 p-4 md:max-w-xl lg:max-w-3xl border-l border-solid border-neutral-500 text-neutral-300">
            We specialize in helping teams of manned and unmanned vehicles
            communicate in limited communications environments. Barnstorm
            Research has developed software to assist in missions that need
            coordinated behavior between multiple friendly forces. We use
            state-of-the-art Machine Learning techniques to reduce the mission
            plan sizes and enable assets to better predict behavior.
          </p>
          <div className="bg-neutral-900 hidden md:block absolute right-96 top-0 bottom-0 w-60 lg:w-96 -z-10"></div>
          <div className="bg-neutral-600 absolute right-0 top-0 bottom-0 left-0 md:w-96 md:left-auto -z-10">
            image
          </div>
          <div className="h-32 border-r-2 border-solid border-neutral-700 absolute -bottom-32 right-0 hidden md:block"></div>
        </div>

        <div className="sm:px-8 p-4 py-16 relative max-w-7xl m-auto mb-32 md:mb-64 min-h-[470px] flex flex-col justify-center">
          <h2 className="text-xl sm:text-3xl font-bold mb-6 max-w-xl md:text-right md:ml-auto">
            Machine Learning and Natural Language Processing
          </h2>
          <p className="z-10 p-4 md:max-w-xl lg:max-w-3xl border-l md:border-l-0 md:border-r border-solid border-neutral-500 text-neutral-300 md:ml-auto md:text-right">
            We aim to make our customers’ workflows more effective and efficient
            by creating solutions that literally learn as they go. By
            discovering patterns over time, we allow users to anticipate
            upcoming needs, preposition data, and get a head start on tasks. Our
            concept clustering technology goes a step further – helping present
            results to the user that could otherwise be easily missed.
          </p>
          <div className="bg-neutral-900 hidden md:block absolute left-96 top-0 bottom-0 w-60 lg:w-96 -z-10"></div>
          <div className="bg-neutral-600 absolute left-0 top-0 bottom-0 right-0 md:w-96 md:right-auto -z-10">
            image
          </div>
          <div className="h-32 border-l-2 border-solid border-neutral-700 absolute -bottom-32 left-0 hidden md:block"></div>
        </div>

        <div className="sm:px-8 p-4 py-16 relative max-w-7xl m-auto mb-32 md:mb-64 min-h-[470px] flex flex-col justify-center">
          <h2 className="text-xl sm:text-3xl font-bold mb-6 max-w-xl">
            Rapid User Experience Development
          </h2>
          <p className="z-10 p-4 md:max-w-xl lg:max-w-3xl border-l border-solid border-neutral-500 text-neutral-300">
            We specialize in early concept generation and prototype
            implementation. We apply our ideation approach to the design of
            autonomous, adaptable and verifiable cyber-physical systems. We
            favor lightweight systems and software architectures, suitable for
            today’s rapidly evolving needs and infrastructure. We seek solutions
            with long life cycles and low maintenance costs.
          </p>
          <div className="bg-neutral-900 hidden md:block absolute right-96 top-0 bottom-0 w-60 lg:w-96 -z-10"></div>
          <div className="bg-neutral-600 absolute right-0 top-0 bottom-0 left-0 md:w-96 md:left-auto -z-10">
            image
          </div>
          <div className="h-32 border-r-2 border-solid border-neutral-700 absolute -bottom-32 right-0 hidden md:block"></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
