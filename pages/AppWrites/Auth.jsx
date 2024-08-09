import ENV  from '../../Enviroment-variable/Env';
import { Client, Account, ID } from "appwrite";


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(ENV.API_ENDPOINT)
        .setProject(ENV.PROJECT_ID);

        this.account = new Account(this.client);
    }

    async signup(email, password, name){
        try {
            const response = await this.account.create(ID.unique(), email, password, name);
            if (response) {
                return response;
                
            } else {
                throw new Error("Something went wrong");  
            }
            
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async login(email, password){
        try {
            const response = await this.account.createEmailSession(email, password);
            if (response) {
                return response;
                
            } else {
                throw new Error("Something went wrong");  
            }
            
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async logout(){
        try {
            const response = await this.account.deleteSession("current");
            if (response) {
                return response;
                
            } else {
                throw new Error("Something went wrong");  
            }
            
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getCurrentUser(){
        try {
            const response = await this.account.get();
            if (response) {
                return response;
                
            } else {
                throw new Error("Something went wrong");  
            }
            
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

const AuthService = new AuthService();

export default AuthService