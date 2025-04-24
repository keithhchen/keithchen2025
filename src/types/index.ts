export interface Translation {
  navHome: string;
  navAbout: string;
  navConnect: string;
  hero: {
    heading: string;
    subheading: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    bullet1: string;
    bullet2: string;
  };
  connect: {
    title: string;
    xiaohongshu: string;
    wechat: string;
    email: string;
  };
  footer: string;
}

export type Translations = {
  en: Translation;
  zh: Translation;
};

export type Language = 'en' | 'zh';
export type Theme = 'light' | 'dark';