// Fades/lifts any element with class="reveal" into view as it enters the viewport.
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Populate the 3D project cards on the homepage from projects-data.js,
  // so editing that one file updates both the homepage thumbnail and the
  // project's own page.
  if (typeof PROJECTS_3D !== 'undefined') {
    document.querySelectorAll('.cgi-card[data-project-id]').forEach(card => {
      const project = PROJECTS_3D.find(p => p.id === card.dataset.projectId);
      if (!project) return;

      const media = card.querySelector('.media');
      const fallback = card.querySelector('.media-fallback');
      const firstImage = project.images && project.images[0];
      if (firstImage) {
        const img = document.createElement('img');
        img.src = firstImage;
        img.alt = project.title;
        img.loading = 'lazy';
        img.addEventListener('load', () => { if (fallback) fallback.style.display = 'none'; });
        img.addEventListener('error', () => { img.remove(); });
        media.appendChild(img);
      }

      const titleEl = card.querySelector('.caption h3');
      const tagEl = card.querySelector('.caption .tag');
      const descEl = card.querySelector('.desc');
      if (titleEl) titleEl.textContent = project.title;
      if (tagEl) tagEl.textContent = project.category;
      if (descEl) descEl.textContent = project.description;
    });
  }
});
