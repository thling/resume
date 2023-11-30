// @ts-nocheck

function renderActivities(id) {
  const container = document.querySelector(`#${id}`);

  const activitesHtml = `
    <div class="section-item">
      <ul class="details">
        ${activities
          .map((res) => `<li class="detail-item">${res}</li>`)
          .join('')}
      </ul>
    </div>`.trim();

  container.innerHTML = activitesHtml;
}

const activities = [
  'Develop small programs that make life easier',
  'Experiment different kinds of design styles on software and web pages',
  'Improvise and compose piano pieces',
  'Travel around the world and admire the architectures',
];
