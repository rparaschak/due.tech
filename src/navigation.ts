import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Get Started', href: '#', target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Built with AstroWind template · All rights reserved.
  `,
};
