function Contact() {
  return (
    <section id="Contact" className="bg-white px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[32px] bg-slate-900 px-6 py-10 text-white shadow-[0_30px_60px_rgba(15,23,42,0.22)] sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Ready to Elevate Your Business?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              Tell us what you need and we’ll help you build a website that
              looks professional, works fast, and helps your business convert
              more leads.
            </p>
          </div>
          <button className="rounded-full  w-50 bg-yellow-400 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
