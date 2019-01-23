import Beneficiary from './benficiary.model.js'
export default class Wishes {
    constructor(data) {
        this.beneficiaries = [];
        for(var k in data.beneficiaries) {
            this.beneficiaries.push(new Beneficiary(data.beneficiaries[k]));
        }
    }
    remove(data){
        var index = this.beneficiaries.indexOf(data);
        if (index !== -1) this.beneficiaries.splice(index, 1);
    }
    add(data){
        this.beneficiaries.push(new Beneficiary(data));
    }
}