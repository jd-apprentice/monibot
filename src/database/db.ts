import { Kysely } from "kysely";
import { LibsqlDialect } from "@libsql/kysely-libsql";
import { Database } from "../../@types";

export const db = new Kysely<Database>({
    dialect: new LibsqlDialect({
        url: process.env.TURSO_URL,
        authToken: process.env.TURSO_DB_TOKEN,
    }),
})