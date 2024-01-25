// import { MdMic, MdMicOff } from "react-icons/md";
// import styles from "../../styles/Todolist.css"
// import React from 'react'
// import CheckIcon from '@material-ui/icons/Check'
// import EditIcon from '@material-ui/icons/Edit'
// import CloseIcon from '@material-ui/icons/Close'
// import axios from 'axios'

import React from "react";
// import { MdSearch } from "react-icons/md";
import styles from "../../styles/Todolist.module.css"

function Todolist(props) {
    const todolist = props.todolist.map((task,index) => {
        const taskComplete = task => {
            axios.put(`http://localhost:8000/api/tasks/${task._id}` , {
                _id : task._id,
                todo: task.todo,
                isComplete : !task.isComplete
            }).then(res => props.taskComplete(res.data)).catch(err => console.log(err))
        }
        const removeTask = id => {
            axios.delete(`http://localhost:8000/api/tasks/${id}`).then(res => props.removeTask(res.data)).catch(err => console.log(err))
        } 
        return <li key = {index}>
            <div style = {{display : 'flex'}}>
               <CheckIcon className = {task.isComplete ? 'isComplete' : 'checkicon'}/>
               <p className = {task.isComplete ? 'taskcomplete' : ''} onClick = {() => {
                   taskComplete(task)
               }}>{task.todo}</p>
            </div>
            <div>
                <EditIcon className = 'edit' onClick = {() => {
                    props.tasktoUpdate(task)
                    props.showPopup()
                }}/>
                <CloseIcon className = 'close' onClick = {() => {
                    removeTask(task._id)
                }}/>
            </div>
        </li>
    })
    return (
        <div className = {styles.tasklist}>
            <div className={styles.tasklist_ul}>
            <div className={styles.tasklist_ul_li}>
            <div className={styles.tasklist_ul_li_.isComplete}>
            {/* <div className={styles.tasklist_ul_li_.checkicon}> */}
            <div className={styles.tasklist_ul_li_p.taskComplete}>
                <div className={styles.tasklist_ul_li_.edit}>
                    <div className={styles.tasklist_ul_li_.close}></div>
            <ul>
                {todolist}
            </ul>
        {/* </div> */}
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Todolist
