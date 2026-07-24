/*
  Shared logic for every project case-study page.
  Reads PROJECTS_3D (projects-data.js) and the current page's
  data-project-id attribute on <body>, then renders the title,
  description, software tags, and an interactive image gallery
  with previous/next controls and a clickable thumbnail strip.
*/
document.addEventListener('DOMContentLoaded', () => {
  const id = document.body.dataset.projectId;
  const project = PROJECTS_3D.find(p => p.id === id);
  if (!project) return;

  // Page title + meta description (SEO)
  document.title = project.title + ' — Syed Musharaf';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', project.description.slice(0, 155));

  // Header content
  document.getElementById('project-category').textContent = project.category;
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-desc').textContent = project.description;
  document.getElementById('project-software').innerHTML =
    project.software.map(s => '<span>' + s + '</span>').join('');

  const mainEl = document.getElementById('gallery-main');
  const thumbStrip = document.getElementById('thumb-strip');
  let current = 0;

  function renderMain() {
    const src = project.images[current];
    const filename = src.split('/').pop();
    mainEl.classList.remove('missing');
    mainEl.innerHTML =
      '<div class="bracket tl"></div><div class="bracket tr"></div><div class="bracket bl"></div><div class="bracket br"></div>' +
      '<img src="' + src + '" alt="' + project.title + ' — image ' + (current + 1) + '" loading="eager">' +
      '<button class="gallery-nav-btn prev" aria-label="Previous image">&#8249;</button>' +
      '<button class="gallery-nav-btn next" aria-label="Next image">&#8250;</button>' +
      '<div class="missing-label">Add ' + filename + ' here</div>';

    const img = mainEl.querySelector('img');
    img.addEventListener('error', () => {
      mainEl.classList.add('missing');
      img.style.display = 'none';
    });

    mainEl.querySelector('.prev').addEventListener('click', () => go(-1));
    mainEl.querySelector('.next').addEventListener('click', () => go(1));

    [...thumbStrip.children].forEach((el, i) => el.classList.toggle('active', i === current));
  }

  function go(delta) {
    current = (current + delta + project.images.length) % project.images.length;
    renderMain();
  }

  thumbStrip.innerHTML = project.images.map((src, i) =>
    '<div class="thumb-item" data-index="' + i + '">' +
      '<img src="' + src + '" alt="Thumbnail ' + (i + 1) + '" loading="lazy">' +
    '</div>'
  ).join('');

  [...thumbStrip.children].forEach(el => {
    const img = el.querySelector('img');
    img.addEventListener('error', () => { img.style.display = 'none'; });
    el.addEventListener('click', () => { current = Number(el.dataset.index); renderMain(); });
  });

  renderMain();

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  });
});
