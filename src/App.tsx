import React, { useState, useEffect } from "react";
import Todo from './components/Todo';
import Counter from './components/Counter';
import { stat } from "fs";


const myTodoItems = [
    {
        id: 1,
        title: "Hello all",
    },
    {
        id: 2,
        title: "I need to watch videos",
    },
];


interface TodoItem {
    completed: boolean
    id: number
    title: string
    userId: number
}


const App: React.FC = () => {
    const [state, setSate] = useState<boolean>(true)
    const [todos, setTodos] = useState<TodoItem[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response).then(e => e.json()).then(e => setTodos(e as TodoItem[])); 
    }, [])


    return (
        <div style={{ border: "1px solid red" }} >
            <Todo items={myTodoItems} />
            <button onClick={e => setSate(!state)} >Toogle</button>
            {state ? <Counter /> : ""}

            <div>
                {
                    todos.map(todo => <li>{todo.title}</li>)
                }
            </div>
        </div>
    );
};

export default App;
