export const SUPPORTED_LANGUAGES = ['uk', 'en'] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

/** A piece of copy written in every supported language. */
export type Localized<Value = string> = Record<Language, Value>;

export type ProjectCategory = 'wordpress' | 'react' | 'side';

export interface ProjectScreenshot {
  src: string;
  alt: Localized;
}

export interface Project {
  slug: string;
  title: Localized;
  shortDescription: Localized;
  summary: Localized;
  role: Localized;
  years: Localized;
  tag: Localized;
  categories: ProjectCategory[];
  highlights: Localized<string[]>;
  result?: Localized;
  stack: string[];
  /** Shown on the tile; true for client work under NDA. */
  isConfidential: boolean;
  githubUrl?: string;
  cover?: {
    tile: string;
    full: string;
    alt: Localized;
    /** Width divided by height, used to reserve space before the image loads. */
    aspectRatio: string;
  };
  /** Colours and label for tiles that have no screenshot yet. */
  placeholder: { background: string; ink: string; mark: string };
  gallery?: ProjectScreenshot[];
}
