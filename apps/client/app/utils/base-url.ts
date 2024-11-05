import { PORT } from "@repo/constants";

export function getBaseUrl() {
    if (typeof window !== 'undefined') {
        return window.location.origin;
    }

    if (process.env['VERCEL_URL']) {
        return `https://${process.env['VERCEL_URL']}`;
    }

    return `http://localhost:${PORT}}`;
}