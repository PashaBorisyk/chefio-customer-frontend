export class MenuDate {
  dates: Date[] = null;
  activeDates: Date[] = null;
  activeDate: Date = null;

  constructor(dates: Date[], activeDates: Date[], active: Date) {
    this.dates = dates;
    this.activeDates = activeDates;
    this.activeDate = active;
  }
}
