import { checkHealth } from "../repositories/health.repository";

class HealthService {

    async check() {
        const response = await checkHealth();
        return {
            status: response ? "ok" : "error",
            message: response ? "Database is up and running" : "Database is down",
            uptime: process.uptime(),
            date: new Date().toISOString()
        }
    }

}

const healthService = new HealthService();
export { healthService };