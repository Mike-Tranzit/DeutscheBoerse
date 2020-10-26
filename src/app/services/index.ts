import {EstimatorService } from './estimator.service';
import {ProductsService} from './products.service';
import {SeriesService} from './series.service';

export * from './estimator.service';
export * from './products.service';
export * from './series.service';

export const SERVICES = [EstimatorService, ProductsService, SeriesService];
