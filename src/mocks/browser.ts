import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// Setup a worker for the dev environment (browser)
export const worker = setupWorker(...handlers);