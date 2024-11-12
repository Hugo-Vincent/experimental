import { Decimal } from 'decimal.js';

export class DownTimeIncidents {
  readonly incidents: number[];

  constructor() {
    this.incidents = [];
  }

  addIncident(minutes: number, hours = 0, days = 0): void {
    const downTime = +new Decimal(minutes).div(60)
      .add(hours)
      .add(new Decimal(days).mul(24));
    this.incidents.push(downTime);
  }

  calculateMeanDownTime() {
    const sumDownTime = this.incidents.reduce((sum, x) => sum + x, 0);
    return +new Decimal(sumDownTime).div(this.incidents.length);
  }
}
