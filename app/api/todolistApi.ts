import {Todolist} from "@/app/types/todolist-models";
import {BaseResponse} from "@/app/types/models";
import {instance} from "@/app/api/instance";

export const todolistsApi = {
    getTodolists() {
        return instance.get<Todolist[]>("/todo-lists")
    },
    changeTodolistTitle(payload: { id: string; title: string }) {
        const {id, title} = payload
        return instance.put<BaseResponse>(`/todo-lists/${id}`, {title})
    },
    createTodolist(title: string) {
        return instance.post<BaseResponse<{ item: Todolist }>>("/todo-lists", {title})
    },
    deleteTodolist(id: string) {
        return instance.delete<BaseResponse>(`/todo-lists/${id}`)
    },
}
