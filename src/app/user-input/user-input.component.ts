import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInpute } from '../investment-input-model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  imports: [FormsModule]
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInpute>();
  enteredIntial = '0';
  enteredAnnual = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';


onSubmit() {
 this.calculate.emit({
  initialInvestment: +this.enteredIntial, 
  duration: +this.enteredDuration, 
  expectedReturn: +this.enteredExpectedReturn, 
  annualInvestment: +this.enteredAnnual})
}

}
