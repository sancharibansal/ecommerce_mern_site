import axios from "axios";

const BASE_URL = "https://ecommerce-mern-site4.onrender.com/api/";

// Retrieve data from local storage and parse it step by step, with null checks
const persistRoot = localStorage.getItem("persist:root");
const currentUser = persistRoot ? JSON.parse(JSON.parse(persistRoot).user).currentUser : null;
const TOKEN = currentUser ? currentUser.accessToken : null;

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});


// import axios from "axios";

// const BASE_URL = "http://localhost:5173/api/";

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// export const publicRequest = axios.create({
//     baseURL: BASE_URL
// });

// export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     headers: {token: `Bearer ${TOKEN}`},
// });

//problem may arise here in this file during frontend execution because of line 5
//check requestmethods file in admin folder to solve issue