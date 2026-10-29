import { CallToAction } from '@/components/CallToAction';
import { Destinations } from '@/components/Destinations';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Packages } from '@/components/Packages';
import { SearchWidget } from '@/components/SearchWidget';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { TravelAlong } from '@/components/TravelAlong';
import { TrustStrip } from '@/components/TrustStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchWidget />
      <TrustStrip />
      <Services />
      <Destinations />
      <TravelAlong />
      <HowItWorks />
      <Packages />
      <Testimonials />
      <CallToAction />
    </>
  );
}
