let backendHost;

const hostname = window && window.location && window.location.hostname;
// let port = process.env.PORT || 8080;

if (hostname === "localhost"){
    backendHost = "http://localhost:8080"
}
else{
    backendHost = "https://api.kimyooo.com/"
}


export const API_BASE_URL = `${backendHost}`;