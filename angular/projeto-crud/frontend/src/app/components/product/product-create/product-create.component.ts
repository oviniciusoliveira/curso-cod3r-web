import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  atributoPersonalizado = 'qualquer'

  constructor() { }

  ngOnInit(): void {
  }
  fazerAcao(): void {
    console.log('Fazendo a Ação!')
  }

}
