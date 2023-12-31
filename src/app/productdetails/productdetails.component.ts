import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyARecord, AnyMxRecord, AnyNaptrRecord } from 'dns';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: number;
  attributes: {
    ProductName: string;
    Price: string;
    ProductDescription: string;
  };
}
@Component({
  selector: 'ns-productdetails',
  templateUrl: './productdetails.component.html',
})
export class ProductdetailsComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    let productID = this.route.snapshot.paramMap.get('id');
      .subscribe((res) => {
        console.log('product', res);
        this.product = res;
      });
  }
}
