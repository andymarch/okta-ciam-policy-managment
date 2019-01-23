export default class Transaction {
    constructor(data) {
        this.name = data.transactionName;
        this.date = data.transactionDate;
        this.paidIn = data.paidIn;
        this.paidOut = data.paidOut;
    }
}