# Okta CIAM Policy Management Demo 

This demo uses an Apigee endpoint for API AM with tokens issued from a correctly configured Okta instance.

# The Apps
There are two applications within this project
- Policy-management: allows for customer login to access and manage their own policy
- Agent: this allows for an rep login to access their profile and view linked accounts.

# Tenant Setup

The following tenant configuration is required for this demo to work as intended.

* Two user groups, agents and customers
* Authz server with both the following applications enabled
    * One application configured for customers 
        * Self service registration should be enabled to add users to a group with permission to this application.
    * One application configured for agents
        * Salesforce should be configured and assigned to the agents group.(./agent/component/dashboard/dashboard.component.html contains an app embed link you should update).

# Running the demo

To run the entire demo you will need two terminal windows, all commands assume you are in the root of the project (where this file is located).

### Run customer portal

* cd policy-management
* check the settings in .env, .env.development reflect your tenant
* run `npm run serve`
* navigate to http://localhost:8080

### Run representative portal

* cd agent
* check the settings in .env, .env.development reflect your tenant
* run `npm run serve`
* navigate to http://localhost:8181