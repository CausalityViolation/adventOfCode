import { Component } from '@angular/core';
import { lines } from '../lines';

@Component({
  selector: 'app-day1p2',
  standalone: true,
  imports: [],
  templateUrl: './day1-p2.component.html',
  styleUrl: './day1-p2.component.scss',
})
export class Day1p2Component {
  lineArray: string[] = lines.trim().split('\n');
  answer = 0;

  ngOnInit(): void {
    this.answer = this.sumCalibrationValues(this.testArray);
  }

  testArray = [
    'two1nine',
    'eightwothree',
    'abcone2threexyz',
    'xtwone3four',
    '4nineeightseven2',
    'zoneight234',
    '7pqrstsixteen',
  ];

  sumCalibrationValues(lines: string[]): number {
    const numberMap: { [key: string]: number } = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };

    //iterates through each line, converts words to its corresponding number, catches the first and last digit, then proceeds to combine and sum the values.
    return lines.reduce((sum, line) => {
      for (const word in numberMap) {
        //regex to find the corresponding number for a word i.e. one = 1
        const regex = new RegExp(`\\b${word}\\b`, 'i');


        //Can't seem to get this regex to work and I don't know why :')
        if (regex.test(line)) {
          line = line.replace(regex, numberMap[word].toString());
        }
      }

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
