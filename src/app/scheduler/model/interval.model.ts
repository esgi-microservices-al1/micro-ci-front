
export class IntervalModel {
  unity: Unity;
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
  Month = 'Month',
  Week = 'Week',
  Day = 'Day',
  Hour = 'Hour',
  Minute = 'Minute'
}
