import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {Product} from '@models/types/product.type';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input('product') productItem: Product;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  clickHandler(): void {
    this.router.navigateByUrl(  `series/${this.productItem.product}`);
  }
}
