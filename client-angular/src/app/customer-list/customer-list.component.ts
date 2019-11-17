import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { CustomerService } from "../customer.service";
import { Customer } from "../models/customers";
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})


export class CustomerListComponent {
  constructor(private customerService: CustomerService) {}
  newCustomer: Customer = new Customer();
  Customers: Customer[] = [];
  // customers = [
  //   {name: 'Archie Princesa', phone: '3104043396', email: 'rainedesigns@gmail.com'},
  //   {name: 'Tony Stark', phone: '3104043396', email: 'rainedesigns@gmail.com'},
  //   {name: 'Peter Parker', phone: '3104043396', email: 'rainedesigns@gmail.com'},
  // ]
  // ;



  getCustomers() {
    this.customerService.getCustomers().subscribe(customers => (this.Customers = customers));
  }
 


  ngOnInit() {
    this.getCustomers();
  }
}

export class IconSvgExample {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('./assets/images/icons/thumbsup.svg'));
  }
}
