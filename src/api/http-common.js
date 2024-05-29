import axios from "axios";

export default axios.create({
    baseURL: "http://i.realbuy.io",
    headers: {
        "Content-Type" : "application/json"
    }
})