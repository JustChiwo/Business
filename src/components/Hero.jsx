function Hero() {
  return (
    <div
      id="Home"
      className="h-[600px] flex flex-col items-center justify-center px-4 text-center"
    >
      <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
        Reeds Digital Solutions
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        Affordable, high-converting web design for startups, local businesses,
        and ambitious teams ready to stand out online.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#Contact"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Book a free call
        </a>
        <a
          href="#Services"
          className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
        >
          View services
        </a>
      </div>
    </div>
  );
}

export default Hero;
