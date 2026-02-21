/** @type {import("drizzle-kit").Configs} */
export default{
    schema:"./configs/schema.jsx",
    dialect:'postgresql',
    dbCredentials:
    {
        url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,
    }
};