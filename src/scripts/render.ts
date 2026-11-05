import { contactLinks, experience, interfaceText, manifestoLines, quickFacts, stackGroups, type InterfaceTextKey } from '../data/content';
import { escapeHtml, icons } from './html';
import { translate } from './language';
import { SUPPORTED_LANGUAGES, type Language, type Project, type ProjectCategory } from './types';

export type ProjectFilter = 'all' | ProjectCategory;

export const PROJECT_FILTERS: { value: ProjectFilter; label: (language: Language) => string }[] = [
  { value: 'all', label: (language) => interfaceText.filterAll[language] },
  { value: 'wordpress', label: () => 'WordPress' },
  { value: 'react', label: () => 'React / Next.js' },
  { value: 'side', label: (language) => interfaceText.filterSide[language] },
];

/** Reads an interface string in the given language, already escaped for HTML. */
function text(key: InterfaceTextKey, language: Language): string {
  return escapeHtml(interfaceText[key][language]);
}

export function renderSidebar(language: Language, projectCount: number): string {
  const languageButtons = SUPPORTED_LANGUAGES.map((languageOption) => {
    const isActive = languageOption === language;
    return `<button type="button" class="language-switch__button${isActive ? ' is-active' : ''}" data-language="${languageOption}" aria-pressed="${isActive}">${languageOption === 'uk' ? 'UA' : 'EN'}</button>`;
  }).join('');

  const navigationItems = [
    { href: '#work', label: text('navWork', language), count: String(projectCount) },
    { href: '#experience', label: text('navExperience', language), count: '' },
    { href: '#stack', label: text('navStack', language), count: '' },
    { href: '#contact', label: text('navContact', language), count: '' },
  ];

  return `
    <div class="sidebar__top">
      <a href="#top" class="logo"><span class="logo__mark" aria-hidden="true">/</span>anton</a>
      <div class="language-switch" role="group" aria-label="${text('languageLabel', language)}">${languageButtons}</div>
    </div>

    <figure class="portrait">
      <img src="/images/anton.jpg" width="900" height="900" alt="${text('photoAlt', language)}" class="portrait__image">
      <span class="portrait__status"><span class="status-dot" aria-hidden="true"></span>${text('openToWork', language)}</span>
      <span class="portrait__sticker">${text('yearsSticker', language)}</span>
    </figure>

    <h1 class="sidebar__name">${text('name', language)}</h1>

    <nav class="side-nav" aria-label="${text('navLabel', language)}">
      ${navigationItems
        .map(
          (item) => `<a href="${item.href}" class="side-nav__link">${item.label}<span class="side-nav__meta"><span class="side-nav__count">${item.count}</span><span class="side-nav__arrow" aria-hidden="true">→</span></span></a>`,
        )
        .join('')}
    </nav>

    <a href="${contactLinks.cv}" class="cv-button" download>
      <span>${text('downloadCv', language)}</span>
      <span class="cv-button__meta">PDF ${icons.download}</span>
    </a>

    <div class="sidebar__links">
      <a href="${contactLinks.github}" target="_blank" rel="noopener">GitHub</a>
      <a href="${contactLinks.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="mailto:${contactLinks.email}">Email</a>
    </div>
  `;
}

function renderProjectTile(project: Project, projectIndex: number, language: Language): string {
  const title = escapeHtml(translate(project.title, language));
  const visual = project.cover
    ? `<img src="${project.cover.tile}" alt="${escapeHtml(translate(project.cover.alt, language))}" loading="lazy" class="work-tile__image">`
    : `<span class="work-tile__mark" style="color: ${project.placeholder.ink}">${escapeHtml(project.placeholder.mark)}</span>
       <span class="work-tile__pending" style="color: ${project.placeholder.ink}">${text('screenshotPending', language)}</span>`;
  const aspectRatio = project.cover?.aspectRatio ?? '4 / 3';

  return `
    <li class="work-tile" data-categories="${project.categories.join(' ')}">
      <button type="button" class="work-tile__button" data-open-project="${projectIndex}" aria-haspopup="dialog" aria-label="${text('openProject', language)}: ${title}">
        <span class="work-tile__visual" style="aspect-ratio: ${aspectRatio}; background: ${project.placeholder.background}">
          ${visual}
          <span class="pill work-tile__tag">${escapeHtml(translate(project.tag, language))}</span>
          <span class="pill work-tile__years">${escapeHtml(translate(project.years, language))}</span>
        </span>
        <span class="work-tile__body">
          <strong class="work-tile__title">${title}</strong>
          <span class="work-tile__description">${escapeHtml(translate(project.shortDescription, language))}</span>
          <span class="work-tile__tech">${escapeHtml(project.stack.slice(0, 4).join(' · '))}</span>
          ${project.githubUrl ? `<span class="github-badge">${icons.code}${text('githubBadge', language)} ↗</span>` : ''}
        </span>
      </button>
    </li>
  `;
}

