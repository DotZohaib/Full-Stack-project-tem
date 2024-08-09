const ENV = {
    API_ENDPOINT: String(process.env.NEXT_PUBLIC_API_ENDPOINT),
    PROJECT_ID: String(process.env.NEXT_PUBLIC_PROJECT_ID),
    DATABASE_ID: String(process.env.NEXT_PUBLIC_DATABASE_ID),
    COLLECTION_ID: String(process.env.NEXT_PUBLIC_COLLECTION_ID),
    BUCKET_ID: String(process.env.NEXT_PUBLIC_BUCKET_ID),
}

export default ENV;