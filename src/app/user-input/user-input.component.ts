import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInpute } from '../investment-input-model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  imports: [FormsModule],
})
export class UserInputComponent {
  calculate = output<InvestmentInpute>();
  enteredIntial = signal('0');
  enteredAnnual = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('5');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredIntial(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnual(),
    });
    this.enteredAnnual.set('0')
    this.enteredDuration.set('5')
    this.enteredExpectedReturn.set('5')
    this.enteredIntial.set('0')
  }
}
