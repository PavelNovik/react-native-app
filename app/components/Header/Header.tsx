import {StyleSheet, Text, View} from "react-native";

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Todlists</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#260205',
        width: '100%',
        paddingVertical: 20,
        marginTop: 50,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }

})