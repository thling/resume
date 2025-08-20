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
                    typeof res === 'string'
                      ? res
                      : res
                          .map((segment) =>
                            typeof segment === 'string'
                              ? segment
                              : `<a class="subtitle" target="_blank" href="${segment.link}">${segment.text}</a>`
                          )
                          .join(' ')
                  }</li>`
              )
              .join('')}
          </ul>
        </div>`.trim()
    )
    .join('');

  container.innerHTML = workExperiencesHtml;
}

const workExperiences = [
  {
    title: 'Engineering Manager',
    team: 'Platform Integrity Engineering',
    company: 'Snap',
    location: 'Seattle, WA',
    date: 'May 2022 - Present',
    responsibilities: [
      'Support and mentor 9 high-performing full-stack and backend engineers across three domains',
      'Devise long-term strategies and preemptively resolve risks of multimillion-dollar penalties',
      'Enhance quality and user experience through cross-organizational initiatives',
      'Increased legal compliance coverage by ~20% through reliability and observability investments',
      'Launched complex toolings from 0-1 to support efficient investigation and escalations',
    ],
  },
  {
    title: 'Software Engineer',
    team: 'BigQuery UI',
    company: 'Google',
    location: 'Seattle, WA',
    date: 'Jul 2020 - May 2022',
    responsibilities: [
      [
        'Lead engineer on the UI for',
        {
          text: 'BigQuery Migration',
          link: 'https://cloud.google.com/blog/topics/data-warehousing/announcing-bigquery-migration-service',
        },
        'with contributions on the user experience and server-side data processing middleware',
      ],
      [
        'Launch high-profile products including',
        {
          text: 'batch translation and interactive translation',
          link: 'https://cloud.google.com/blog/products/data-analytics/automated-sql-translation-to-accelerate-bigquery-migrations',
        },
      ],
      'Cross functional partnership with UX designs and back-end teams to assist in their change requests',
      'Work with customer representatives to provide support for large GCP customers',
    ],
  },
  {
    title: 'Software Engineer',
    team: 'Support Products',
    company: 'Airbnb',
    location: 'Seattle, WA',
    date: 'Apr 2019 - Jul 2020',
    responsibilities: [
      'Design, implement, and maintain translation flow for localizing article contents',
      'Contribute to redesign of the frontend system of Help Center',
      'Contribute to urgent projects in response to COVID-19 such as search optimization and cancellable trip highlights',
      'Pioneer and lead operational initiatives such as documentation improvement and TypeScript migration',
    ],
  },
  {
    title: 'Software Development Engineer',
    team: 'Amazon UI',
    company: 'Amazon',
    location: 'Seattle, WA',
    date: 'Feb 2016 - Mar 2019',
    responsibilities: [
      "Work on design system used by Amazon's e-commerce organization",
      "Design a unique release process for UI asset version control",
      "Contributed to the team's backend build and deploy infrastructure for asset delivery",
      'Design and implement UX A/B testing experiment with low latency impact, leading to an estimated annualized win of USD $440 million worldwide',
    ],
  },
];
