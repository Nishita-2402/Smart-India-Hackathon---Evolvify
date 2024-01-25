import React, { useState } from "react";
import { MdMic, MdMicOff } from "react-icons/md";
import styles from "../../styles/dailyDiary.module.css"
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

function AddNote1({ handleAddNote }) {
  const [noteText, Settask] = useState("");
  const charLimit = 500;
  const handleChange = (e) => {
    console.log(e.target.value)
    if (charLimit - e.target.value.length >= 0) Settask(e.target.value);
  };
  const handleClick = () => {
    if (noteText.trim().length > 0) {
      Settask("");
    }
    else {
        axios.post('http://localhost:8000/api/notes' , {
            notes : noteText,
            required : true
        }).then(res => {
            Settask("")
            handleAddNote.diary__list(res.data)
        }).catch(err => console.log(err))
    }

  };
 

  //voice note

//   const handleVoice = () => {
//     SpeechRecognition.startListening();
//     setNoteText(transcript);
//     console.log(transcript);
//   };

//   const { transcript, browserSupportsSpeechRecognition } =
//     useSpeechRecognition();

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

  return (
    <div className={`${styles.note} ${styles.new}`}>
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        placeholder="So, how was your day?"
        onChange={handleChange}
        className={styles.textarea}
      ></textarea>
      <div className={styles.note__footer}>
        <small>{charLimit - noteText.length} Remaining</small>
        {/* <MdMic onClick={handleVoice} className="delete__icon" size="1.3em" /> */}
        {/* <MdMicOff
          onClick={SpeechRecognition.stopListening}
          className="delete__icon"
          size="1.3em"
        /> */}
        <button className={styles.save} onClick={handleClick}>
          SAVE
        </button>
      </div>
    </div>
  );
}

export default AddNote1;