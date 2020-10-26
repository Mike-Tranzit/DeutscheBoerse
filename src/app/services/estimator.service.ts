import {Injectable} from '@angular/core';
import {Components} from '@models/types/components.type';
import {HttpClient} from '@angular/common/http';
import {ESTIMATOR} from '@services/API';
import {Estimator} from '@models/types/estimator.type';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class EstimatorService {
  private estimator: Estimator;

  constructor(private http: HttpClient) {
  }

  public sendEstimate(params: Components): any {
    return this.http.post<Estimator>(`${environment.baseUrl}${ESTIMATOR}`, {...params})
      .toPromise();
  }

  get estimatorResult(): Estimator {
    return this.estimator;
  }
}
