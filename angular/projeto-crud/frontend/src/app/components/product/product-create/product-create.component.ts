import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import { Product } from "../product.model";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  atributoPersonalizado = "qualquer";

  product: Product = {
    name: "Produto de Teste",
    price: 125.98,
  };

  /* Injeacao de Dependencia */
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}
  fazerAcao(): void {
    console.log("Fazendo a Ação!");
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto Criado com Sucesso!");
      this.router.navigate(["/products"]);
    });
  }
  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
