import http from "./http-common";

const getDefault = () => {
    return http.get("/")
}

const getAccount = () => {
    return http.get("/account")
}

const withdraw = (amount) => {
    return http.post("/account/withdraw",{
        amount: amount
    })
}

const resetAccount = () => {
    return http.post("/account/reset")
}

const CommonApiService = {
    getDefault,
    getAccount,
    withdraw,
    resetAccount
}

export default CommonApiService;