import { Component, OnInit } from '@angular/core';
import { lines } from '../lines';

@Component({
  selector: 'app-day1',
  standalone: true,
  imports: [],
  templateUrl: './day1.component.html',
  styleUrl: './day1.component.scss',
})
export class Day1Component implements OnInit {
  lineArray: string[] = lines.trim().split('\n');
  answer = 0;

  ngOnInit(): void {
    this.answer = this.sumCalibrationValues(this.lineArray);
  }

  sumCalibrationValues(lines: string[]): number {
    //iterates through each line, catches the first and last digit, then proceeds to combine and sum the values.
    return lines.reduce((sum, line) => {
      const firstDigit = line.match(/\d/); //first digit;
      const lastDigit = line.match(/\d(?!.*\d)/); //finds the last digit;

      if (firstDigit && lastDigit) {
        const value = parseInt(firstDigit[0] + lastDigit[0]); //combine (not add) both values into a single number
        return sum + value; //add the second digit to the sum and return;
      }
      return sum; //return only the sum of the itiration ;
    }, 0);
  }
}
