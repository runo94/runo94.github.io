import type { Localized } from '../scripts/types';

export const contactLinks = {
  email: 'runo1194@gmail.com',
  github: 'https://github.com/runo94',
  linkedin: 'https://www.linkedin.com/in/anton-kolesnykov-79456b5a/',
  cv: '/cv/Anton_Kolesnykov_CV.pdf',
};

/** Interface copy: labels, headings and short phrases. */
export const interfaceText = {
  pageTitle: {
    en: 'Anton Kolesnykov — Senior WordPress & Full-Stack Developer',
    uk: 'Антон Колесников — Senior WordPress та Full-Stack розробник',
  },
  pageDescription: {
    en: 'Custom WordPress themes and plugins, WooCommerce, multilingual & RTL sites and React / Next.js products, with technical SEO and clean tracking.',
    uk: 'Кастомні WordPress-теми й плагіни, WooCommerce, багатомовні та RTL-сайти, продукти на React / Next.js — з технічним SEO та чистою аналітикою.',
  },
  languageLabel: { en: 'Language', uk: 'Мова' },
  photoAlt: { en: 'Anton Kolesnykov smiling in front of a waterfall', uk: 'Антон Колесников усміхається на тлі водоспаду' },
  openToWork: { en: 'open to work', uk: 'відкритий до пропозицій' },
  yearsSticker: { en: '8+ years shipping', uk: '8+ років у продакшені' },
  name: { en: 'Anton Kolesnykov', uk: 'Антон Колесников' },
  role: { en: 'Senior WordPress & Full-Stack Developer', uk: 'Senior WordPress та Full-Stack розробник' },
  bio: {
    en: 'I own projects end-to-end — from Figma handoff to production launch. Custom WordPress themes and plugins, WooCommerce, multilingual & RTL sites, and React / Next.js products, with technical SEO and clean tracking built in.',
    uk: 'Веду проєкти від і до — від макета у Figma до запуску в продакшн. Кастомні WordPress-теми й плагіни, WooCommerce, багатомовні та RTL-сайти, продукти на React / Next.js — з технічним SEO та чистою аналітикою з коробки.',
  },
  navLabel: { en: 'Sections', uk: 'Розділи' },
  navWork: { en: 'Work', uk: 'Роботи' },
  navExperience: { en: 'Experience', uk: 'Досвід' },
  navStack: { en: 'Stack', uk: 'Стек' },
  navContact: { en: 'Contact', uk: 'Контакти' },
  downloadCv: { en: 'Download CV', uk: 'Завантажити CV' },
  filterLabel: { en: 'Filter projects', uk: 'Фільтр проєктів' },
  filterAll: { en: 'All', uk: 'Усі' },
  filterSide: { en: 'Side projects', uk: 'Власні проєкти' },
  githubBadge: { en: 'View code on GitHub', uk: 'Код на GitHub' },
  screenshotPending: { en: 'screenshot coming soon', uk: 'скриншот незабаром' },
  ndaNote: { en: '* client names are anonymized because of NDA.', uk: '* назви клієнтів змінено через NDA.' },
  openProject: { en: 'Open project details', uk: 'Відкрити деталі проєкту' },
  manifestoLabel: { en: '/ how I work', uk: '/ як я працюю' },
  experienceTitle: { en: 'Experience', uk: 'Досвід' },
  stackTitle: { en: 'Stack', uk: 'Стек' },
  contactTitle: { en: 'Have a project or a role in mind? Let’s talk.', uk: 'Маєте проєкт чи вакансію? Поговорімо.' },
  contactLinkedin: { en: 'Message on LinkedIn', uk: 'Написати в LinkedIn' },
  footerNote: { en: 'built with Vite + TypeScript.', uk: 'зроблено на Vite + TypeScript.' },
  close: { en: 'Close', uk: 'Закрити' },
  previous: { en: 'Previous', uk: 'Попередній' },
  next: { en: 'Next', uk: 'Наступний' },
  whatIDid: { en: 'what I did', uk: 'що я зробив' },
  resultLabel: { en: 'result', uk: 'результат' },
  roleLabel: { en: 'my role', uk: 'моя роль' },
  yearLabel: { en: 'years', uk: 'роки' },
  stackLabel: { en: 'stack', uk: 'стек' },
  moreScreens: { en: 'more screens', uk: 'інші екрани' },
  confidentialNote: {
    en: 'This is client work under NDA: the name and branding are hidden, and the live link is available on request.',
    uk: 'Це клієнтський проєкт під NDA: назву та брендинг приховано, посилання на живий сайт — за запитом.',
  },
} satisfies Record<string, Localized>;

export type InterfaceTextKey = keyof typeof interfaceText;

export const quickFacts: { label: Localized; value: Localized }[] = [
  { label: { en: 'based', uk: 'локація' }, value: { en: 'Ukraine · Remote', uk: 'Україна · віддалено' } },
  { label: { en: 'time zone', uk: 'часовий пояс' }, value: { en: 'UTC+2', uk: 'UTC+2' } },
  { label: { en: 'coding since', uk: 'у розробці з' }, value: { en: '2015', uk: '2015' } },
  { label: { en: 'english', uk: 'англійська' }, value: { en: 'Upper-Intermediate (B2)', uk: 'Upper-Intermediate (B2)' } },
];

export const manifestoLines: Localized[] = [
  { en: 'i build websites, end to end.', uk: 'я роблю сайти від і до.' },
  { en: 'i think speed and SEO are features, not extras.', uk: 'швидкість і SEO — це функції, а не бонуси.' },
  { en: 'i think tracking should be boring and correct.', uk: 'аналітика має бути нудною і точною.' },
  { en: 'solid, kiss, dry. fewer plugins, better sites.', uk: 'solid, kiss, dry. менше плагінів — кращі сайти.' },
];

export const experience: { period: Localized; company: Localized; role: string; summary: Localized }[] = [
  {
    period: { en: 'Oct 2023 — now', uk: 'жов 2023 — нині' },
    company: { en: 'Freelance', uk: 'Фриланс' },
    role: 'Full-Stack WordPress / Web Developer',
    summary: {
      en: 'Sole developer on client products: themes, plugins, Gutenberg/ACF systems, Next.js on headless CMS, CI/CD, Cloudflare, technical SEO and tracking.',
      uk: 'Єдиний розробник на клієнтських продуктах: теми, плагіни, Gutenberg/ACF, Next.js на headless CMS, CI/CD, Cloudflare, технічне SEO й аналітика.',
    },
  },
  {
    period: { en: 'Jun 2017 — Oct 2023', uk: 'чер 2017 — жов 2023' },
    company: { en: 'Computools', uk: 'Computools' },
    role: 'Full-Stack Developer',
    summary: {
      en: 'React, Next.js, TypeScript, Node.js, GraphQL and Hasura across concurrent products; custom WordPress themes and plugins; tests and code review.',
      uk: 'React, Next.js, TypeScript, Node.js, GraphQL і Hasura на кількох продуктах паралельно; кастомні WordPress-теми й плагіни; тести та code review.',
    },
  },
  {
    period: { en: 'Nov 2016 — Jun 2017', uk: 'лис 2016 — чер 2017' },
    company: { en: 'AVEDsoft', uk: 'AVEDsoft' },
    role: 'WordPress Developer / Team Lead',
    summary: {
      en: 'Led three developers: planning, code review, mentoring; technical point of contact through final QA.',
      uk: 'Керував трьома розробниками: планування, code review, менторство; технічний контакт до фінального QA.',
    },
  },
  {
    period: { en: 'Aug 2015 — Aug 2016', uk: 'сер 2015 — сер 2016' },
    company: { en: 'UDTech', uk: 'UDTech' },
    role: 'Junior Web Developer',
    summary: {
      en: 'Yii2, PHP, WordPress and MySQL on corporate, sports and product websites.',
      uk: 'Yii2, PHP, WordPress і MySQL на корпоративних, спортивних і продуктових сайтах.',
    },
  },
];

export const stackGroups: { title: Localized; items: string }[] = [
  { title: { en: 'WordPress & CMS', uk: 'WordPress & CMS' }, items: 'WordPress, Gutenberg, ACF, WooCommerce, WPML (incl. RTL), Storyblok, Webflow' },
  { title: { en: 'Frontend', uk: 'Frontend' }, items: 'TypeScript, React, Next.js (SSR / SSG), Tailwind CSS, Sass, BEM' },
  { title: { en: 'Backend & Data', uk: 'Backend & Data' }, items: 'PHP, Node.js, Express, PostgreSQL, MySQL, MongoDB, GraphQL, Hasura, REST' },
  { title: { en: 'SEO & Analytics', uk: 'SEO та аналітика' }, items: 'Technical SEO, Core Web Vitals, structured data, multilingual SEO, GTM, Google Ads conversions' },
  { title: { en: 'DevOps', uk: 'DevOps' }, items: 'Git, Docker, GitHub Actions CI/CD, Cloudflare (CDN, DNS, SSL), managed hosting' },
  { title: { en: 'Workflow', uk: 'Процес' }, items: 'Figma-to-code, unit & e2e tests, code review, mentoring, SOLID / KISS / DRY' },
];
