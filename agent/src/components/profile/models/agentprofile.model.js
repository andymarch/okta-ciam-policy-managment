export default class AgentProfile {
    constructor(data) {
        this.agentRef = data.agentRef;
        this.companyName = data.companyName;
        this.contactName = data.contactName;
        this.contactPosition = data.contactPosition;
        this.phone = data.phone;
        this.dateJoined = data.dateJoined;
        this.address = data.address;
    }
}