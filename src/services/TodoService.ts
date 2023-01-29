export class TodoService{
    static async fetchTodos(){
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        if(!res.ok)
            throw new Error('Failed to fetch data');
        return res.json()
    }

    static completeTodo(id:number){

    }

    static removeTodo(id:number){

    }

    static addTodo(){

    }
}