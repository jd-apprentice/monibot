import { Query } from "../../@types"
import { findLogByIdOrHostname, findAlllogs } from "../repositories/logs.repository"

class LogService {

    async findAll(query: Query) {
        try {
            const response = await findAlllogs(query)
            return response ?? { message: "Logs not found" }
        } catch (error) {
            console.error(error)
        }
    }

    async findByHostOrId(id: string, query: Query) {
        try {
            const response = await findLogByIdOrHostname(id, query)
            return response ?? { message: "Log not found" }
        } catch (error) {
            console.error(error)
        }
    }

}

const logService = new LogService()
export { logService };