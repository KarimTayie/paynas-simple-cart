import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public productServie: ProductService
  ) { }

  ngOnInit() {
  }

}
