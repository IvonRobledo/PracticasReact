import {useState} from 'react';
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ id, text, onDelete, inChecked, toggleChecked, onEdit, editItem, isEditting }) =>{
    const [editedText, setEditedText] = useState(text);
    return (
        <div className="todo_item">
            <button className="btn_delete"onClick={()=>onDelete(id)}><FaTrash/></button>
            <input className="check" type="checkbox" onClick={()=>toggleChecked(id)}/>
            {
                isEditting ?
                <input type="text" onBlur={(e)=>onEdit(e,id)} value={editedText} onChange={(e)=>setEditedText(e.target.value)}/>
                :
                <label className={`item_text ${inChecked ? 'checked_text' : ''}`} onClick={()=>editItem(id)}>{text}</label>
            }
            
        </div>
    )
}

export default TodoItem;