import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERIES} from '@services/API';
import { SeriesList } from '@models/types/series.type';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  public getSeries(productId: string): Observable<SeriesList> {
    const params = {products: productId};
    return this.http.get<SeriesList>(`${environment.baseUrl}${SERIES}`,{params});
  }
}
