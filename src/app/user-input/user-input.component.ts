import { Component, NgModule, signal } from '@angular/core';
import { InvestmentService } from '../investment-service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredIntial = '0';
  enteredAnnual = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '5';

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredIntial,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnual,
    });
 /*    this.enteredAnnual.set('0');
    this.enteredDuration.set('5');
    this.enteredExpectedReturn.set('5');
    this.enteredIntial.set('0 );*/
  }
}
