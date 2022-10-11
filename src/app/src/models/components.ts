export type ImagePosition = "left" | "right" | "top" | "bottom";
export enum HeroVariant {
  BLU = "blue",
  WHITE = "white",
}
export enum GridVariant {
  GRID = "grid",
  WALK = "walk",
}
export enum AlertSeverity {
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  SUCCESS = "success",
}

export enum AlertVariant {
  OUTLINED = "outlined",
  STANDARD = "standard",
}

export interface AlertProps {
  severity: AlertSeverity;
  variant: AlertVariant;
}
export interface StrapiImage {
  url: string;
  localFile: any;
  alternativeText: string;
}
export interface PageProps {
  title?: string;
  titleMobile?: string;
  description?: string;
  slug?: string;
  body?: { data?: { body: string } };
  blocks?: Array<GridProps | HeroProps | LinkProps>;
  seo?: SeoProps;
}
export interface LinkProps extends StrapiBlock {
  title?: string;
  titlemobile?: string;
  body?: { data?: { body?: string } };
  image?: StrapiImage;
  page?: PageProps;
  externalurl?: string;
  target?: string;
  attributes?: string;
  cssclass?: string;
  reactcomponent?: string;
}

export interface HeroProps extends StrapiBlock {
  title?: string;
  titlemobile?: string;
  body?: { data?: { body?: string } };
  images?: Array<StrapiImage>;
  imageposition?: ImagePosition;
  attributes?: string;
  cssclass?: string;
  reactcomponent?: string;
  buttons?: Array<LinkProps>;
  extra?: {
    variant?: HeroVariant;
    alert?: AlertProps;
    type?: "";
  };
}

export interface GridItemProps extends LinkProps {
  issequential?: boolean;
}

export interface GridProps extends StrapiBlock {
  title?: string;
  titlemobile?: string;
  body?: { data?: { body?: string } };
  items?: Array<GridItemProps>;
  variant?: GridVariant;
}

export interface SeoProps {
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: StrapiImage;
  metaSocial?: {
    socialNetwork?: string;
    title?: string;
    description?: string;
    image?: StrapiImage;
  };
  keywords?: string;
  metaRobots?: string;
  metaViewport?: string;
  canonicalURL?: string;
}
export interface StrapiBlock {
  __typename: string;
}

export interface NavigationTabsProps {
  title?: string;
  titlemobile?: string;
  body?: { data?: { body?: string } };
  image?: StrapiImage;
  attributes?: string;
  cssclass?: string;
  reactcomponent?: string;
  extra?: {
    [key: string]: string;
  };
  externalurl?: string;
  page?: PageProps;
  target?: string;
}

export interface StrapiPageProps {
  id?: string;
  slug?: string;
  title?: string;
  titlemobile?: string;
  seo?: {
    canonicalURL?: string;
    metaDescription?: string;
    metaImage?: {
      alternativeText?: string;
      url?: string;
    };
    metaTitle?: string;
    metaViewport?: string;
    metaSocial?: {
      description?: string;
      image?: {
        alternativeText?: string;
        url?: string;
      };
      title?: string;
      socialNetwork?: string;
    };
  };
  description?: string;
  blocks?: Array<HeroProps | GridProps | LinkProps>;
  body?: {
    data?: {
      body?: string;
    };
  };
}

export type LangCode = "it" | "en";
export type LangLabels = Record<LangCode, string>;
export type Languages = Record<LangCode, LangLabels>;
export type LangSwitchProps = {
  currentLangCode?: LangCode;
  languages: Languages;
  onLanguageChanged: (newLang: LangCode) => void;
};
