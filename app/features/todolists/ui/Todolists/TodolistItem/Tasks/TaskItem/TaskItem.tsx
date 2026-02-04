import {DomainTask} from "@/app/types/task-models";
import {DomainTodolist} from "@/app/store/todolist-slice";
import {useAppDispatch} from "@/app/hooks/useAppDispatch";
import {deleteTaskTC, updateTaskTC} from "@/app/store/tasks-slice";
import React from "react";
import {TaskStatus} from "@/app/enums/enums";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Checkbox} from "expo-checkbox";
import {Ionicons} from "@expo/vector-icons";
import {EditableSpan} from "@/app/components/EditableSpan/EditableSpan";

type Props = {
    task: DomainTask
    todolist: DomainTodolist
}

export const TaskItem = ({task, todolist}: Props) => {
    const dispatch = useAppDispatch()

    const deleteTask = () => {
        dispatch(deleteTaskTC({todolistId: todolist.id, taskId: task.id}))
    }

    const changeTaskStatus = (e: boolean) => {
        // const newStatusValue = e
        dispatch(
            updateTaskTC({
                todolistId: todolist.id,
                taskId: task.id,
                domainModel: {status: e ? TaskStatus.Completed : TaskStatus.New},
            }),
        )
    }

    const changeTaskTitle = (title: string) => {
        dispatch(updateTaskTC({todolistId: todolist.id, taskId: task.id, domainModel: {title}}))
    }

    const isTaskCompleted = task.status === TaskStatus.Completed
    const disabled = todolist.entityStatus === "loading"

    return (
        <View style={[styles.section]}>
            <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                <Checkbox color={'#a106fa'} id={task.id} style={[styles.checkbox]}
                          value={isTaskCompleted} disabled={disabled} onValueChange={(e) => changeTaskStatus(e)}/>
                <EditableSpan isTaskCompleted={isTaskCompleted} value={task.title} onChange={changeTaskTitle}
                              disabled={disabled}/>
            </View>
            {/*<Text style={[isTaskCompleted ? {...styles.text, opacity: 0.5} : styles.text]}>{task.title}</Text>*/}
            <TouchableOpacity>
                <Ionicons name="trash-sharp" size={24} color="white" onPress={deleteTask}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {color: '#fffffe'},
    checkbox: {
        margin: 8,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 3
    },
})