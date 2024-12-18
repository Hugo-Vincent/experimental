import { Day1 } from './day-1';
import { Day2 } from './day-2';
import { Day3 } from './day-3';
import { Day4 } from './day-4';
import { Day5 } from './day-5';
import { Day7 } from './day-7';

describe('run', () => {
  it('Day 1', () => {
    const result = new Day1().runTwo();
    console.log(result);
  });
  it('Day 2', () => {
    const result = new Day2().run();
    console.log(result);
  });
  it('Day 3', () => {
    const result = new Day3().runTwo();
    console.log(result);
  });
  it('Day 4', () => {
    const result = new Day4().runTwo();
    console.log(result);
    console.log([3, 1, 7, 0].sort());
  });
  it('Day 5', () => {
    const result = new Day5().runTwo();
    console.log(result);
  });
  it('Day 7', () => {
    const result = new Day7().test();
    console.log(result);
  });
});
