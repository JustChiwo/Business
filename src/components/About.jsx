function About() {
  return (
    <section
      id="About"
      className="bg-white px-6 py-20 text-slate-900 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-7">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Why Reeds Digital Solutions?
            </h2>

            <p className="max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
              We help startups, local brands, and growing companies launch
              clean, conversion-focused websites that look premium and work
              smoothly at a price that makes sense.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="/contact"
                className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                Get a quote
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <p className="text-base leading-7 text-slate-700">
              From strategy and design to launch and optimization, we create web
              experiences that help businesses look credible, reach more people,
              and convert more visitors into customers.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-slate-900">
                  Affordable
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-slate-900">Fast</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-slate-900">Custom</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid items-end gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[28px] border border-slate-200 bg-slate-100 p-6 shadow-sm">
            <p className="text-lg font-medium text-slate-900">
              Clean design, measurable growth, no wasted spend.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Your site should work harder for your business and still stay easy
              to manage and maintain.
            </p>
          </div>

          <div className="relative h-[280px] overflow-hidden rounded-[30px] shadow-[0_25px_60px_rgba(15,23,42,0.18)] sm:h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaborating on a website project"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-200">
                Strategy + build
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Websites that grow your business
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-200">
                Smart design and clear messaging that help brands look stronger
                and sell better online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
