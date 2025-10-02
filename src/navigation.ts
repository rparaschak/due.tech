import { getBlogPermalink, getAsset, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Supercharge Engineering Team with AI',
          href: getPermalink('/services/supercharge-engineering-team-with-ai'),
        },
        {
          text: 'Technical Due Diligence',
          href: getPermalink('/services/technical-due-diligence'),
        },
      ],
    },
    {
      text: 'Presentations',
      links: [
        {
          text: 'Coding Agents 101: Foundation and Mindset',
          href: getPermalink('/presentations/coding-agents-101'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [{ text: 'Blog', href: getBlogPermalink() }],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    Built with AstroWind template · All rights reserved.
  `,
};
