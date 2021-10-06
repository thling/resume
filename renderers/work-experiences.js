// @ts-nocheck

function renderWorkExperiences(id) {
  const container = document.querySelector(`#${id}`);

  const workExperiencesHtml = workExperiences
    .map(
      ({ title, company, location, date, responsibilities }) => `
        <div class="section-item">
          <div class="item-heading">
            <div class="title">${title} | <span class="subtitle">${company}</span></div>
            <div class="annotate subfont">${location} | ${date}</div>
          </div>
          <ul class="details">
            ${responsibilities.map(res => `<li class="detail-item">${res}</li>`).join('')}
          </ul>
        </div>`.trim()
    ).join('');

  container.innerHTML = workExperiencesHtml;
}

const workExperiences = [
  {
    title: 'Software Engineer',
    company: 'Google',
    location: 'Seattle, WA, USA',
    date: 'Jul 2020 - Present',
    responsibilities: [
      'Lead engineer on the UI for BigQuery Migration, with contributions on the user experience and server-side data processing middleware',
      'Launched high-profile products including batch translation and interactive translation',
      'Cross functional partnership with UX designs and back-end teams to assist in their change requests',
      'Worked with customer representatives to provide support for large GCP customers'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Airbnb',
    location: 'Seattle, WA, USA',
    date: 'Apr 2019 - Jul 2020',
    responsibilities: [
      'Designed, implemented, and maintained translation flow for localizing article contents',
      'Contributed to redesign of the frontend system of Help Center',
      'Contributed to urgent projects in response to COVID-19 such as search optimization and cancellable trip highlights',
      'Pioneered and led operational initiatives such as documentation improvement and TypeScript migration'
    ]
  },
  {
    title: 'Software Development Engineer',
    company: 'Amazon.com',
    location: 'Seattle, WA, USA',
    date: 'Feb 2016 - Mar 2019',
    responsibilities: [
      "Organizational impact working on UX library used by 97% of Amazon's e-Commerce teams",
      "Designed and implemented the team's unique release process",
      "Contributed to the team's own build and deploy infrastructure",
      'Designed and implemented company-internal tools framework',
      'Designed and implemented UX A/B testing experiment with low latency impact, leading to an estimated annualised win of USD $440 million worldwide'
    ]
  },
]