export function renderMain(language: Language, projects: Project[], activeFilter: ProjectFilter): string {
  const filterButtons = PROJECT_FILTERS.map(
    (filter) =>
      `<button type="button" class="filter-button${filter.value === activeFilter ? ' is-active' : ''}" data-filter="${filter.value}" aria-pressed="${filter.value === activeFilter}">${escapeHtml(filter.label(language))}</button>`,
  ).join('');

  const manifestoShades = ['shade-1', 'shade-2', 'shade-3', 'shade-4'];

  return `
    <section class="intro" aria-labelledby="intro-role">
      <p class="eyebrow" id="intro-role">/ ${text('role', language)}</p>
      <p class="intro__bio">${text('bio', language)}</p>
      <dl class="facts">
        ${quickFacts
          .map((fact) => `<div class="facts__item"><dt>${escapeHtml(translate(fact.label, language))}</dt><dd>${escapeHtml(translate(fact.value, language))}</dd></div>`)
          .join('')}
      </dl>
    </section>

    <section id="work" class="work" aria-labelledby="work-title">
      <div class="work__header">
        <h2 id="work-title" class="section-title section-title--with-icon">${icons.grid}Playground</h2>
        <div class="filters" role="group" aria-label="${text('filterLabel', language)}">${filterButtons}</div>
      </div>
      <ul class="work-grid">
        ${projects
          .map((project, projectIndex) => ({ project, projectIndex }))
          .filter(({ project }) => activeFilter === 'all' || project.categories.includes(activeFilter))
          .map(({ project, projectIndex }) => renderProjectTile(project, projectIndex, language))
          .join('')}
      </ul>
      <p class="footnote">${text('ndaNote', language)}</p>
    </section>

    <section class="manifesto" aria-label="${text('manifestoLabel', language)}">
      <p class="eyebrow">${text('manifestoLabel', language)}</p>
      ${manifestoLines.map((line, lineIndex) => `<p class="manifesto__line ${manifestoShades[lineIndex] ?? ''}">${escapeHtml(translate(line, language))}</p>`).join('')}
    </section>

    <section id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title" class="section-title">${text('experienceTitle', language)}</h2>
      <ol class="timeline">
        ${experience
          .map(
            (job) => `
          <li class="timeline__item">
            <span class="timeline__period">${escapeHtml(translate(job.period, language))}</span>
            <div class="timeline__body">
              <strong class="timeline__company">${escapeHtml(translate(job.company, language))} <span>— ${escapeHtml(job.role)}</span></strong>
              <p>${escapeHtml(translate(job.summary, language))}</p>
            </div>
          </li>`,
          )
          .join('')}
      </ol>
    </section>

    <section id="stack" aria-labelledby="stack-title">
      <h2 id="stack-title" class="section-title">${text('stackTitle', language)}</h2>
      <div class="stack-grid">
        ${stackGroups.map((group) => `<div class="stack-card"><strong>${escapeHtml(translate(group.title, language))}</strong><p>${escapeHtml(group.items)}</p></div>`).join('')}
      </div>
    </section>

    <section id="contact" class="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" class="contact__title">${text('contactTitle', language)}</h2>
      <div class="contact__actions">
        <a href="mailto:${contactLinks.email}" class="button button--dark">${contactLinks.email}</a>
        <a href="${contactLinks.linkedin}" target="_blank" rel="noopener" class="button button--outline">${text('contactLinkedin', language)}</a>
      </div>
    </section>

    <footer class="site-footer">
      <span>© ${new Date().getFullYear()} ${text('name', language)}</span>
      <span>${text('footerNote', language)}</span>
    </footer>
  `;
}

