import {changeTodolistTitleTC, deleteTodolistTC, DomainTodolist} from "@/app/store/todolist-slice";
import {useAppDispatch} from "@/app/hooks/useAppDispatch";
import {TouchableOpacity, View} from "react-native";
import {EditableSpan} from "@/app/components/EditableSpan/EditableSpan";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

type Props = {
    todolist: DomainTodolist
}

export const TodolistTitle = ({todolist}: Props) => {
    const {id, title, entityStatus} = todolist

    const dispatch = useAppDispatch()

    const deleteTodolist = () => {
        dispatch(deleteTodolistTC(id))
    }

    const changeTodolistTitle = (title: string) => {
        dispatch(changeTodolistTitleTC({id, title}))
    }

    return (
        <View style={[{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginBottom: 15}]}>
            <View>
                <EditableSpan value={title} onChange={changeTodolistTitle}/>
            </View>
            <TouchableOpacity>
                <Ionicons name="trash-sharp" size={24} color="white" onPress={deleteTodolist}/>
            </TouchableOpacity>
            {/*<IconButton onClick={deleteTodolist} disabled={entityStatus === "loading"}>*/}
            {/*    <DeleteIcon/>*/}
            {/*</IconButton>*/}
        </View>
    )
}
