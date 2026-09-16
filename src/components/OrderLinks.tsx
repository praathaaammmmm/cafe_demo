import type { OrderLinks as OrderLinksData } from '../types';

interface OrderLinksProps {
  order: OrderLinksData;
  className?: string;
}

export function OrderLinks({ order, className }: OrderLinksProps) {
  const hasAny = order.zomatoUrl || order.swiggyUrl;

  return (
    <div className={className}>
      {order.zomatoUrl ? (
        <a href={order.zomatoUrl} target="_blank" rel="noopener noreferrer">
          Order on Zomato
        </a>
      ) : (
        <span aria-disabled="true">Zomato — link coming soon</span>
      )}
      {order.swiggyUrl ? (
        <a href={order.swiggyUrl} target="_blank" rel="noopener noreferrer">
          Order on Swiggy
        </a>
      ) : (
        <span aria-disabled="true">Swiggy — link coming soon</span>
      )}
      {!hasAny && (
        <span className="visually-hidden">
          Online ordering links will be added once the café's Zomato and Swiggy
          pages are confirmed.
        </span>
      )}
    </div>
  );
}
