import AccountAccess from './accountaccess.model.js'
export default class AccessList {
    constructor(data) {
        this.agentCustomerAccessList = [];
        for(var k in data.agentCustomerAccessList) {
            this.agentCustomerAccessList.push(new AccountAccess(data.agentCustomerAccessList[k]));
        }
    }
    remove(data){
        var index = this.agentCustomerAccessList.indexOf(data);
        if (index !== -1) this.agentCustomerAccessList.splice(index, 1);
    }
    add(data){
        this.agentCustomerAccessList.push(new AccountAccess(data));
    }
}