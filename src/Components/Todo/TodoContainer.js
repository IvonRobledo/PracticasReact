import {useState} from 'react';
import "../../Styles/TodoList.css";
import { FaListUl, FaPlus } from "react-icons/fa";
import TodoItem from './TodoItem';

const TodoContainer = () => {
    const [tasks, setTasks] = useState([]);
    const [showNew, setShowNew] = useState(false);

    const newItem = (e) => {
        if(e.target.value !== ''){
            setTasks([...tasks, {id: Date.now(), text: e.target.value, inChecked: false, isEditting: false}]);
            setShowNew(false);
        }
    }

    const onDelete = (_id) => {
        setTasks(tasks.filter(task => {
            if (task.id !== _id) {
                return task;
            }
        }));
    }

    const toggleChecked = (_id) => {
        setTasks(tasks.map(task => {
            if (task.id === _id) {
                return {
                ...task,
                inChecked: !task.inChecked
                };
            }
            return task;
        }));
    }

    const editItem = (_id) => {
        setTasks(tasks.map(task => {
            if (task.id === _id) {
                return {
                    ...task,
                    isEditting: true
                };
            }
            return task;
        }));
    }

    const onEdit = (e, _id) => {
        setTasks(tasks.map(task => {
            if (task.id === _id) {
                return {
                    ...task,
                    text: e.target.value,
                    isEditting: false
                };
            }
            return task;
        }));
    }
    
    return(
        <div className="container_practicas container_dark_purple">
            <div className="fixed_width">
                <h1 className="main_text"><FaListUl className="main_icon"/> TODO List</h1>
                <hr/>
                <button className="button_primary" onClick={(e)=>setShowNew(true)}> <FaPlus/> Click here to add a new item</button>
                {
                    showNew ?
                    <input type="text" onBlur={newItem}/>
                    :
                    ''
                }
                <div className="items">            
                {
                    tasks.map((task) => {
                        const {id, text, inChecked, isEditting} = task;
                        return <TodoItem key={id} id={id} text={text} onDelete={onDelete} inChecked={inChecked} toggleChecked={toggleChecked} editItem={editItem} onEdit={onEdit} isEditting={isEditting} />
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default TodoContainer;