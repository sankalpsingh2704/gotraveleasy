import type { NavLink } from './constants';

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const SEARCH_TABS = [
  { label: 'Solo', icon: 'fa-user' },
  { label: 'Group', icon: 'fa-user-group' },
  { label: 'Travel Along', icon: 'fa-crown' },
  { label: 'Stays only', icon: 'fa-hotel' },
];

export const TRIP_TYPES = ['Complete package', 'Itinerary only', 'Hotels only', 'Travel Along'];

export const HERO_BADGES = [
  { icon: 'fa-shield-heart', text: '100% secure booking' },
  { icon: 'fa-headset', text: '24×7 trip support' },
  { icon: 'fa-star', text: '4.9/5 from 28k+ travelers' },
];

export const STATS = [
  { value: '150+', label: 'Destinations' },
  { value: '28k+', label: 'Happy travelers' },
  { value: '4.9★', label: 'Average rating' },
  { value: '24×7', label: 'On-trip support' },
];

export interface Service {
  icon: string;
  variant: 'a' | 'b' | 'c' | 'd';
  title: string;
  text: string;
  link: NavLink;
}

export const SERVICES: Service[] = [
  {
    icon: 'fa-user-group',
    variant: 'a',
    title: 'Group & Solo Travel',
    text: 'Choose your style — intimate solo escapes or vibrant group adventures, each tailored to your pace and budget.',
    link: { label: 'Explore options', href: '#packages' },
  },
  {
    icon: 'fa-map-location-dot',
    variant: 'c',
    title: 'Itinerary Planning',
    text: 'Smart, day-by-day guides built around your interests — food, culture, adventure or pure relaxation.',
    link: { label: 'See how it works', href: '#how' },
  },
  {
    icon: 'fa-hotel',
    variant: 'b',
    title: 'Hotel Booking',
    text: 'Handpicked stays from cozy homestays to luxury resorts — best prices, instant confirmation, free cancellation.',
    link: { label: 'Browse stays', href: '#destinations' },
  },
  {
    icon: 'fa-suitcase-rolling',
    variant: 'd',
    title: 'Complete Packages',
    text: 'Flights, stays, transfers & experiences bundled into one seamless, worry-free booking for solo or groups.',
    link: { label: 'View packages', href: '#packages' },
  },
];

export interface Destination {
  name: string;
  image: string;
  tag: string;
  price: string;
  size?: 'big' | 'tall';
  pin?: { icon: string; label: string };
}

export const DESTINATIONS: Destination[] = [
  {
    name: 'Bali, Indonesia',
    image: unsplash('1537996194471-e657df975ab4', 900),
    tag: '7 nights · Solo & Group',
    price: '₹58,999',
    size: 'big',
    pin: { icon: 'fa-fire', label: 'Top pick' },
  },
  { name: 'Paris, France', image: unsplash('1502602898657-3e91760cbb34', 700), tag: '5 nights', price: '₹94,500' },
  { name: 'Dubai, UAE', image: unsplash('1512453979798-5ea266f8880c', 700), tag: '4 nights', price: '₹46,999' },
  {
    name: 'Switzerland',
    image: unsplash('1530122037265-a5f1f91d3b99', 700),
    tag: '6 nights · Group',
    price: '₹1,24,000',
    size: 'tall',
    pin: { icon: 'fa-mountain-sun', label: 'Scenic' },
  },
  { name: 'Maldives', image: unsplash('1514282401047-d79a71a590e8', 700), tag: '4 nights', price: '₹88,000' },
  {
    name: 'Rajasthan, India',
    image: unsplash('1477587458883-47145ed94245', 700),
    tag: '5 nights',
    price: '₹32,500',
    pin: { icon: 'fa-leaf', label: 'India' },
  },
];

export const ALONG_PERKS = [
  {
    icon: 'fa-user-check',
    title: 'Curated travelers only',
    text: 'Every member is verified and thoughtfully matched for a safe, like-minded group.',
  },
  {
    icon: 'fa-calendar-star',
    title: 'Select dates & destinations',
    text: 'Exclusive departures to iconic places — reserve your seat before it fills up.',
  },
  {
    icon: 'fa-hand-holding-heart',
    title: 'Hosted end-to-end',
    text: 'Travel along with your host & a small crew — stays, routes and experiences fully taken care of.',
  },
];

