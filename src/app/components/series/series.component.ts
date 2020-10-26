import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {EstimatorService, SeriesService} from '@app/services';
import {Series, SeriesList} from '@models/types/series.type';
import {SeriesSubmitCreator} from '@app/utils/SeriesSubmitCreator';
import {MatSelectionList} from '@angular/material/list';
import {Estimator} from '@models/types/estimator.type';
import {MatDialog} from '@angular/material/dialog';
import {EstimatorComponent} from '@components/estimator/estimator.component';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit, OnDestroy {
  @ViewChild('series') series: MatSelectionList;
  private productId: string;
  public seriesList: SeriesList['list_series'];
  private productIdSub: Subscription;
  private seriesIdSub: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private seriesService: SeriesService,
              private estimatorService: EstimatorService,
              private dialog: MatDialog
              ) {
  }

  ngOnInit(): void {
    this.productIdSub = this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('productId');
      this.seriesIdSub = this.seriesService.getSeries(this.productId)
        .subscribe(({list_series}: SeriesList) => this.seriesList = list_series);
    });
  }

  seriesIndex(index: number, item: Series): string {
    return `${item.iid}${index}`;
  }

  onBack(): void {
    this.router.navigate(['/']);
  }

  selectedOptions(): any {
    return this.series.selectedOptions.selected;
  }

  submitHandler(): void {
    const preFormationArray = this.selectedOptions().map(item => item.value as Series);
    const SeriesSubmitFormatClass = new SeriesSubmitCreator(preFormationArray);
    SeriesSubmitFormatClass.createResult();
    const params = SeriesSubmitFormatClass.result();
    this.estimatorService.sendEstimate(params).then(this.printEstimatorResult.bind(this));
  }

  private printEstimatorResult(data: Estimator): void {
    const dialogConfig = {
      data,
      height: '90%',
      width: '1000px'
    } as const;
    this.dialog.open(EstimatorComponent, dialogConfig);
  }

  get seriesAreSelected(): boolean {
    const seriesAreRendered = this.seriesList && this.series;
    return seriesAreRendered && this.selectedOptions().length > 0;
  }

  ngOnDestroy(): void {
    if (this.seriesIdSub) {
      this.productIdSub.unsubscribe();
      this.seriesIdSub.unsubscribe();
    }
  }

}
