const NotFound = () => {
  return (
    <main className="flex flex-col p-12 flex-1 justify-center items-center">
      <section className="sm:text-2xl flex items-center">
        <span className="mr-6 pr-6 py-4 border-r border-solid border-stone-500">
          404
        </span>
        <h1 className="text-stone-500">Page Not Found</h1>
      </section>
    </main>
  );
};

export default NotFound;
