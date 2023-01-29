import {ITodo} from "@/models/ITodo";
import {TodoService} from "@/services/TodoService";
import {TodoList} from "@/app/components/TodoList";

export default async function Home() {
    const data = TodoService.fetchTodos()
    const [todos] = await Promise.all([data]) as [ITodo[]]
    return (
        <div className={"flex flex-col items-center justify-center min-h-main"}>
            <TodoList todos={todos}/>
        </div>
    )

}
