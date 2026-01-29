import axios from "axios"

export const instance = axios.create({
    baseURL: "/samurai/api/1.1",
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_AUTH_TOKEN!}`,
        "API-KEY": process.env.EXPO_PUBLIC_API_KEY!,
        'cookie': '_ym_d=1766777581; _ym_isad=1; _ym_uid=1766777581674141956; .ASPXAUTH=DBA083151389358E8B3F5136E3A14372D52FC389FCDBF2002B475FE422C88C7DBBBD50A7D8B59231243EC15EBA63E4E2C2E6DB060B57C597D0E64AA2DE1B2E76FA7BC63901AF95BB291FC66ADD5578CB00D106E3; ASP.NET_SessionId=vq0ztdc4fxbyivqnuvv0xr3b; Webstorm-2dc43eb3=c16b17e7-2f76-4dcc-b63d-8d5941e05a24 '
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

