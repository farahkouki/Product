import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private ps :ProductService, private router:Router) { }

  products = [
    {id:1 , title :' iphone 15 ', price : 1500 , quantity : 1 , like:0, image:"../../assets/images/iphone1.jpg"},
    {id:2 , title :' iphone 16 ', price : 2000 , quantity : 10 , like:0, image :"../../assets/images/iphone2.jpg"},
    {id:3 , title :' iphone 17 ', price : 2500 , quantity : 0 , like:0, image : "../../assets/images/iphone3.jpg"},
  ]
  formLogin = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]), // ID doit être un nombre
    title: new FormControl('', [Validators.required, Validators.minLength(3)]), // Minimum 3 caractères
    price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]), // Nombre ou nombre avec 2 décimales
    quantity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]), // Nombre entier positif
    like: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]) // Nombre entier positif

    })


    add(){
     this.ps.products.push(this.formLogin.value as any)
     this.router.navigate(['/product'])
    }

}
