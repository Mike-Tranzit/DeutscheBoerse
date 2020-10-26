export type Components = {
  portfolio_components: Component[]
};

export type Component = {
  readonly type: 'etd_portfolio',
  etd_portfolio: ComponentEtdPortfolioItem[]
};

export type ComponentEtdPortfolioItem = {
  readonly line_no: number,
  readonly product_id: string,
  readonly net_ls_balance: number,
  readonly maturity: number
}
