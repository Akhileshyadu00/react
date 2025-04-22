import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
           const userAccount = await this.account(ID.unique, email, password, name);
           if(userAccount) {
            // another method
            return this.login({email,password})
           } else {
            return userAccount
           }
        } catch (error) {
            throw error;
        }
    }

    async login(email, password) {
        try {
             return await this.account.createEmailPasswordSession(email, password);

        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }

}

const authService = new AuthService();

export default AuthService



// const client = new Client()
//     .setProject('<PROJECT_ID>'); // Your project ID

// const account = new Account(client);

// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });