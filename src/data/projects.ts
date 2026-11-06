import type { Project } from '../scripts/types';

/**
 * Portfolio projects, in the order they appear in the grid.
 * Client work is anonymized because of NDA: never put real client names here.
 * Values in [square brackets] are still to be filled in.
 */
export const projects: Project[] = [
  {
    slug: 'trading-academy',
    title: { en: 'Trading Education Platform*', uk: 'Освітня платформа для трейдингу*' },
    shortDescription: {
      en: 'Bilingual EN/AR (RTL) academy for a regulated broker: courses, certificates, webinars. Built solo.',
      uk: 'Двомовна EN/AR (RTL) академія для ліцензованого брокера: курси, сертифікати, вебінари. Зроблено самостійно.',
    },
    summary: {
      en: 'A custom WordPress theme for a regulated broker’s trading academy, bilingual English / Arabic with full RTL support. I also supported the broker’s main marketing website.',
      uk: 'Кастомна WordPress-тема для академії трейдингу ліцензованого брокера, двомовна англійська / арабська з повною підтримкою RTL. Також підтримував основний маркетинговий сайт брокера.',
    },
    role: { en: 'Solo developer (freelance)', uk: 'Єдиний розробник (фриланс)' },
    years: { en: '2025–26', uk: '2025–26' },
    tag: { en: 'WordPress', uk: 'WordPress' },
    categories: ['wordpress'],
    highlights: {
      en: [
        'Structured courses with progress tracking and certificates',
        'Custom post types for articles, video clips, tutorials, glossary and live webinars',
        'Time-zone-aware webinar scheduling',
        'User registration and lead-capture forms',
        'English / Arabic with WPML, including RTL layouts',
        'GTM tracking for marketing analytics',
      ],
      uk: [
        'Структуровані курси з відстеженням прогресу та сертифікатами',
        'Кастомні типи записів: статті, відео, туторіали, глосарій, вебінари',
        'Розклад вебінарів з урахуванням часових поясів',
        'Реєстрація користувачів і форми збору заявок',
        'Англійська / арабська через WPML, зокрема RTL-верстка',
        'Аналітика через GTM',
      ],
    },
    result: { en: 'Built and launched solo', uk: 'Зроблено й запущено самостійно' },
    stack: ['WordPress', 'PHP', 'WPML', 'ACF', 'Gutenberg', 'JavaScript', 'Sass', 'GTM'],
    isConfidential: true,
    placeholder: { background: '#121212', ink: '#F3F2EE', mark: 'Academy' },
  },
  {
    slug: 'shopify-agency',
    title: { en: 'Shopify Growth Agency*', uk: 'Агенція Shopify-маркетингу*' },
    shortDescription: {
      en: 'Custom theme from a third-party design: canvas animations, SVG, page builder; builder admin load 20s → 5s.',
      uk: 'Кастомна тема за чужим дизайном: canvas-анімації, SVG, конструктор; адмінка конструктора 20с → 5с.',
    },
    summary: {
      en: 'The full website of a Shopify growth agency, built as a custom WordPress theme from a third-party design and maintained together with the agency’s SEO team.',
      uk: 'Повний сайт агенції Shopify-маркетингу: кастомна WordPress-тема за чужим дизайном, яку я підтримую разом з SEO-командою агенції.',
    },
    role: { en: 'Theme developer & ongoing maintenance', uk: 'Розробник теми та підтримка' },
    years: { en: '2025–now', uk: '2025–нині' },
    tag: { en: 'WordPress', uk: 'WordPress' },
    categories: ['wordpress'],
    highlights: {
      en: [
        'Custom theme from Figma, including animations and SVG',
        'Hand-coded canvas animations',
        'ACF-based page builder for the marketing team',
        'Merged conflicting Google Tag Manager containers',
        'Fixed sitemap locales for the multilingual setup',
        'All custom structured data (schema)',
        'Caching and script optimization',
      ],
      uk: [
        'Кастомна тема з Figma, разом з анімаціями та SVG',
        'Анімації на canvas, написані вручну',
        'Конструктор сторінок на ACF для маркетологів',
        'Об’єднав конфліктні контейнери Google Tag Manager',
        'Виправив локалі в sitemap для багатомовності',
        'Уся кастомна розмітка schema',
        'Кешування та оптимізація скриптів',
      ],
    },
    result: { en: 'Page-builder admin: 20s → 5s', uk: 'Адмінка конструктора: 20с → 5с' },
    stack: ['WordPress', 'PHP', 'ACF', 'JavaScript', 'Canvas API', 'GTM', 'Schema'],
    isConfidential: true,
    cover: {
      tile: '/images/projects/agency-tile.webp',
      full: '/images/projects/agency.webp',
      aspectRatio: '1200 / 603',
      alt: { en: 'Hero section of a Shopify growth agency website', uk: 'Головний екран сайту агенції Shopify-маркетингу' },
    },
    placeholder: { background: '#0B0B0D', ink: '#F3F2EE', mark: 'Agency' },
    gallery: [
      {
        src: '/images/gallery/agency-gallery-speed.webp',
        alt: { en: 'Solutions section with an animated store-speed widget', uk: 'Блок рішень з анімованим віджетом швидкості магазину' },
      },
      {
        src: '/images/gallery/agency-gallery-cases.webp',
        alt: { en: 'Success stories section with a case switcher and a traffic chart', uk: 'Блок кейсів з перемикачем і графіком трафіку' },
      },
      {
        src: '/images/gallery/agency-gallery-process.webp',
        alt: { en: 'Five-step process section with an animated timeline', uk: 'Блок процесу з п’яти кроків із анімованою шкалою' },
      },
    ],
  },
  {
    slug: 'tutoring-marketplace',
    title: { en: 'Tutoring Marketplace*', uk: 'Платформа підбору репетиторів*' },
    shortDescription: {
      en: 'Tutor search, subject-matching flow, testimonials and lead forms — desktop and mobile.',
      uk: 'Пошук репетитора, покроковий підбір за предметом, відгуки та форми заявок.',
    },
    summary: {
      en: 'A marketing site for a tutoring service that matches families with certified tutors, with a step-by-step matching flow for desktop and mobile.',
      uk: 'Маркетинговий сайт сервісу, що підбирає сім’ям сертифікованих репетиторів, з покроковим підбором для десктопу й мобільних.',
    },
    // TODO: fill in role, years and stack.
    role: { en: '[your role]', uk: '[your role]' },
    years: { en: '[year]', uk: '[year]' },
    tag: { en: 'WordPress', uk: 'WordPress' },
    categories: ['wordpress'],
    highlights: {
      en: [
        'Multi-step subject and tutor matching flow',
        'Tutor showcase, testimonials and FAQ sections',
        'Contact and lead forms',
        'Separate desktop and mobile layouts, legal pages',
      ],
      uk: [
        'Покроковий підбір предмета й репетитора',
        'Блоки з репетиторами, відгуками та FAQ',
        'Контактні форми та форми заявок',
        'Окремі десктопні й мобільні макети, юридичні сторінки',
      ],
    },
    stack: ['[stack]'],
    isConfidential: true,
    cover: {
      tile: '/images/projects/tutoring-tile.webp',
      full: '/images/projects/tutoring.webp',
      aspectRatio: '1200 / 634',
      alt: { en: 'Hero section of a tutoring marketplace website', uk: 'Головний екран сайту платформи репетиторів' },
    },
    placeholder: { background: '#FFC94D', ink: '#121212', mark: 'Tutors' },
    gallery: [
      {
        src: '/images/gallery/tutoring-gallery-subjects.webp',
        alt: { en: 'Subject picker that starts the matching flow', uk: 'Вибір предмета, з якого починається підбір' },
      },
      {
        src: '/images/gallery/tutoring-gallery-journey.webp',
        alt: { en: 'Tutoring journey section with three feature cards', uk: 'Блок «шлях навчання» з трьома картками' },
      },
    ],
  },
  {
    slug: 'recovery-center',
    title: { en: 'Recovery Center Website*', uk: 'Сайт реабілітаційного центру*' },
    shortDescription: {
      en: 'Content-heavy service pages, team, FAQ and lead capture, built in Elementor.',
      uk: 'Сервісні сторінки, команда, FAQ і заявки — на Elementor.',
    },
    summary: {
      en: 'A content-heavy website for an addiction recovery and intervention center, built in Elementor from a custom desktop and mobile design.',
      uk: 'Насичений контентом сайт центру реабілітації та інтервенцій, зібраний на Elementor за кастомним десктопним і мобільним дизайном.',
    },
    // TODO: fill in role and years.
    role: { en: '[your role]', uk: '[your role]' },
    years: { en: '[year]', uk: '[year]' },
    tag: { en: 'WordPress', uk: 'WordPress' },
    categories: ['wordpress'],
    highlights: {
      en: ['Service and program pages', 'Team, “why choose us” and how-to-start sections', 'FAQ and lead-capture calls to action', 'Responsive desktop and mobile versions'],
      uk: ['Сторінки послуг і програм', 'Блоки команди, переваг і «як почати»', 'FAQ і заклики залишити заявку', 'Адаптивні десктопна й мобільна версії'],
    },
    stack: ['WordPress', 'Elementor'],
    isConfidential: true,
    cover: {
      tile: '/images/projects/recovery-tile.webp',
      full: '/images/projects/recovery.webp',
      aspectRatio: '1200 / 602',
      alt: { en: 'Hero section of a recovery center website', uk: 'Головний екран сайту реабілітаційного центру' },
    },
    placeholder: { background: '#1A1A22', ink: '#F3F2EE', mark: 'Care' },
    gallery: [
      {
        src: '/images/gallery/recovery-gallery-benefits.webp',
        alt: { en: 'Benefits section with six feature cards', uk: 'Блок переваг із шістьма картками' },
      },
      {
        src: '/images/gallery/recovery-gallery-steps.webp',
        alt: { en: 'Five-step “how to get started” section', uk: 'Блок «як почати» з п’ятьма кроками' },
      },
    ],
  },
  {
    slug: 'vpn-websites',
    title: { en: 'Multilingual VPN Websites*', uk: 'Багатомовні сайти VPN-продукту*' },
    shortDescription: {
      en: 'Four product sites with an SEO team: performance, automation, refactoring.',
      uk: 'Чотири продуктові сайти разом з SEO-командою: швидкодія, автоматизація, рефакторинг.',
    },
    summary: {
      en: 'Maintained and optimized four multilingual websites for a VPN product, working closely with the SEO team.',
      uk: 'Підтримував і оптимізував чотири багатомовні сайти VPN-продукту в тісній роботі з SEO-командою.',
    },
    role: { en: 'Developer in a product team', uk: 'Розробник у продуктовій команді' },
    years: { en: '2024–25', uk: '2024–25' },
    tag: { en: 'WordPress', uk: 'WordPress' },
    categories: ['wordpress'],
    highlights: {
      en: ['WPML, Gutenberg and ACF solutions', 'Workflow automation', 'Performance and search-visibility improvements', 'Legacy code refactoring'],
      uk: ['Рішення на WPML, Gutenberg і ACF', 'Автоматизація робочих процесів', 'Покращення швидкодії та видимості в пошуку', 'Рефакторинг legacy-коду'],
    },
    stack: ['WordPress', 'PHP', 'WPML', 'Gutenberg', 'ACF', 'JavaScript', 'Sass', 'Technical SEO'],
    isConfidential: true,
    placeholder: { background: '#9DB8FF', ink: '#121212', mark: 'VPN × 4' },
  },
  {
    slug: '3d-model-platform',
    title: { en: '3D Model Quality Platform*', uk: 'Платформа оцінки 3D-моделей*' },
    shortDescription: { en: 'Database & Node.js work in a 20+ person team.', uk: 'База даних і Node.js у команді з 20+ людей.' },
    summary: {
      en: 'A platform for evaluating 3D models and their printability with different materials and printers.',
      uk: 'Платформа для оцінки 3D-моделей і їхньої придатності до друку різними матеріалами та принтерами.',
    },
    role: { en: 'Full-stack developer, 20+ person team', uk: 'Full-stack розробник, команда 20+' },
    years: { en: '2023', uk: '2023' },
    tag: { en: 'Full-stack', uk: 'Full-stack' },
    categories: ['react'],
    highlights: {
      en: ['Database schema changes and queries', 'New functionality in Node.js', 'Refactored legacy code without disrupting production'],
      uk: ['Зміни схеми бази даних і запити', 'Новий функціонал на Node.js', 'Рефакторинг legacy-коду без збоїв у продакшені'],
    },
    stack: ['React', 'TypeScript', 'Node.js', 'MySQL'],
    isConfidential: true,
    placeholder: { background: '#B8E986', ink: '#121212', mark: '3D' },
  },
  {
    slug: 'watch-certification',
    title: { en: 'Watch Certification Platform*', uk: 'Платформа сертифікації годинників*' },
    shortDescription: { en: 'Ownership & servicing history for luxury watches.', uk: 'Історія власників і сервісу для дорогих годинників.' },
    summary: {
      en: 'A WordPress platform for verifying luxury watches, with ownership and servicing history for each piece.',
      uk: 'WordPress-платформа для верифікації дорогих годинників з історією власників і сервісу для кожного екземпляра.',
    },
    role: { en: 'WordPress developer', uk: 'WordPress-розробник' },
    years: { en: '2023', uk: '2023' },
    tag: { en: 'WordPress', uk: 'WordPress' },
    categories: ['wordpress'],
    highlights: {
      en: ['Set up the project structure', 'Responsive pages', 'Reusable Gutenberg components', 'Third-party service integrations'],
      uk: ['Заклав структуру проєкту', 'Адаптивні сторінки', 'Перевикористовувані Gutenberg-компоненти', 'Інтеграції зі сторонніми сервісами'],
    },
    stack: ['WordPress', 'Gutenberg', 'PHP', 'JavaScript', 'Sass'],
    isConfidential: true,
    cover: {
      tile: '/images/projects/watch-tile.webp',
      full: '/images/projects/watch.webp',
      aspectRatio: '1200 / 550',
      alt: { en: 'Home screen of a luxury watch certification platform', uk: 'Головний екран платформи сертифікації дорогих годинників' },
    },
    placeholder: { background: '#F6F5F2', ink: '#121212', mark: 'Watch ID' },
    gallery: [
      {
        src: '/images/gallery/watch-gallery-certificates.webp',
        alt: { en: 'Certificates dashboard with filters, search and a paginated table', uk: 'Кабінет сертифікатів з фільтрами, пошуком і таблицею з пагінацією' },
      },
      {
        src: '/images/gallery/watch-gallery-benefits.webp',
        alt: { en: 'Benefits section of the landing page', uk: 'Блок переваг на лендінгу' },
      },
    ],
  },
  {
    slug: 'educational-platform',
    title: { en: 'Educational Platform*', uk: 'Освітня платформа*' },
    shortDescription: {
      en: 'Lessons and tests; custom WP REST API feeding a React front-end.',
      uk: 'Уроки й тести; кастомний WP REST API для фронтенду на React.',
    },
    summary: {
      en: 'A school platform where teachers create lessons by topic and difficulty and students complete tests.',
      uk: 'Шкільна платформа, де вчителі створюють уроки за темою та складністю, а учні проходять тести.',
    },
    role: { en: 'Full-stack developer', uk: 'Full-stack розробник' },
    years: { en: '2021–22', uk: '2021–22' },
    tag: { en: 'Headless', uk: 'Headless' },
    categories: ['react', 'wordpress'],
    highlights: {
      en: ['Responsive pages from Figma', 'WordPress as a headless CMS with custom REST APIs', 'Reusable Gutenberg components', 'React front-end consuming the API'],
      uk: ['Адаптивні сторінки з Figma', 'WordPress як headless CMS з кастомними REST API', 'Перевикористовувані Gutenberg-компоненти', 'Фронтенд на React, що працює з API'],
    },
    stack: ['React', 'WordPress', 'REST API', 'Gutenberg', 'JavaScript', 'Sass'],
    isConfidential: true,
    placeholder: { background: '#FFD23F', ink: '#121212', mark: 'Learn' },
  },
  {
    slug: 'booking-service',
    title: { en: 'Booking / Calendar Service*', uk: 'Сервіс бронювання / календар*' },
    shortDescription: { en: 'Startup product from scratch; set the coding standards.', uk: 'Стартап-продукт з нуля; встановив стандарти коду.' },
    summary: {
      en: 'A time-management and booking app with calendar-style time slots, launched from the ground up in a startup.',
      uk: 'Застосунок для бронювання та керування часом з календарними слотами, запущений з нуля в стартапі.',
    },
    role: { en: 'Front-end / full-stack developer', uk: 'Front-end / full-stack розробник' },
    years: { en: '2021', uk: '2021' },
    tag: { en: 'Full-stack', uk: 'Full-stack' },
    categories: ['react'],
    highlights: {
      en: ['Set up coding standards and best practices', 'Cross-browser front-end', 'Built on React Admin, Hasura and GraphQL'],
      uk: ['Встановив стандарти коду та найкращі практики', 'Кросбраузерний фронтенд', 'Побудовано на React Admin, Hasura і GraphQL'],
    },
    stack: ['TypeScript', 'React Admin', 'Hasura', 'GraphQL', 'PostgreSQL', 'FullCalendar', 'Tailwind CSS'],
    isConfidential: true,
    placeholder: { background: '#FFFFFF', ink: '#121212', mark: 'Book' },
  },
  {
    slug: 'photo-stock',
    title: { en: 'Photo Stock Platform*', uk: 'Фотосток*' },
    shortDescription: { en: 'Image optimization, user management, Stripe payments.', uk: 'Оптимізація зображень, керування користувачами, оплати Stripe.' },
    summary: {
      en: 'A photo-stock product with image optimization, user management and paid downloads.',
      uk: 'Фотосток з оптимізацією зображень, керуванням користувачами та платними завантаженнями.',
    },
    role: { en: 'WordPress developer', uk: 'WordPress-розробник' },
    years: { en: '2019–20', uk: '2019–20' },
    tag: { en: 'WordPress', uk: 'WordPress' },
    categories: ['wordpress'],
    highlights: {
      en: ['Responsive pages from Figma', 'New product features', 'Performance and SEO optimization', 'Stripe payments integration'],
      uk: ['Адаптивні сторінки з Figma', 'Новий функціонал продукту', 'Оптимізація швидкодії та SEO', 'Інтеграція оплат Stripe'],
    },
    stack: ['WordPress', 'JavaScript', 'Sass', 'Stripe', 'Figma'],
    isConfidential: true,
    placeholder: { background: '#F4C7B8', ink: '#121212', mark: 'Stock' },
  },
  {
    slug: 'headless-woo-vue',
    title: { en: 'Headless Woo + Vue', uk: 'Headless Woo + Vue' },
    shortDescription: { en: 'WooCommerce on Bedrock, REST API, Vue front-end.', uk: 'WooCommerce на Bedrock, REST API, фронтенд на Vue.' },
    summary: {
      en: 'A headless store: WooCommerce on Bedrock serving a REST API to a Vue front-end.',
      uk: 'Headless-магазин: WooCommerce на Bedrock віддає REST API фронтенду на Vue.',
    },
    role: { en: 'Own project', uk: 'Власний проєкт' },
    years: { en: '2026', uk: '2026' },
    tag: { en: 'In progress', uk: 'В роботі' },
    categories: ['side', 'wordpress'],
    highlights: {
      en: ['WooCommerce on Bedrock', 'REST API for products, cart and orders', 'Vue front-end', 'Monorepo setup'],
      uk: ['WooCommerce на Bedrock', 'REST API для товарів, кошика й замовлень', 'Фронтенд на Vue', 'Структура монорепозиторію'],
    },
    result: { en: 'In progress', uk: 'В роботі' },
    stack: ['WordPress', 'Bedrock', 'WooCommerce', 'Vue', 'REST API'],
    isConfidential: false,
    // TODO: replace with the real repository URL.
    githubUrl: 'https://github.com/runo94/[repo]',
    placeholder: { background: '#2B2B2A', ink: '#B8E986', mark: 'Woo/Vue' },
  },
];
