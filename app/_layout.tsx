import {Stack} from "expo-router";
import {Provider} from "react-redux";
import {store} from "@/app/store/store";

export default function RootLayout() {
    return <Provider store={store}>
        <Stack
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right"
            }}
        >
            {/*<Stack.Screen*/}
            {/*    name="index"*/}
            {/*    options={{title: "Todolists"}}*/}
            {/*    */}
            {/*/>*/}
        </Stack>
    </Provider>;
}