export const ALONG_MEDIA = {
  photo: unsplash('1539635278303-d4002c07eae3', 1200),
  host: unsplash('1539571696357-5a69c17a67c6', 200),
};

export const STEPS = [
  {
    icon: 'fa-magnifying-glass-location',
    title: 'Tell us your vibe',
    text: 'Pick solo, group or Travel Along, your destination, dates and budget.',
  },
  { icon: 'fa-route', title: 'Get a smart plan', text: 'Receive a tailored itinerary with stays, routes and experiences.' },
  {
    icon: 'fa-credit-card',
    title: 'Book in one click',
    text: 'Confirm everything securely — flights, hotels and activities bundled.',
  },
  { icon: 'fa-plane-departure', title: 'Travel worry-free', text: 'Enjoy 24×7 support on the ground while you make memories.' },
];

export interface TravelPackage {
  ribbon: string;
  ribbonIcon?: string;
  hot?: boolean;
  featured?: boolean;
  image: string;
  imageAlt: string;
  type: string;
  title: string;
  features: string[];
  price: string;
  cta: { label: string; variant: 'btn-ghost' | 'btn-coral' };
}

export const PACKAGES: TravelPackage[] = [
  {
    ribbon: 'Solo',
    image: unsplash('1488646953014-85cb44e25828', 700),
    imageAlt: 'Solo package',
    type: 'Solo Explorer',
    title: 'Goa Freedom Escape',
    features: [
      '4 nights beachside stay',
      'Personalized day-by-day itinerary',
      'Airport transfers & local SIM',
      '24×7 solo-safety support',
    ],
    price: '₹18,999',
    cta: { label: 'Book now', variant: 'btn-ghost' },
  },
  {
    ribbon: 'Travel Along',
    ribbonIcon: 'fa-crown',
    hot: true,
    featured: true,
    image: unsplash('1522199755839-a2bacb67c546', 700),
    imageAlt: 'Travel Along package',
    type: 'Hosted Journey',
    title: 'Ladakh Travel Along',
    features: [
      'Travel along with your host & crew',
      'Curated small group (max 10)',
      'Select dates: Nov 18–24',
      'All stays, transport & experiences',
    ],
    price: '₹42,500',
    cta: { label: 'Request invite', variant: 'btn-coral' },
  },
  {
    ribbon: 'Group',
    image: unsplash('1528181304800-259b08848526', 700),
    imageAlt: 'Group package',
    type: 'Group Adventure',
    title: 'Thailand Squad Trip',
    features: [
      '6 nights · Bangkok + Phuket',
      'Group activities & island hopping',
      'Flights + stays + transfers',
      'Dedicated group coordinator',
    ],
    price: '₹36,750',
    cta: { label: 'Book now', variant: 'btn-ghost' },
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'My first solo trip and GoTravelEasy made it stress-free. The itinerary was spot on and support was just a call away. Felt safe the whole time!',
    name: 'Ananya Sharma',
    alt: 'Ananya',
    role: 'Solo trip · Goa',
    avatar: unsplash('1494790108377-be9c29b29330', 120),
  },
  {
    quote:
      'Travel Along to Ladakh was magical — met incredible people and our host took care of everything. Easily my best trip ever.',
    name: 'Rahul Verma',
    alt: 'Rahul',
    role: 'Travel Along · Ladakh',
    avatar: unsplash('1507003211169-0a1dd7228f2d', 120),
  },
  {
    quote:
      'Booked a group package for 8 friends to Thailand. One payment, zero chaos, and the coordinator was a lifesaver. Highly recommend!',
    name: 'Priya Nair',
    alt: 'Priya',
    role: 'Group trip · Thailand',
    avatar: unsplash('1438761681033-6461ffad8d80', 120),
  },
];

export const SOCIAL_LINKS = [
  { label: 'Instagram', icon: 'fa-instagram' },
  { label: 'Facebook', icon: 'fa-facebook-f' },
  { label: 'X', icon: 'fa-x-twitter' },
  { label: 'YouTube', icon: 'fa-youtube' },
];

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Destinations', href: '#destinations' },
      { label: 'Packages', href: '#packages' },
      { label: 'Travel Along', href: '#along' },
    ],
  },
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Blog & guides', 'Contact'].map((label) => ({ label, href: '#' })),
  },
  {
    title: 'Support',
    links: ['Help center', 'Cancellation policy', 'Terms & privacy', '24×7 helpline'].map((label) => ({
      label,
      href: '#',
    })),
  },
];
