export default class Beneficiary {
    constructor(data) {
        if(data != undefined){
            this.beneficiaryFullName = data.beneficiaryFullName;
            this.relationshipToBeneficiary = data.relationshipToBeneficiary;
            this.percentageAllocated = data.percentageAllocated;
        }
    }
}