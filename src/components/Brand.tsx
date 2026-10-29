import { BRAND } from '@/lib/constants';

export function Brand() {
  return (
    <a href="#" className="brand">
      <img src={BRAND.logo} alt="GoTravelEasy logo" className="logo" />
      <span>
        {BRAND.name}
        <span className="dot-in">{BRAND.tld}</span>
      </span>
    </a>
  );
}
