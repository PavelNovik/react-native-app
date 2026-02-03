import {fetchTodolistsTC, selectTodolists} from "@/app/store/todolist-slice";
import {useAppSelector} from "@/app/hooks/useAppSelector";
import {useAppDispatch} from "@/app/hooks/useAppDispatch";
import React, {useEffect} from "react";
import {View} from "react-native";
import {TodolistItem} from "@/app/features/todolists/ui/Todolists/TodolistItem/TodolistItem";

export const Todolists = () => {
    const todolists = useAppSelector(selectTodolists)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTodolistsTC())
    }, [])

    return (
        <>
            {todolists.map((todolist) => (
                <View key={todolist.id}>
                    {/*<View>*/}
                    <TodolistItem todolist={todolist}/>
                    {/*</View>*/}
                </View>
            ))}
        </>
    )
}
