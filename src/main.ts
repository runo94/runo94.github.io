import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/inter';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';
import './styles/main.scss';
import { interfaceText } from './data/content';
import { projects } from './data/projects';
import { detectInitialLanguage, rememberLanguage } from './scripts/language';
import { PROJECT_FILTERS, renderMain, renderProjectDialog, renderSidebar, type ProjectFilter } from './scripts/render';
import { SUPPORTED_LANGUAGES, type Language } from './scripts/types';

interface PageState {
  language: Language;
  activeFilter: ProjectFilter;
  openProjectIndex: number | null;
}

const state: PageState = {
  language: detectInitialLanguage(),
  activeFilter: 'all',
  openProjectIndex: null,
};

const sidebarElement = document.querySelector<HTMLElement>('#sidebar');
const mainElement = document.querySelector<HTMLElement>('#main');
const dialogElement = document.querySelector<HTMLDialogElement>('#project-dialog');

if (!sidebarElement || !mainElement || !dialogElement) {
  throw new Error('Page shell is missing #sidebar, #main or #project-dialog');
}

function updateDocumentMeta(): void {
  document.documentElement.lang = state.language;
  document.title = interfaceText.pageTitle[state.language];
  document.querySelector('meta[name="description"]')?.setAttribute('content', interfaceText.pageDescription[state.language]);
}

function renderPage(): void {
  updateDocumentMeta();
  sidebarElement!.innerHTML = renderSidebar(state.language, projects.length);
  mainElement!.innerHTML = renderMain(state.language, projects, state.activeFilter);
  if (state.openProjectIndex !== null) renderDialogContent();
}

function renderDialogContent(): void {
  if (state.openProjectIndex === null) return;
  dialogElement!.innerHTML = renderProjectDialog(state.language, projects, state.openProjectIndex);
  dialogElement!.scrollTop = 0;
}

function openProject(projectIndex: number): void {
  state.openProjectIndex = projectIndex;
  renderDialogContent();
  if (!dialogElement!.open) {
    dialogElement!.showModal();
    document.body.classList.add('has-open-dialog');
  }
}

function closeProject(): void {
  if (dialogElement!.open) dialogElement!.close();
}

dialogElement.addEventListener('close', () => {
  state.openProjectIndex = null;
  document.body.classList.remove('has-open-dialog');
});

// Clicking the dimmed backdrop (outside the dialog box) closes it.
dialogElement.addEventListener('click', (event) => {
  if (event.target === dialogElement) closeProject();
});

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  const languageButton = target.closest<HTMLButtonElement>('[data-language]');
  const chosenLanguage = languageButton?.dataset.language;
  if (chosenLanguage && SUPPORTED_LANGUAGES.includes(chosenLanguage as Language)) {
    state.language = chosenLanguage as Language;
    rememberLanguage(state.language);
    renderPage();
    return;
  }

  const filterButton = target.closest<HTMLButtonElement>('[data-filter]');
  const chosenFilter = filterButton?.dataset.filter as ProjectFilter | undefined;
  if (chosenFilter && PROJECT_FILTERS.some((filter) => filter.value === chosenFilter)) {
    state.activeFilter = chosenFilter;
    mainElement.innerHTML = renderMain(state.language, projects, state.activeFilter);
    return;
  }

  const projectTrigger = target.closest<HTMLElement>('[data-open-project]');
  if (projectTrigger?.dataset.openProject !== undefined) {
    openProject(Number(projectTrigger.dataset.openProject));
    return;
  }

  if (target.closest('[data-close-dialog]')) closeProject();
});

// Left / right arrow keys flip between projects while the dialog is open.
dialogElement.addEventListener('keydown', (event) => {
  if (state.openProjectIndex === null) return;
  if (event.key === 'ArrowRight') openProject((state.openProjectIndex + 1) % projects.length);
  if (event.key === 'ArrowLeft') openProject((state.openProjectIndex - 1 + projects.length) % projects.length);
});

renderPage();
