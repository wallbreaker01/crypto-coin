import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format a number as USD currency
export function formatCurrency(value: number, currency: string = 'USD', locale: string = 'en-US', options: Intl.NumberFormatOptions = {}
) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    ...options,
  }).format(value);
}