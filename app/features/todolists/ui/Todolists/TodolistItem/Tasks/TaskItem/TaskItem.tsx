import {DomainTask} from "@/app/types/task-models";
import {DomainTodolist} from "@/app/store/todolist-slice";
import {useAppDispatch} from "@/app/hooks/useAppDispatch";
import {deleteTaskTC, updateTaskTC} from "@/app/store/tasks-slice";
import {ChangeEvent} from "react";
import {TaskStatus} from "@/app/enums/enums";
import {Text, View} from "react-native";

type Props = {
    task: DomainTask
    todolist: DomainTodolist
}

export const TaskItem = ({task, todolist}: Props) => {
    const dispatch = useAppDispatch()

    const deleteTask = () => {
        dispatch(deleteTaskTC({todolistId: todolist.id, taskId: task.id}))
    }

    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
        dispatch(
            updateTaskTC({
                todolistId: todolist.id,
                taskId: task.id,
                domainModel: {status: newStatusValue ? TaskStatus.Completed : TaskStatus.New},
            }),
        )
    }

    const changeTaskTitle = (title: string) => {
        dispatch(updateTaskTC({todolistId: todolist.id, taskId: task.id, domainModel: {title}}))
    }

    const isTaskCompleted = task.status === TaskStatus.Completed
    const disabled = todolist.entityStatus === "loading"

    return (
        <View>
            <View>
                <Text>Checkbox</Text>
                {/*<Checkbox checked={isTaskCompleted} onChange={changeTaskStatus} disabled={disabled}/>*/}
                {/*<EditableSpan value={task.title} onChange={changeTaskTitle} disabled={disabled}/>*/}
                <Text>{task.title}</Text>
            </View>
            <Text>Delete</Text>
            {/*<IconButton onClick={deleteTask} disabled={disabled}>*/}
            {/*    <DeleteIcon/>*/}
            {/*</IconButton>*/}
        </View>
    )
}