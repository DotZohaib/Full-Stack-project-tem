import ENV  from '../../Enviroment-variable/Env';
import { Client,  ID, Database, Storage, Query } from "appwrite";


export class Config{

    client = new Client(); 
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(ENV.API_ENDPOINT)
        .setProject(ENV.PROJECT_ID);

        this.databases = new Database(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({
        title,
        slug,
        content,
        images,
        status,
        userid
    }){
        try {
            return await this.databases.createDocument(
                ENV.DATABASE_ID,
                ENV.COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    images,
                    status,
                    userid
                }
            )
        } catch (error) {
            throw new Error(error.massage);
        }
    }

    async updatePost(slug,{title,content,images,status}){
        try {
            return await this.databases.updateDocument(
                ENV.DATABASE_ID,
                ENV.COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    images,
                    status,
                }
            )
        } catch (error) {
            throw new Error(error.massage);
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                ENV.DATABASE_ID,
                ENV.COLLECTION_ID,
                slug
            )
        } catch (error) {
            throw new Error(error.massage);
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                ENV.DATABASE_ID,
                ENV.COLLECTION_ID,
                slug
            )
        } catch (error) {
            throw new Error(error.massage);
        } 
    }

    async getPosts(Queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                ENV.DATABASE_ID,
                ENV.COLLECTION_ID,
                Queries,
            )
        } catch (error) {
            throw new Error(error.massage);
        }
    }

    //  file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                ENV.BUCKET_ID,
                ID.unique(),
                file
            )
        } catch (error) {
            throw new Error(error.massage);
        }
    }

    // file delete services

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                ENV.BUCKET_ID,
                fileId
            )
        } catch (error) {
            throw new Error(error.massage);
        }
    }

    //  file preview services

    async getFilePreview(fileId){
        try {
            return await this.bucket.getFilePreview(
                ENV.BUCKET_ID,
                fileId
            )
        } catch (error) {
            throw new Error(error.massage);
        }
    }

}


const Config = new Config();

export default Config;