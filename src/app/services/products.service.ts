import {Injectable} from '@angular/core';
import {PRODUCTS} from '@services/API';
import {HttpClient} from '@angular/common/http';
import {Product, Products} from '@models/types/product.type';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[];

  constructor(private http: HttpClient) {
  }

  private fetchProducts(): Promise<Products> {
   return this.http.get<Products>(`${environment.baseUrl}${PRODUCTS}`).toPromise();
  }

  public getProducts(): any {
    if(!this.products) {
      return this.fetchProducts().then(({products}: Products) => {
        this.products = products;
        return products;
      });
    } else {
      return Promise.resolve(this.products);
    }
  }
}
