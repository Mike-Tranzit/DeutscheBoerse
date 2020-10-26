import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WrapperComponent} from './wrapper/wrapper.component';
import {ProductComponent} from './product/product.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {SeriesComponent} from './series/series.component';
import { EstimatorComponent } from './estimator/estimator.component';
import {HttpClientModule} from '@angular/common/http';
import {SERVICES} from '@services/index';
import {API_SETTINGS_TOKEN, SETTINGS} from '@tokens/settings.token';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {Routes, RouterModule} from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

const appRoutes: Routes = [
  { path: '', component: ProductsListComponent},
  { path: 'series/:productId', component: SeriesComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [WrapperComponent, ProductComponent, ProductsListComponent, SeriesComponent, EstimatorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxJsonViewerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ScrollingModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    WrapperComponent,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    ScrollingModule
  ],
  providers: [
    ...SERVICES,
    {
      provide: API_SETTINGS_TOKEN, useValue: SETTINGS
    }
  ]
})
export class WrapperModule {
}
