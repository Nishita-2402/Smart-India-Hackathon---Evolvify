import { MdMic, MdMicOff } from "react-icons/md";
import styles from "../../styles/Updatetask.module.css"
import React ,{useState} from 'react'
import axios from 'axios'
function Updatetask(props) {
    const [task,setTask] = useState(props.task.todo)
    const updateTask = () => {
        if(task.trim() === '' || props.task.todo === task){
            props.removePopup()
        } else {
            axios.put(`http://localhost:8000/api/tasks/${props.task._id}`,{
                _id : props.task._id,
                todo : task,
                isComplete : props.task.isComplete
            }).then(res => {
                props.removePopup()
                props.updatetask(res.data)
            }).catch(err => console.log(err))
        }
    }
    return (
        <div className = {styles.popup}>
            <div className = {styles.popup-content}>
            <div className = {styles.popup.popup-content_input[type=text]}>
            <div className = {styles.popup.popup-content_button}>
                <input type = 'text'  placeholder = 'Update Task . . .' value = {task} onChange = {event => setTask(event.target.value)}/>
                <button onClick = {() => updateTask()}>Update</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Updatetask
