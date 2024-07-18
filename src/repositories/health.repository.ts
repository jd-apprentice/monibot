import { db } from "../database/db";

const checkHealth = async () => db.selectFrom("logs").selectAll().executeTakeFirst();

export { checkHealth };