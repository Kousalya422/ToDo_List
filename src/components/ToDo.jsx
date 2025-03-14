import React, { useState } from "react";
import TodoItems from "./ToDoItems";
import { useRef } from "react";
import list_icon from "../assets/list_icon.png";

const ToDo=() =>{
    const inputRef = useRef();

    const [todoList, setTodoList]=useState([]);

    const add =()=>{
        const inputText = inputRef.current.value.trim();
        if(inputText===""){
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
        }
        setTodoList((prev)=>[...prev, newTodo]);
        inputRef.current.value="";
    }

    const deleteTodo=(id)=>{
        setTodoList((prev)=>{
            return prev.filter((todo)=>todo.id!==id)
        });
    }

    return(
        <div className="bg-rose-50 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
            <div className="flex gap-2 items-center mt-7">
                <img src={list_icon} className="h-15"/>
                <h1 className="text-3xl font-semibold">To-Do List </h1>
            </div>

            <div className="flex item-center my-7 rounded-full gap-2">
                <input ref={inputRef} className="bg-gray-200 rounded-full flex-1 h-14 pl-6 pr-2" type="text" placeholder="Enter your task"></input>
                <button onClick={add} className="border-none rounded-full bg-pink-600 w-15 h-14 text-white text-lg cursor-pointer hover:bg-pink-700">+</button>
            </div>

            <div>
                {todoList.map((item,index)=>{
                    return <TodoItems key={index} text={item.text} id={item.id} deleteTodo={deleteTodo}/>
                })}
                
            </div>
        </div>
    )
}

export default ToDo