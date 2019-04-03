import { Component, OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  constructor(
    public productServie: ProductService
  ) { }

  ngOnInit() {
  }

}
