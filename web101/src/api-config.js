let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
    backendHost = "http://localhost:8090";
}

export const API_BASE_URL = `${backendHost}`;