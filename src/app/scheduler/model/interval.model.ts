
export class IntervalModel {
  unity: string;
  frequency: number;

  constructor(unity, frequency) {
    this.unity = unity;
    this.frequency = frequency;
  }

  toString() {
    return JSON.stringify(this) ;
  }
}

export enum Unity {
  MONTH = 'MONTH',
  WEEK = 'WEEK',
  DAY = 'DAY',
  HOUR = 'HOUR',
  MINUTE = 'MINUTE'
}
