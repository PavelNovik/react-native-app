import {StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";

export default function Index() {
    const [value, setValue] = useState<string>('');


    return (
        <View
            style={styles.container}
        >
            <View>
                <Text>Something in the way!</Text>
                <TextInput style={[globalStyles.border, styles.input, {fontSize: 18,}]}
                           placeholder={'Enter your name...'}
                           placeholderTextColor={'black'}
                           value={value}
                           onChangeText={setValue}/>
            </View>
            <Text>What the fuck!</Text>
            <Text>The man who sold the world</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8ff6a',
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        backgroundColor: 'white',
        width: 200,
        padding: 10,
    }
})

const globalStyles = StyleSheet.create({
    border: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ecad39',
    }
})