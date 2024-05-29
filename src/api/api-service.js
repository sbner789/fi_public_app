import http from "./http-common";

const getDefault = () => {
    return http.get("/")
}

const getAccount = () => {
    return http.get("/account")
}

const CommonApiService = {
    getDefault,
    getAccount
}

export default CommonApiService;