import {FC} from 'react';
import {ITodo} from "@/models/ITodo";
import {Todo} from "@/app/components/Todo";

interface TodoListProps{
    todos: ITodo[]
}

export const TodoList: FC<TodoListProps> = ({todos}) => {
    return (
        <div>
            {todos.map(todo => <Todo todo={todo} key={todo.id}/>)}
        </div>
    );
}
