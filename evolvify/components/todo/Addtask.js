import { MdMic, MdMicOff } from "react-icons/md";
import styles from "../../styles/Addtask.module.css"
import React ,{useState}from 'react'
import axios from 'axios'
function Addtask(props) {
    const [task,Settask] = useState("")
    const addtask = () => {
        if(task.trim() === ''){
            return 
        } else {
            axios.post('http://localhost:8000/api/tasks' , {
                todo : task,
                isComplete : false
            }).then(res => {
                Settask("")
                props.addTask(res.data)
            }).catch(err => console.log(err))
        }
    }
    return (
        <div className = {styles.addTask}>
            {/* <div className={styles.addtask_input[type=text]}> */}
            <div className={styles.addtask_button}>
                
            <input type='text' placeholder = 'Add Task . . .' value = {task} onChange = {event => Settask(event.target.value)}/>
            <button onClick = {() => addtask()}>Add Task</button>
        </div>
        </div>
        // </div>
    )
}

export default Addtask
