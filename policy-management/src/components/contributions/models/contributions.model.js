export default class Contributions {
    constructor(data) {
        if(data == undefined){
            this.additionalVoluntaryContribution = 0;
            this.employeeContribution = 0;
            this.employerContribution = 0;
            //weekyly
            this.weeklyAdditionalVoluntaryContribution = 0;
            this.weeklyEmployeeContribution = 0;
            this.weeklyEmployerContribution = 0;
            //monthly
            this.monthlyAdditionalVoluntaryContribution = 0;
            this.monthlyEmployeeContribution = 0;
            this.monthlyEmployerContribution = 0;
            //yearly
            this.yearlyAdditionalVoluntaryContribution = 0;
            this.yearlyEmployeeContribution = 0;
            this.yearlyEmployerContribution = 0;
        }
        this.additionalVoluntaryContribution = data.additionalVoluntaryContribution;
        this.employeeContribution = data.employeeContribution;
        this.employerContribution = data.employerContribution;
        //weekyly
        this.weeklyAdditionalVoluntaryContribution = data.weeklyAdditionalVoluntaryContribution;
        this.weeklyEmployeeContribution = data.weeklyEmployeeContribution;
        this.weeklyEmployerContribution = data.weeklyEmployerContribution;
        //monthly
        this.monthlyAdditionalVoluntaryContribution = data.monthlyAdditionalVoluntaryContribution;
        this.monthlyEmployeeContribution = data.monthlyEmployeeContribution;
        this.monthlyEmployerContribution = data.monthlyEmployerContribution;
        //yearly
        this.yearlyAdditionalVoluntaryContribution = data.yearlyAdditionalVoluntaryContribution;
        this.yearlyEmployeeContribution = data.yearlyEmployeeContribution;
        this.yearlyEmployerContribution = data.yearlyEmployerContribution;
    }
}