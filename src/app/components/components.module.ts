import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Day1p2Component } from './day1-p2/day1-p2.component';
import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';
import { Day3Component } from './day3/day3.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Day1Component,
    Day1p2Component,
    Day2Component,
    Day3Component,
    Day4Component,
    Day5Component,
  ],
  exports: [
    Day1Component,
    Day1p2Component,
    Day2Component,
    Day3Component,
    Day4Component,
    Day5Component,
  ],
})
export class ComponentsModule {}
