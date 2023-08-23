import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyARecord, AnyMxRecord, AnyNaptrRecord } from 'dns';

interface Top {
  data: {
    id: number;
    attributes: {
      backgroundImg: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      topText: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      topImg: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
}

interface MobileImage {
  data: {
    id: number;
    attributes: {
      productTitle: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      aboutTitle: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      aboutImage: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      orderTitle: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      orderNum1: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      orderNum2: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      orderNum3: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      newsTitle: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      logo: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      twitter: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      instagram: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      facebook: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
}

@Component({
  selector: 'ns-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  productsapi: any[] = [];
  productList: any[] = [];
  top: any[] = [];
  backgroundImg: string = '';
  topText: string = '';
  topImg: string = '';
  productTitle: string = '';
  aboutTitle: string = '';
  aboutImage: string = '';
  orderTitle: string = '';
  orderNum1: string = '';
  orderNum2: string = '';
  orderNum3: string = '';
  newsTitle: string = '';
  logo: string = '';
  twitter: string = '';
  instagram: string = '';
  facebook: string = '';

  constructor(private http: HttpClient) {}


      ngOnInit() {

      .subscribe((res) => {
        this.productTitle =
          res.data.attributes.productTitle.data.attributes.url;
        this.aboutTitle = res.data.attributes.aboutTitle.data.attributes.url;
        this.aboutImage = res.data.attributes.aboutImage.data.attributes.url;
        this.orderTitle = res.data.attributes.orderTitle.data.attributes.url;
        this.orderNum1 = res.data.attributes.orderNum1.data.attributes.url;
        this.orderNum2 = res.data.attributes.orderNum2.data.attributes.url;
        this.orderNum3 = res.data.attributes.orderNum3.data.attributes.url;
        this.newsTitle = res.data.attributes.newsTitle.data.attributes.url;
        this.logo = res.data.attributes.logo.data.attributes.url;
        this.twitter = res.data.attributes.twitter.data.attributes.url;
        this.instagram = res.data.attributes.instagram.data.attributes.url;
        this.facebook = res.data.attributes.facebook.data.attributes.url;
      });
  }
}


