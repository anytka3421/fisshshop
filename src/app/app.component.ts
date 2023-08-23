import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyARecord, AnyMxRecord, AnyNaptrRecord } from 'dns';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  myTitle = 'Components title';
  productsapi: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
      .subscribe((res) => {
        console.log(res);
        this.productsapi = res.data;
      });
  }

  products: any[] = [
    {
      id: 1,
      title: 'Small fish',
      price: 5,
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thesprucepets.com%2Fsmall-aquarium-fish-breeds-for-freshwater-5120495&psig=AOvVaw2o85g09JIFpeL2EvFkKrST&ust=1692839139575000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNiBha_L8YADFQAAAAAdAAAAABAJ',
      description:
        'This fish is looking for a safe loving home! She is smart and friendly',
    },
    {
      id: 2,
      title: 'Medium fish',
      price: 15,
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aquariumcoop.com%2Fblogs%2Faquarium%2Fnano-fish&psig=AOvVaw2o85g09JIFpeL2EvFkKrST&ust=1692839139575000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNiBha_L8YADFQAAAAAdAAAAABAS',
      description:
        'This fish is looking for a safe loving home! She is smart and friendly',
    },
    {
      id: 3,
      title: 'Big Fish',
      price: 20,
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Ffish&psig=AOvVaw2-HuKmQ4PhQXl8oNTV8-Ld&ust=1692839209991000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJDkhtDL8YADFQAAAAAdAAAAABAE',
      description:
        'This fish is looking for a safe loving home! She is smart and friendly',
    },
    {
      id: 3,
      title: 'Papa fish',
      price: 25,
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smithsonianmag.com%2Fsmart-news%2Fsheepshead-fish-human-teeth-plucked-north-carolina-coast-180978396%2F&psig=AOvVaw2-HuKmQ4PhQXl8oNTV8-Ld&ust=1692839209991000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJDkhtDL8YADFQAAAAAdAAAAABAR',
      description:
        'This fish is looking for a safe loving home! She is smart and friendly',
    },
  ];
}
