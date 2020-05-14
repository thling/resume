// @ts-nocheck

function renderEducations(id) {
  const container = document.querySelector(`#${id}`);

  const educationsHtml = educations
    .map(
      ({ degree, school, location, date }) => `
        <div class="section-item">
          <div class="item-heading">
            <div class="title">${degree} | <span class="subtitle">${school}</span></div>
            <div class="annotate subfont">${location} | ${date}</div>
          </div>
        </div>`.trim()
    ).join('');

  container.innerHTML = educationsHtml;
}

const educations = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Purdue University',
    location: 'West Lafayette, IN, USA',
    date: 'Jan 2014 - Dec 2015'
  },
  {
    degree: 'Bachelor of Honours Computer Science Co-op',
    school: 'University of Waterloo',
    location: 'Waterloo, ON, Canada',
    date: 'Sep 2008 - Jun 2013'
  }
]
