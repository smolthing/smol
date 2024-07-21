import { BLOG_URL, YOUTUBE_URL } from '../../shared/constants';
import { routes } from 'wasp/client/router';

export const navigation = [
  { name: 'Projects', href: '#features' },
  { name: 'Pricing', href: routes.PricingPageRoute.build() },
  { name: 'Blog', href: BLOG_URL },
  { name: 'Youtube', href: YOUTUBE_URL },
];

export const features = [
  {
    name: 'Grow a Plant',
    description: 'A habit-tracking app where you grow a plant by visiting it daily.',
    icon: '🌱',
    href: "https://smolthing.github.io/plant",
  },
  {
    name: 'Notepad',
    description: 'A notetaking app for recording typing effects in videos with customizable fonts, sizes and types.',
    icon: '✍️',
    href: "https://smolthing.github.io/notepad",
  },
  {
    name: 'Smolwork [WIP]',
    description: 'A homework app with bite-sized content, MCQs, and interactive exercises.',
    icon: '👩🏻‍💻',
    href: '',
  },
  {
    name: 'Smolskin [WIP]',
    description: 'A skincare app designed to help you track skincare products, log food and drinks, making it easy to understand your skin better.',
    icon: '🧴',
    href: '',
  }
];

export const faqs = [
  {
    id: 1,
    question: 'What is the name of the yellow birb?',
    answer: 'Bibi',
    href: './',
  },
];

export const footerNavigation = {
  company: [
    { name: 'About', href: './' },
    { name: 'Youtube', href: 'https://www.youtube.com/@smolthing'}
  ],
};
