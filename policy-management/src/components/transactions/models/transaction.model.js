export default class Transaction {
    constructor(data) {
        this.name = data.name;
        this.date = data.date;
        this.paidIn = data.paidIn;
        this.paidOut = data.paidOut;
    }
}