import type { Destination } from '@/lib/content';

export function DestinationCard({ name, image, tag, price, size, pin }: Destination) {
  return (
    <div className={size ? `dest-card ${size}` : 'dest-card'}>
      {pin && (
        <span className="pin">
          <i className={`fa-solid ${pin.icon}`}></i> {pin.label}
        </span>
      )}
      <img src={image} alt={name.split(',')[0]} />
      <div className="meta">
        <h4>{name}</h4>
        <div className="row">
          <span className="tag">{tag}</span>
          <span className="price">{price}</span>
        </div>
      </div>
    </div>
  );
}
