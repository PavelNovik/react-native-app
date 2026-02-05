import {Pressable, Text} from "react-native";
import {useRouter} from "expo-router";

export default function Learning() {
    const router = useRouter();

    return (
        <Pressable onPress={() => router.push("/learning/details")}>
            <Text>Open details</Text>
        </Pressable>
    );
}