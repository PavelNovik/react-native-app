import {DomainTodolist} from "@/app/store/todolist-slice";
import {useAppSelector} from "@/app/hooks/useAppSelector";
import {fetchTasksTC, selectTasks} from "@/app/store/tasks-slice";
import {useAppDispatch} from "@/app/hooks/useAppDispatch";
import {useEffect} from "react";
import {TaskStatus} from "@/app/enums/enums";
import {View} from "react-native";
import {TaskItem} from "@/app/features/todolists/ui/Todolists/TodolistItem/Tasks/TaskItem/TaskItem";

type Props = {
    todolist: DomainTodolist
}

export const Tasks = ({todolist}: Props) => {
    const {id, filter} = todolist

    const tasks = useAppSelector(selectTasks)

    const dispatch = useAppDispatch()

    const todolistTasks = tasks[id]
    let filteredTasks = todolistTasks
    if (filter === "active") {
        filteredTasks = todolistTasks.filter((task) => task.status === TaskStatus.New)
    }
    if (filter === "completed") {
        filteredTasks = todolistTasks.filter((task) => task.status === TaskStatus.Completed)
    }

    useEffect(() => {
        dispatch(fetchTasksTC(id))
    }, [])

    return (
        <>
            {filteredTasks?.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <View>{filteredTasks?.map((task) => <TaskItem key={task.id} task={task} todolist={todolist}/>)}</View>
            )}
        </>
    )
}