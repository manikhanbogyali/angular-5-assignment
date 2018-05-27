import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService ]
})
export class EmployeeComponent implements OnInit {
  employeeList: any = [];
  purchasedProducts: any = [];
  fullName: string = 'John';
  taxPercent: number;
  totalCount: number = 0;
  error: string = '';
  constructor(private employeeService: EmployeeService) {
    this.taxPercent = environment.taxPrecent; // get tax percentage from env
  }

  ngOnInit() {
    try {
      // fetch data for employee
      const data = this.employeeService.getEmployeeList();
      this.employeeList = data;
    } catch (e) {
      this.error = e;
    }
  }

  /**
   * view purchased products
   * @param purchasedProducts
   * @param fullName
   */
  viewPurchasedProduct( purchasedProducts, fullName ) {
    this.purchasedProducts = purchasedProducts;
    this.fullName = fullName;
    this.totalCount = 0;
  }

  /**
   * calculate total amaount per product and whole purchase
   * @param quantity
   * @param price
   * @returns {string}
   */
  calculateTotalAmount(quantity, price ) {
    const totalAmount = ( quantity * price ) + ( ( quantity * price ) * this.taxPercent );
    this.totalCount += totalAmount;
    return totalAmount.toFixed(2);
  }
}
