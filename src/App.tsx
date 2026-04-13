import React from "react";
import Todo from './components/Todo';
import Counter from './components/Counter';

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

const App: React.FC = () => {
    return (
        <div style={{ border: "1px solid red" }} >
            <Todo items={myTodoItems} />
            <Counter />
        </div>
    );
};

export default App;
