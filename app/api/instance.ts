import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Authorization: `Bearer `,
        "API-KEY": '58d16126-c44d-4aae-84b6-9bdc00838cf2',
    },
})
