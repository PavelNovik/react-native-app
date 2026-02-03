import {DomainTodolist} from "@/app/store/todolist-slice";
import {useAppDispatch} from "@/app/hooks/useAppDispatch";
import {createTaskTC} from "@/app/store/tasks-slice";
import {StyleSheet, Text, View} from "react-native";
import {Tasks} from "@/app/features/todolists/ui/Todolists/TodolistItem/Tasks/Tasks";
import React from "react";
import {CreateItemForm} from "@/app/components/CreateItemForm/CreateItemForm";

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
            <View style={[{marginVertical: 10}]}>
                <Text style={[styles.text]}>{todolist.title}</Text>
            </View>
            <CreateItemForm onCreateItem={createTask} /* disabled={todolist.entityStatus === "loading"} *//>

            <Tasks todolist={todolist}/>

            <View>
                <Text style={[styles.description]}>FilterButtons</Text>
            </View>
            {/*<FilterButtons todolist={todolist}/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fffffe',
        fontSize: 18,
    },
    description: {
        color: '#c7c725',
    }
})