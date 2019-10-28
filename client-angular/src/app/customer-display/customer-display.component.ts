import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../customer.service";
import { Customer } from "../models/customers";

@Component({
  selector: "app-customer-display",
  templateUrl: "./customer-display.component.html",
  styleUrls: ["./customer-display.component.css"]
})
export class CustomerDisplayComponent implements OnInit {
  constructor(private customerService: CustomerService) {}
  newCustomer: Customer = new Customer();
  Customers: Customer[] = [];

  getCustomers() {
    this.customerService.getCustomers().subscribe(customers => (this.Customers = customers));
  }

  addCustomer() {
    this.customerService.addCustomer(this.newCustomer).subscribe(result => {
      this.getCustomers();
      this.newCustomer = new Customer();
    });
  }

  ngOnInit() {
    this.getCustomers();
  }
}
