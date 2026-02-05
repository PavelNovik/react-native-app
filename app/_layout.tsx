import {Stack} from "expo-router";
import {Provider} from "react-redux";
import {store} from "@/app/store/store";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function RootLayout() {
    return <Provider store={store}>
        <SafeAreaProvider>
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
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen
                    name="modal"
                    options={{
                        presentation: "modal",
                        title: "Modal",
                    }}
                />
            </Stack>
        </SafeAreaProvider>
    </Provider>;
}
