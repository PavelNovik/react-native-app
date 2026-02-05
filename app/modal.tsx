import {Pressable, Text, View} from "react-native";
import {useRouter} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

export default function ModalScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Это modal экран</Text>

                <Pressable onPress={() => router.back()}>
                    <Text>Close</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}