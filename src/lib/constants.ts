export const BRAND = {
  name: 'GoTravelEasy',
  tld: '.in',
  logo: `${import.meta.env.BASE_URL}assets/favicon.svg`,
  about:
    'Making travel effortless for solo explorers and groups across India and the world — with smart itineraries, trusted stays and our exclusive Travel Along journeys.',
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Travel Along', href: '#along' },
  { label: 'Packages', href: '#packages' },
  { label: 'How it works', href: '#how' },
];
