import {DomainTodolist} from "@/app/store/todolist-slice";
import {useAppDispatch} from "@/app/hooks/useAppDispatch";
import {createTaskTC} from "@/app/store/tasks-slice";
import {Text, View} from "react-native";
import {Tasks} from "@/app/features/todolists/ui/Todolists/TodolistItem/Tasks/Tasks";

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
                <Text>Todo title</Text>
            </View>
            {/*<CreateItemForm onCreateItem={createTask} disabled={todolist.entityStatus === "loading"}/>*/}
            <View>
                <Text>CreateItemForm</Text>
            </View>
            <Tasks todolist={todolist}/>

            <View>
                <Text>FilterButtons</Text>
            </View>
            {/*<FilterButtons todolist={todolist}/>*/}
        </View>
    )
}
