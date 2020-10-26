import {Series} from '@models/types/series.type';
import {Components, ComponentEtdPortfolioItem} from '@models/types/components.type';

export class SeriesSubmitCreator {
  private portfolioComponents: Components = {
    portfolio_components: [
      {
        type: 'etd_portfolio',
        etd_portfolio: [] as ComponentEtdPortfolioItem[]
      }
    ]
  };

  constructor(private preFormationArray: Series[]) {
  }

  private resultItemCreator = ({iid, product_id, contract_maturity}: Series): ComponentEtdPortfolioItem => ({
    line_no: iid,
    product_id,
    net_ls_balance: 1,
    maturity: contract_maturity
  } as ComponentEtdPortfolioItem);


  public createResult(): void {
    const [portfolioFirstComponent] = this.portfolioComponents.portfolio_components;
    const {etd_portfolio: Portfolio} = portfolioFirstComponent;
    this.preFormationArray.map((item: Series) => Portfolio.push(this.resultItemCreator(item)));
  }

  public result(): Components {
    return this.portfolioComponents;
  }
}
