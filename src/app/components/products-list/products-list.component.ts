import {Component, OnInit} from '@angular/core';
import {ProductsService} from '@services/products.service';
import {Product} from '@models/types/product.type';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public productsList: Product[];

  constructor(private readonly productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getProducts().then((products: Product[]) => {
      this.productsList = products;
    });

  }

  productIndex(index: number, item: Product): string {
    return `${item.product}${index}`;
  }
}
