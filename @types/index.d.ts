import { Generated } from "kysely";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            PORT: string;
            TURSO_URL: string;
            TURSO_DB_TOKEN: string;
        }
    }
}

export interface Database {
    logs: LogsTable;
}

export interface LogsTable {
    id: Generated<string>;
    date: string | Date;
    hostname: string;
    log_message: string;
}

export interface Query {
    offset?: number;
    limit?: number;
    from?: string;
    to?: string;
}

export { };