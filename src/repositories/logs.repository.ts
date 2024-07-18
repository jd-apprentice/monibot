import { Query } from "../../@types";
import { db } from "../database/db";

const findAlllogs = async (query: Query) => {
    let response = db
        .selectFrom('logs')
        .selectAll()
        .offset(Number(query.offset) || 0)
        .limit(Number(query.limit) || 10)

    return response.execute()
}

const findLogByIdOrHostname = async (value: string, query: Query) => {
    return db
        .selectFrom('logs')
        .selectAll()
        .offset(Number(query.offset) || 0)
        .limit(Number(query.limit) || 10)
        .where((eb) =>
            eb('id', '=', value).or('hostname', '=', value)
        )
        .execute()
};

export { findLogByIdOrHostname, findAlllogs };