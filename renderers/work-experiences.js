// @ts-nocheck

function renderWorkExperiences(id) {
  const container = document.querySelector(`#${id}`);

  const workExperiencesHtml = workExperiences
    .map(({ title, company, location, date, responsibilities }) =>
      `
        <div class="section-item">
          <div class="item-heading">
            <div class="title">${title} | <span class="subtitle">${company}</span></div>
            <div class="annotate subfont">${location} | ${date}</div>
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
    title: 'Engineering Manager / Tech Lead',
    company: 'Snap, Inc.',
    location: 'Seattle, WA, USA',
    date: 'May 2022 - Present',
    responsibilities: [
      'Support and grow 8 high-performing engineers across two disciplines',
      'Create technical roadmaps and long-term strategies with cross-functional stakeholders',
      'Provide mentorship on building services and tooling for data and legal compliance',
      'Lead cross-organization projects and discussions on efficiency and quality initiatives',
      'Design systems for managing legal processes, law enforcement requests, and sensitive user data',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Google',
    location: 'Seattle, WA, USA',
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
    company: 'Airbnb',
    location: 'Seattle, WA, USA',
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
    company: 'Amazon.com',
    location: 'Seattle, WA, USA',
    date: 'Feb 2016 - Mar 2019',
    responsibilities: [
      "Organizational impact working on UX library used by 97% of Amazon's e-Commerce teams",
      "Design and implement the team's unique release process",
      "Contribute to the team's own build and deploy infrastructure",
      'Design and implement company-internal tools framework',
      'Design and implement UX A/B testing experiment with low latency impact, leading to an estimated annualised win of USD $440 million worldwide',
    ],
  },
];
