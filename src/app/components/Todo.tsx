'use client'
import {FC} from 'react';
import {ITodo} from "@/models/ITodo";
import {TodoService} from "@/services/TodoService";

interface TodoProps{
    todo: ITodo
}

export const Todo: FC<TodoProps> = ({todo}) => {
    const {id, completed, title} = todo
    return (
        <div className={"flex p-3 justify-between"}>
            <div className={"flex"}>
                <input className={"cursor-pointer"} type={"checkbox"} checked={completed}
                       onChange={() => TodoService.completeTodo(id)}/>
                <div className={`ml-2 ${completed && "line-through"}`}>{title}</div>
            </div>
            <button className={"cursor-pointer hover:opacity-80"} onClick={() => TodoService.removeTodo(id)}>x</button>
        </div>
    );
}
