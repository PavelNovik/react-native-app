import {DomainTodolist} from "@/app/store/todolist-slice";
import {useAppDispatch} from "@/app/hooks/useAppDispatch";
import {createTaskTC} from "@/app/store/tasks-slice";
import {StyleSheet, Text, View} from "react-native";
import {Tasks} from "@/app/features/todolists/ui/Todolists/TodolistItem/Tasks/Tasks";
import React from "react";

type Props = {
    todolist: DomainTodolist
}

export const TodolistItem = ({todolist}: Props) => {
    const dispatch = useAppDispatch()

    const createTask = (title: string) => {
        dispatch(createTaskTC({todolistId: todolist.id, title}))
    }

    return (
        <View>
            {/*<TodolistTitle todolist={todolist}/>*/}
            <View>
                <Text style={[styles.text]}>{todolist.title}</Text>
            </View>
            {/*<CreateItemForm onCreateItem={createTask} disabled={todolist.entityStatus === "loading"}/>*/}
            <View>
                <Text style={[styles.text]}>CreateItemForm</Text>
            </View>
            <Tasks todolist={todolist}/>

            <View>
                <Text style={[styles.text]}>FilterButtons</Text>
            </View>
            {/*<FilterButtons todolist={todolist}/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {color: '#fffffe'},
})