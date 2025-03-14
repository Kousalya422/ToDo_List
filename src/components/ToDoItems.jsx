import React from "react";
import delete_icon from "../assets/delete.png";
import tick from "../assets/tick.png"


const TodoItems =({text, id, deleteTodo}) =>{
    return(
        <div className="flex item-center my-3 gap-2">
            <div className="flex flex-1 items-center">
                <img src={tick} className="w-7"/>
                <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
            </div>
            <img onClick={()=>{deleteTodo(id)}} src={delete_icon} className="w-5 h-6 cursor-pointer"/>
        </div>
    )
}

export default TodoItems;