export function renderProjectDialog(language: Language, projects: Project[], projectIndex: number): string {
  const project = projects[projectIndex];
  if (!project) return '';

  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const result = project.result ? translate(project.result, language) : '';

  const coverMarkup = project.cover
    ? `<img src="${project.cover.full}" alt="${escapeHtml(translate(project.cover.alt, language))}" class="project-dialog__cover">`
    : `<div class="project-dialog__placeholder" style="background: ${project.placeholder.background}; color: ${project.placeholder.ink}">
         <span class="project-dialog__placeholder-mark">${escapeHtml(project.placeholder.mark)}</span>
       </div>`;

  const galleryMarkup = project.gallery?.length
    ? `<section class="project-dialog__gallery" aria-label="${text('moreScreens', language)}">
         <h3 class="eyebrow">${text('moreScreens', language)}</h3>
         ${project.gallery.map((screenshot) => `<img src="${screenshot.src}" alt="${escapeHtml(translate(screenshot.alt, language))}" loading="lazy">`).join('')}
       </section>`
    : '';

  return `
    <div class="project-dialog__header">
      <div class="project-dialog__pills">
        <span class="pill pill--outlined">${escapeHtml(translate(project.tag, language))}</span>
        <span class="pill pill--outlined">${escapeHtml(translate(project.years, language))}</span>
        <span class="project-dialog__position">${projectIndex + 1} / ${projects.length}</span>
      </div>
      <button type="button" class="icon-button" data-close-dialog aria-label="${text('close', language)}">${icons.close}</button>
    </div>

    ${coverMarkup}

    <div class="project-dialog__content">
      <h2 id="project-dialog-title" class="project-dialog__title">${escapeHtml(translate(project.title, language))}</h2>
      <p class="project-dialog__summary">${escapeHtml(translate(project.summary, language))}</p>

      <div class="project-dialog__columns">
        <div class="project-dialog__main">
          <h3 class="eyebrow">${text('whatIDid', language)}</h3>
          <ol class="highlights">
            ${translate(project.highlights, language).map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join('')}
          </ol>
          ${result ? `<div class="result-card"><span class="eyebrow">${text('resultLabel', language)}</span><strong>${escapeHtml(result)}</strong></div>` : ''}
        </div>

        <aside class="project-dialog__aside">
          <dl class="project-meta">
            <div><dt>${text('roleLabel', language)}</dt><dd>${escapeHtml(translate(project.role, language))}</dd></div>
            <div><dt>${text('yearLabel', language)}</dt><dd>${escapeHtml(translate(project.years, language))}</dd></div>
          </dl>
          <div>
            <span class="eyebrow">${text('stackLabel', language)}</span>
            <ul class="chips">${project.stack.map((technology) => `<li class="chip">${escapeHtml(technology)}</li>`).join('')}</ul>
          </div>
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="button button--dark button--small">${icons.code}${text('githubBadge', language)} ↗</a>` : ''}
          ${project.isConfidential ? `<p class="nda-note">${icons.lock}<span>${text('confidentialNote', language)}</span></p>` : ''}
        </aside>
      </div>
    </div>

    ${galleryMarkup}

    <div class="project-dialog__footer">
      <button type="button" class="pager pager--previous" data-open-project="${(projectIndex - 1 + projects.length) % projects.length}">
        <span class="pager__label">${icons.arrowLeft}${text('previous', language)}</span>
        <span class="pager__title">${escapeHtml(previousProject ? translate(previousProject.title, language) : '')}</span>
      </button>
      <button type="button" class="pager pager--next" data-open-project="${(projectIndex + 1) % projects.length}">
        <span class="pager__label">${text('next', language)}${icons.arrowRight}</span>
        <span class="pager__title">${escapeHtml(nextProject ? translate(nextProject.title, language) : '')}</span>
      </button>
    </div>
  `;
}
