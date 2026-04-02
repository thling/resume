// @ts-nocheck

function renderWorkExperiences(id) {
  const container = document.querySelector(`#${id}`);

  const workExperiencesHtml = workExperiences
    .map(({ title, company, team, location, date, responsibilities }) =>
      `
        <div class="section-item">
          <div class="item-heading">
            <div class="title">${title}, ${team}</div>
            <div class="annotate subfont">${company} | ${location} | ${date}</div>
          </div>
          <ul class="details">
            ${responsibilities
              .map(
                (res) =>
                  `<li class="detail-item">${
                    typeof res === "string"
                      ? res
                      : res
                          .map((segment) =>
                            typeof segment === "string"
                              ? segment
                              : `<a class="subtitle" target="_blank" href="${segment.link}">${segment.text}</a>`
                          )
                          .join(" ")
                  }</li>`
              )
              .join("")}
          </ul>
        </div>`.trim()
    )
    .join("");

  container.innerHTML = workExperiencesHtml;
}

const workExperiences = [
  {
    title: "Engineering Manager",
    team: "Platform Integrity Engineering",
    company: "Snap",
    location: "Seattle, WA",
    date: "May 2022 - Present",
    responsibilities: [
      "Support and grow high-performing engineers in building high-stakes safety and compliance systems",
      "Pilot agentic tooling and automate complex workflows, saving USD $1M+/year in vendor contracts",
      "Build petabyte-scale distributed systems for processing user data and internal data",
      "Create technical roadmaps and multi-year strategies serving cross-functional stakeholders",
      "Lead organizational initiatives to implement robust engineering culture"
    ]
  },
  {
    title: "Software Engineer",
    team: "BigQuery UI",
    company: "Google",
    location: "Seattle, WA",
    date: "Jul 2020 - May 2022",
    responsibilities: [
      [
        "Tech lead on BigQuery UI, building",
        {
          text: "BigQuery Migration",
          link: "https://cloud.google.com/blog/topics/data-warehousing/announcing-bigquery-migration-service"
        },
        "serving thousands of prospective customers"
      ],
      [
        "Launch high-profile products including",
        {
          text: "automated and interactive translation",
          link: "https://cloud.google.com/blog/products/data-analytics/automated-sql-translation-to-accelerate-bigquery-migrations"
        }
      ],
      "Cross-functional partnership with UX, backend, PM, and ops in building end-to-end product strategy",
      "Work with customer representatives to provide technical support for GCP customers"
    ]
  },
  {
    title: "Software Engineer",
    team: "Support Products",
    company: "Airbnb",
    location: "Seattle, WA",
    date: "Apr 2019 - Jul 2020",
    responsibilities: [
      "Design, implement, and maintain translation flow for localizing article contents",
      "Pioneer and lead engineering excellence & quality initiatives, including TypeScript migration and Help Center redesign",
      "Drive urgent initiatives in response to COVID-19 emergency, including help article optimization and trip cancellation workflow updates"
    ]
  },
  {
    title: "Software Development Engineer",
    team: "Amazon UI",
    company: "Amazon",
    location: "Seattle, WA",
    date: "Feb 2016 - Mar 2019",
    responsibilities: [
      "Build the design system used by 97% of Amazon's e-commerce organization",
      "Launch font loading experiments with zero latency impact, leading to USD $440M+ annualized win",
      "Design an event-based release process to manage complex component dependencies",
      "Contribute to build and deploy infrastructure for delivering UI assets to hundreds of teams"
    ]
  }
];
