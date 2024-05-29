import axios from "axios";

export default axios.create({
    baseURL: "http://i.realbuy.io",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjIsImlhdCI6MTcxNjk0ODE4NSwiZXhwIjoxNzE3MDM0NTg1fQ.n3KNrw8bRhcqoL5yLrHceFzoTSghmRxu2r4sQJdjjjY"
    },
})