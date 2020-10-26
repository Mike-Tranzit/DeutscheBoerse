export type Product = {
  readonly product: string,
  readonly instrument_type: 'future' | 'option'
};

export type Products = {
  readonly business_date: number,
  readonly live: boolean,
  readonly live_timestamp: number,
  products: Product[]
};
