// @ts-nocheck

function renderProjects(id) {
  const container = document.querySelector(`#${id}`);

  const projectsHtml = projects
    .map(
      ({ name, url, date, responsibilities }) => `
        <div class="section-item">
          <div class="item-heading">
            <div class="title">${name}</div>
            <div class="annotate subfont">${date}${url ? ` | <a href=${url} class="subtitle">${url}</a>` : ''}</div>
          </div>
          <ul class="details">
            ${responsibilities.map(res => `<li class="detail-item">${res}</li>`).join('')}
          </ul>
        </div>`.trim()
    ).join('');

  container.innerHTML = projectsHtml;
}

const projects = [
  {
    name: 'Sharist',
    date: 'Aug 2020 - May 2021',
    responsibilities: [
      'Lead front-end engineer for a map-based React application',
      'Incorporated Google Maps API and designed and implemented a wrapper class for drawing on a singleton map instance',
      'Designed and implemented a small-scale design system, creating consistent rules such as colour, shading, and sizing steps'
    ]
  },
  {
    name: 'MentorInTech',
    url: 'https://mentorintech.com',
    date: 'Apr 2018 - May 2019',
    responsibilities: [
      'Led the front-end team in developing large-scale React web application',
      'Designed and implemented complex and reusable components',
      'Assisted back-end team in infrastructure and database systems designs'
    ]
  },
  {
    name: 'User Input Genuity Experiment',
    url: 'http://bit.ly/2DSmkIL',
    date: 'Nov 2015 - Dec 2015',
    responsibilities: [
      "Designed and implemented the back-end system using Node.js and MongoDB",
      'Designed and implemented the front-end user experience, including user tracking (<a href="http://bit.ly/2nwwinY" target="_blank">http://bit.ly/2nwwinY</a>)'
    ]
  },
  {
    name: 'Applyte',
    date: 'Jun 2015 - Jun 2016',
    responsibilities: [
      'Designed and implemented the back-end system using Node.js and RethinkDB',
      'Designed and implemented security flow for an API-centric web application',
      'Contributed to front-end designs and prototypes',
      'Coordinated developers to assist in development'
    ]
  }
]
