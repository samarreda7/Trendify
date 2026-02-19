import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../product-service';
import { products } from '../products';
import { Card } from "../card/card";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [Card],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  ProductList: products[] = [];
  firstEightProducts: products[] = [];
  remainingProducts: products[] = [];
  private readonly Products = inject(ProductService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.getproducts();
  }
  getproducts(): void {
    this.Products.getproducts().subscribe({
      next: (data: products[]) => {
        this.ProductList = data;
        this.firstEightProducts = data.slice(0, 8); // First 8
        this.remainingProducts = data.slice(8);
        this.cdr.detectChanges();
      },
    });
  }

}
