import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  atributoPersonalizado = "qualquer";

  /* Injeacao de Dependencia */
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}
  fazerAcao(): void {
    console.log("Fazendo a Ação!");
  }

  createProduct(): void {
    this.productService.showMessage("Produto Criado com Sucesso!");
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
