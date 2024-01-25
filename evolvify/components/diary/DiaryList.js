import React from "react";
import AddNote from "./AddNote1";
import Note from "./Note";
import styles from "../../styles/dailyDiary.module.css"
function DiaryList({ notes, handleAddNote, handleDeleteNote}) {
  return (
    <div className={styles.diary__list}>
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

// function DiaryList(props) {
//   const list = props.list.map((note,index) => {
//       const taskComplete = note => {
//           axios.put(`http://localhost:8000/api/notes/${note._id}` , {
//               _id : note._id,
//               note: note.todo,
//               required : !note.required
//           }).then(res => props.taskComplete(res.data)).catch(err => console.log(err))
//       }
//       const removeTask = id => {
//           axios.delete(`http://localhost:8000/api/notes/${id}`).then(res => props.removeTask(res.data)).catch(err => console.log(err))
//       } 
//       return <li key = {index}>
//           <div style = {{display : 'flex'}}>
          //    {/* <CheckIcon className = {task.isComplete ? 'isComplete' : 'checkicon'}/>
          //    <p className = {task.isComplete ? 'taskcomplete' : ''} onClick = {() => {
          //        taskComplete(task)
          //    }}>{task.todo}</p> */}
          // </div>
          // {/* <div>
          //     <EditIcon className = 'edit' onClick = {() => {
          //         props.tasktoUpdate(task)
          //         props.showPopup()
          //     }}/>
          //     <CloseIcon className = 'close' onClick = {() => {
          //         removeTask(task._id)
          //     }}/>
          // </div> */}
//       </li>
//   })
// };

export default DiaryList;