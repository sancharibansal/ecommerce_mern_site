import axios from "axios";

const BASE_URL = "http://localhost:5173/api/";

// Retrieve data from local storage and parse it step by step, with null checks
const persistRoot = localStorage.getItem("persist:root");
const currentUser = persistRoot ? JSON.parse(JSON.parse(persistRoot).user).currentUser : null;
const TOKEN = currentUser ? currentUser.accessToken : null;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});

