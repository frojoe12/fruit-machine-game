import Axios from "axios"

export const axios = Axios.create({
    baseURL: "http://localhost:9000",
    headers: { Auth: "Simple AUTH" },
    timeout: 3000,
    
})

import { axios } from "./axios"