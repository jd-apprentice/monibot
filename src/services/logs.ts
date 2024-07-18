import { Query } from "../../@types"
import { findLogByIdOrHostname, findAlllogs } from "../repositories/logs.repository"
import { transformDate } from "../utils/date";

class LogService {

    async findAll(query: Query) {
        let response;
        try {
            response = await findAlllogs(query)
        } catch (error) {
            console.error(error)
        }

        if (response) {
            for (const log of response) {
                log.date = transformDate(log.date)
            }
        }

        if (query.from && query.to) {
            const parsedFrom = transformDate(query.from)
            const parsedTo = transformDate(query.to)
            response = response?.filter((log) => log.date >= parsedFrom && log.date <= parsedTo)
        }

        if (query.from) {
            const parsedDate = transformDate(query.from)
            response = response?.filter((log) => log.date >= parsedDate)
        }

        if (query.to) {
            const parsedDate = transformDate(query.to)
            response = response?.filter((log) => log.date <= parsedDate)
        }

        return response ?? { message: "Logs not found" }
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