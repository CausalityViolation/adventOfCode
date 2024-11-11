import { Component, OnInit } from '@angular/core';
import { games } from '../games';

@Component({
  selector: 'app-day2',
  standalone: true,
  imports: [],
  templateUrl: './day2.component.html',
  styleUrl: './day2.component.scss',
})
export class Day2Component implements OnInit {
  gameArray: string[] = games.trim().split('\n');

  totalValidGames = 0;

  // testArray: string[] = [
  //   'Game 1: 13 red, 18 green; 5 green, 3 red, 5 blue; 7 green, 9 red, 6 blue; 3 blue, 3 green',
  //   'Game 2: 2 green, 1 blue, 5 red; 9 green, 4 red, 2 blue; 4 green, 3 blue; 2 blue, 3 red; 5 red, 3 blue, 9 green; 9 green, 5 red, 200 blue',
  //   'Game 3: 12 green, 3 red, 3 blue; 2 blue, 5 green, 2 red; 2 red, 3 blue, 1 green; 2 red, 8 green, 7 blue',
  // ];

  ngOnInit(): void {
    this.gameArray.forEach((line, index) => {
      const gameRounds = line
        .split(': ')[1]
        .split('; ')
        .map((round) => {
          const segments = round.split(', ');

          const answer = {
            red: 0,
            green: 0,
            blue: 0,
          };

          segments.forEach((segment) => {
            // Split segment into count and color
            const [amount, color] = segment.split(' ');
            //parse into number
            const parsedAmount = parseInt(amount);

            switch (color) {
              case 'red':
                answer.red = parsedAmount;
                break;
              case 'green':
                answer.green = parsedAmount;
                break;
              case 'blue':
                answer.blue = parsedAmount;
                break;
            }
          });

          //map return
          return answer;
        });

      //calculates the max value of each color and checks against max values to see if it's valid or not
      const redMax = Math.max(...gameRounds.map((round) => round.red));
      const greenMax = Math.max(...gameRounds.map((round) => round.green));
      const blueMax = Math.max(...gameRounds.map((round) => round.blue));

      const isValidGame = redMax <= 12 && greenMax <= 13 && blueMax <= 14;
      if (isValidGame) {
        this.totalValidGames += index + 1;
      }
    });
  }
}
