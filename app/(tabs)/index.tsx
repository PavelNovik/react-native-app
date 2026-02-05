import React from "react";
import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {Todolists} from "@/app/features/todolists/ui/Todolists/Todolists";
import {useAppDispatch} from "@/app/hooks/useAppDispatch";
import {createTodolistTC} from "@/app/store/todolist-slice";
import {CreateItemForm} from "@/app/components/CreateItemForm/CreateItemForm";
import {useRouter} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";


export default function IndexTodo() {
    const router = useRouter();
    const dispatch = useAppDispatch()

    const createTodolist = (title: string) => {
        dispatch(createTodolistTC(title))
    }

    return (
        <ScrollView style={[styles.container]}
                    contentContainerStyle={[styles.content]}>
            <SafeAreaView style={{flex: 1}}>
                {/*<Header/>*/}
                {/*<TodoOld/>*/}
                <View>
                    <Pressable onPress={() => router.push("/modal")}>
                        <Text style={[{color: 'white'}]}>Open modal</Text>
                    </Pressable>
                </View>
                <CreateItemForm onCreateItem={createTodolist}/>
                <Todolists/>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0e17',
        paddingTop: 20

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