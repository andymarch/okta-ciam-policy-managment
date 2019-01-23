import Beneficiary from './benficiary.model.js'
export default class Wishes {
    constructor(data) {
        this.beneficiaries = [];
        for(var k in data.beneficiaries) {
            this.beneficiaries.push(new Beneficiary(data.beneficiaries[k]));
        }
    }
}