import {Platform} from "react-native"

export const BASE_URL =
    Platform.OS === "web"
        ? "/samurai/api/1.1"
        : process.env.EXPO_PUBLIC_BASE_URL!