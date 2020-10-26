export type SeriesList = {
  business_date: number,
  live: boolean,
  live_timestamp: number,
  list_series: Series[]
};


export type Series = {
  iid: number,
  product_id: string,
  contract_maturity: number,
  expiry_maturity: number,
  version_number: string
}
