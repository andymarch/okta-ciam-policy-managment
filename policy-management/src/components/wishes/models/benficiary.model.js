export default class Beneficiary {
    constructor(data) {
        this.beneficiaryFullName = data.beneficiaryFullName;
        this.relationshipToBeneficiary = data.relationshipToBeneficiary;
        this.percentageAllocated = data.percentageAllocated;
    }
}