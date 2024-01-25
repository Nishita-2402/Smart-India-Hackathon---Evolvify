
import { MdDeleteForever } from "react-icons/md";
import styles from "../../styles/dailyDiary.module.css"
import React ,{useState} from 'react'
import axios from 'axios'
function Note({ props}) {
  const [note,setNote] = useState(props.noteText.notes)
    const deleteTask = () => {
        if(noteText.trim() === '' || props.noteText.notes === noteText){
            props.removePopup()
        // } else {
        //     axios.put(`http://localhost:8000/api/notes/${props.note._id}`,{
        //         _id : props.note._id,
        //         notes : note,
        //         required : props.note.required
        //     }).then(res => {
        //         props.removePopup()
        //         props.updatetask(res.data)
        //     }).catch(err => console.log(err))
        // }
    }
  }
  return (
    <div className={styles.note}>
      <span>{text}</span>
      <div className={styles.note__footer}>
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => {
            console.log(id);
            handleDeleteNote(id)}
        }
          className={styles.delete__icon}
          size="1.3em"
        />
      </div>
    </div>
  );
}

export default Note;