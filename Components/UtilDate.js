export default class UtilDate {
    constructor(date) {
        this.date = new Date(date);
    }
    WeekDay(){
        const WeekDays = ['LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB', 'DOM'];
        return WeekDays[this.date.getDay()];
    }
    DayAndMonth(){
        const Months = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
        return this.date.getDate() + ' ' + Months[this.date.getMonth()];
    }
}
