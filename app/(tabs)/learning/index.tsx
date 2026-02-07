import {Pressable, Text, View} from "react-native";
import {useRouter} from "expo-router";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Learning() {
    const router = useRouter();

    return (
        <Pressable onPress={() => router.push("/learning/details")}>
            <View style={[{flexDirection: 'row'}]}>
                <MaterialCommunityIcons name="details" size={24} color="black"/>
                <Text>Open details</Text>
            </View>

        </Pressable>
    );
}