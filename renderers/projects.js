// @ts-nocheck

function renderProjects(id) {
  const container = document.querySelector(`#${id}`);

  const projectsHtml = projects
    .map(({ name, url, date, responsibilities }) =>
      `
        <div class="section-item">
          <div class="item-heading">
            <div class="title">${name}</div>
            <div class="annotate subfont">${date}${
        url ? ` | <a href=${url} class="subtitle">${url}</a>` : ''
      }</div>
          </div>
          <ul class="details">
            ${responsibilities
              .map((res) => `<li class="detail-item">${res}</li>`)
              .join('')}
          </ul>
        </div>`.trim()
    )
    .join('');

  container.innerHTML = projectsHtml;
}

const projects = [
  {
    name: 'Sharist',
    date: 'Aug 2020 - May 2021',
    responsibilities: [
      'Lead front-end engineer for a map-based React application',
      'Incorporate Google Maps API and design and implement a wrapper class for drawing on a singleton map instance',
      'Design and implement a small-scale design system, creating consistent rules such as colour, shading, and sizing steps',
    ],
  },
  {
    name: 'MentorInTech',
    url: 'https://mentorintech.com',
    date: 'Apr 2018 - May 2019',
    responsibilities: [
      'Lead the front-end team in developing large-scale React web application',
      'Design and implement complex and reusable components',
      'Assist back-end team in infrastructure and database systems designs',
    ],
  },
  {
    name: 'User Input Genuity Experiment',
    url: 'http://bit.ly/2DSmkIL',
    date: 'Nov 2015 - Dec 2015',
    responsibilities: [
      'Design and implement back-end system using Node.js and MongoDB',
      'Design and implement front-end user experience, including user tracking (<a href="http://bit.ly/2nwwinY" target="_blank">http://bit.ly/2nwwinY</a>)',
    ],
  },
  {
    name: 'Applyte',
    date: 'Jun 2015 - Jun 2016',
    responsibilities: [
      'Design and implement the back-end system using Node.js and RethinkDB',
      'Design and implement security flow for an API-centric web application',
      'Contribute to front-end designs and prototypes',
      'Coordinate developers to assist in development',
    ],
  },
];
