/**
 * Helpers y configuración para el envío de eventos de Google Analytics (GA4)
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackMenuClick(itemName: string, category: string, price: number): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'menu_item_click', {
      item_name: itemName,
      item_category: category,
      price: price
    });
  } else {
    console.log(`[Analytics Simulation] Menu Click: ${itemName} (${category}) - $${price}`);
  }
}
