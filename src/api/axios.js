import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5000"
    // baseURL: import.meta.env.VITE_FIRST_ENDPOINT

})