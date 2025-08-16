// Global pricing and logic variables for CHT Founders Pro Funnel
export const PRICING = {
  ANNUAL: 2497,        // main PIF price
  TWO_PAY: 1499,       // two payments (x2)
  BUMP_PRICE: 97,      // order bump
  UPSELL1_PRICE: 497,  // upsell 1
  UPSELL2_PRICE: 597,  // upsell 2
} as const;

export const FUNNEL_CONFIG = {
  SEAT_CAP: 200,
  LIFETIME_PRICE_LOCK: true,
  HIPAA_AVAILABLE: true,
  FAIR_USE_AI: true,
  TIMEZONE: 'America/Chicago',
  // DEADLINE_DATETIME: '2025-08-25T23:59:00', // optional countdown
} as const;

// Seat tracking utilities
export class SeatTracker {
  private static STORAGE_KEY = 'cht_seats_remaining';
  
  static getSeatsRemaining(): number {
    if (typeof window === 'undefined') return FUNNEL_CONFIG.SEAT_CAP;
    
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? parseInt(stored) : FUNNEL_CONFIG.SEAT_CAP;
  }
  
  static setSeatsRemaining(count: number): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.STORAGE_KEY, count.toString());
  }
  
  static decrementSeat(): number {
    const current = this.getSeatsRemaining();
    const newCount = Math.max(0, current - 1);
    this.setSeatsRemaining(newCount);
    return newCount;
  }
  
  static isLowStock(): boolean {
    return this.getSeatsRemaining() <= 25;
  }
  
  static isCriticalStock(): boolean {
    return this.getSeatsRemaining() <= 10;
  }
}

// UTM tracking utilities
export class UTMTracker {
  private static STORAGE_KEY = 'cht_utm_data';
  
  static captureUTM(): void {
    if (typeof window === 'undefined') return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_content: urlParams.get('utm_content') || '',
      ref: urlParams.get('ref') || '',
      timestamp: Date.now(),
    };
    
    if (Object.values(utmData).some(val => val !== '' && val !== 0)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(utmData));
    }
  }
  
  static getUTMData(): Record<string, string> {
    if (typeof window === 'undefined') return {};
    
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  }
}