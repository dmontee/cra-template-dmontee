import React, { useState } from "react";

import useCount from "../../hooks/useCount";
import useTheme from "../../hooks/useTheme";
import useTodoList from "../../hooks/useTodoList";
import logo from "../../logo.svg";

export default function Home() {
    const [count, { increment }] = useCount();
    const [, { toggle }] = useTheme();
    const [todoList, todoListApi] = useTodoList();
    const [value, setValue] = useState("");

    function addTodo() {
        if (value === "") {
            return;
        }

        setValue("");
        todoListApi.add(value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.{" "}
                    <button type="button" className="btn" onClick={increment}>
                        Add:{" "}
                    </button>
                    {count}
                </p>
                <div>
                    <button type="button" onClick={toggle}>
                        Toggle Theme
                    </button>
                </div>
                <div className="mt-10">
                    <h2 className="text-purple-400">TODO List</h2>
                    <div className="flex items-center my-5">
                        <button
                            type="button"
                            className="todo-btn"
                            onClick={() => todoListApi.showAll()}
                        >
                            All
                        </button>
                        <button
                            type="button"
                            className="todo-btn text-green-500"
                            onClick={() => todoListApi.showComplete()}
                        >
                            Completed
                        </button>
                        <button
                            type="button"
                            className="todo-btn text-red-500"
                            onClick={() => todoListApi.showIncomplete()}
                        >
                            Incomplete
                        </button>
                    </div>
                    <div className="flex ml-2">
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="text-black border border-black mr-5"
                        />
                        <button type="button" onClick={addTodo}>
                            Add
                        </button>
                    </div>
                    {todoList.map((x) => (
                        <p key={x.id} className="flex ml-2">
                            {!x.completed && (
                                <button
                                    type="button"
                                    className="mr-5 text-green-500"
                                    title="Complete"
                                    onClick={() => todoListApi.complete(x.id)}
                                >
                                    {"\u2713"}
                                </button>
                            )}
                            <button
                                type="button"
                                className="mr-5 text-red-500"
                                title="Remove"
                                onClick={() => todoListApi.remove(x.id)}
                            >
                                -
                            </button>
                            {x.text}
                        </p>
                    ))}
                </div>
            </header>
        </div>
    );
}
