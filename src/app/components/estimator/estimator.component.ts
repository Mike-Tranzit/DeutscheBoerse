import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Estimator} from '@models/types/estimator.type';
@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.css']
})
export class EstimatorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private readonly data: Estimator) {

  }

  ngOnInit(): void {
  }

  get dataForJsonView(): Estimator {
    return this.data;
  }

}
