import { defineConfig, type Plugin } from 'vite';
import { projects } from './src/data/projects';
import { renderMain, renderSidebar } from './src/scripts/render';

// Fonts the first screen needs; everything else loads on demand through unicode-range.
const PRELOADED_FONTS = [/^assets\/bricolage-grotesque-latin-wght-normal-.*\.woff2$/, /^assets\/inter-latin-wght-normal-.*\.woff2$/];

/**
 * Production-only tweaks for first paint: bakes the English page into index.html so text and the
 * portrait show before JS runs, inlines the small stylesheet, and preloads the two Latin fonts.
 */
function fastFirstPaint(): Plugin {
  return {
    name: 'fast-first-paint',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, context) {
        const bundle = context.bundle ?? {};
        let page = html
          .replace('<aside id="sidebar" class="sidebar"></aside>', `<aside id="sidebar" class="sidebar">${renderSidebar('en', projects.length)}</aside>`)
          .replace('<main id="main" class="main"></main>', `<main id="main" class="main">${renderMain('en', projects, 'all')}</main>`);

        for (const [fileName, output] of Object.entries(bundle)) {
          if (output.type === 'asset' && fileName.endsWith('.css')) {
            const linkPattern = new RegExp(`<link rel="stylesheet"[^>]*href="/${fileName}"[^>]*>`);
            page = page.replace(linkPattern, () => `<style>${String(output.source)}</style>`);
            delete bundle[fileName];
          }
        }

        const fontPreloads = Object.keys(bundle)
          .filter((fileName) => PRELOADED_FONTS.some((pattern) => pattern.test(fileName)))
          .map((fileName) => `<link rel="preload" href="/${fileName}" as="font" type="font/woff2" crossorigin>`)
          .join('\n  ');
        return page.replace('</title>', `</title>\n  ${fontPreloads}`);
      },
    },
  };
}

// runo94.github.io is a user site, so it is served from the domain root.
export default defineConfig({
  base: '/',
  plugins: [fastFirstPaint()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
});
