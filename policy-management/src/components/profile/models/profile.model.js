export default class Profile {
    constructor(data) {
        this.memberReference = data.memRef;
        this.firstName = data.name;
        this.familyName = data.surname;
        this.maritalStatus = data.maritalStatusCode;
        this.gender = data.gender;
        this.salary = data.salary;
        this.ppsNumber = data.ppsNumber;
        this.phoneNumber = data.mobile;
        this.dob = data.dob;
        this.retirementDate = data.retirementDate;
        this.dateJoinedScheme = data.dateJoinedScheme;
        this.address = data.address;
    }
}