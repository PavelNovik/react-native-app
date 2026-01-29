import axios from "axios"

export const instance = axios.create({
    baseURL: "/samurai/api/1.1",
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_AUTH_TOKEN!}`,
        "API-KEY": process.env.EXPO_PUBLIC_API_KEY!,
        
    },
})
// import {BASE_URL} from "./baseURL"
//
// export const instance = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         "API-KEY": process.env.EXPO_PUBLIC_API_KEY!,
//         Authorization: `Bearer ${process.env.EXPO_PUBLIC_AUTH_TOKEN}`,
//     },
// })

