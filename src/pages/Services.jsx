function Services() {
  const services = [
    {
      title: "Simple Website",
      description:
        "For individuals and side hustles who need a clean online presence.",
      features: [
        "One-page website",
        "Mobile friendly design",
        "Contact section with a WhatsApp button",
        "Social media links",
        "2 rounds of revisions",
      ],
      price: "R2,500",
    },
    {
      title: "Multipage Website",
      description: "For small businesses that need to show what they do.",
      features: [
        "Up to 5 pages (Home, Services, About, Contact and one more)",
        "Mobile friendly design",
        "Contact section with WhatsApp button and a booking link",
        "Basic Google setup (page titles and descriptions)",
        "2 rounds of revisions",
      ],
      price: "R4,500",
    },
    {
      title: "Web Based Shop",
      description: "For anyone who wants to sell products online.",
      features: [
        "Product pages and a shopping cart",
        "Online payment setup",
        "Mobile friendly design",
        "Up to 20 products added for you",
        "2 rounds of revisions",
      ],
      price: "R8,000",
    },
  ];

  return (
    <section
      id="Services"
      className="bg-[#f4f4f5] px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/50 bg-[linear-gradient(135deg,rgba(255,255,255,0.68),rgba(255,255,255,0.32))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(255,255,255,0.2),0_20px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-7"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.18),transparent_35%)]"
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-7 flex items-center justify-between text-slate-700">
                  <span className="text-xs uppercase tracking-[0.25em]">
                    Website package
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 min-h-12 text-sm italic leading-6 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-4 border-t border-slate-300/60 pt-6 text-sm leading-5 text-slate-700">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900/10 text-xs text-slate-800"
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto border-t border-slate-300/60 pt-6 text-sm text-slate-600">
                  From{" "}
                  <span className="text-3xl font-bold tracking-tight text-slate-900">
                    {service.price}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/50 px-5 py-5 text-sm text-slate-600 backdrop-blur-md sm:px-7">
          <h3 className="font-semibold text-slate-800">To Note !</h3>
          <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            <li>Custom domain and hosting are billed separately, at cost (Free alternative is available).</li>
            <li>50% deposit to start, 50% on delivery.</li>
            <li>Changes beyond the 2 revisions are charged extra.</li>
            <li>Monthly maintenance is available as an add-on.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
