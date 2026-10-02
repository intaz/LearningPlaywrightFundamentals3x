export type TransactionType = 'spent' | 'earned';

export interface ParsedAmount {
    type: TransactionType;
    value: number;
}

/**
 * Parses an amount string (e.g. "+ 1,250 USD", "- 320 USD") and classifies it
 * as either 'spent' (negative) or 'earned' (positive).
 */
export function parseAmount(amountText: string): ParsedAmount {
    const value = parseFloat(amountText.replace(/[^0-9.]/g, ''));
    const type: TransactionType = amountText.startsWith('-') ? 'spent' : 'earned';
    return { type, value };
}
