import axios from "axios"
import {BASE_URL} from "@/app/api/baseURL";

export const instance = axios.create({
    baseURL: BASE_URL,
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

