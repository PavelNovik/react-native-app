import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {Todolists} from "@/app/features/todolists/ui/Todolists/Todolists";

export default function Index() {


    return (
        <ScrollView style={[styles.container]}
                    contentContainerStyle={[styles.content]}>
            {/*<TodoOld/>*/}
            <Todolists/>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0e17',

    },
    content: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: {color: '#fffffe'},
    input: {
        backgroundColor: '#f3bf98',
        width: 200,
        padding: 10,
    },
    action: {
        margin: 5
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 3
    },
    checkbox: {
        margin: 8,
    },
})

const globalStyles = StyleSheet.create({
    border: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ecad39',
    }
})