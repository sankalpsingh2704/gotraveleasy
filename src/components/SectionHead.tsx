import type { ReactNode } from 'react';

interface SectionHeadProps {
  icon: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

export function SectionHead({ icon, eyebrow, title, children }: SectionHeadProps) {
  return (
    <div className="section-head">
      <span className="eyebrow">
        <i className={`fa-solid ${icon}`}></i> {eyebrow}
      </span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
