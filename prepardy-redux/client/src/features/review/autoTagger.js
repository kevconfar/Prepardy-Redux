// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

// function autoTagger(answer, category, question, clueID, guess="") {

//     const incorrect = {
//         answer: answer,
//         answerType: "", // e.g. person,
//         clueIDs: [clueID],
//         tags: [], // keywords pulled from the question/category strings OR added by the user
//         topic: [], // sort by broad -> focused (e.g. ["history", "roman history"] or ["geography", "african geography"])
//         missCount: 0
//     };
//     if (guess) incorrect.userAnswer = [guess]; // IF the user gave an answer, it will be included.

//     const [topic, setTopic] = useState("");
//     const handleTopic = (e) => setTopic(e.target.value);
//     const submitTopic = () => 
    
//     const dispatch = useDispatch();

//     const countryTests = ['.*\sthis\scountry\s.*', '.*\sthis\s.*?\s?country\s.*']
//     const cityTests = ['.*\sthis\scity', '.*\sthis\s.*\scity\s.*']

//     const personTests = ['.*\swho\s.*|.*\shis\s.*|.*\she\s.*|.*\sshe\s.*|.*\sher\s.*']
//     const nameTest = ['[A-Z]\.[A-Z]\.\s[A-Z][A-Za-z]+', '[A-Z][a-zA-Z]+\s[a-zA-Z]+', '[a-zA-Z]+']

//     const topicForm = () => {
//         return (
//             <input
//                 type="text"
//                 placeholder="TOPIC/SUBJECT (e.g. History, Roman History)"
//                 onChange={handleTopic}
//                 onSubmit={submitTopic}
//             />  
//         )
//     }

//     return (
//         <div className="tag-form">
//             <input 
//                 type="text"
//                 placeholder="TOPIC/SUBJECT (e.g. History, Roman History)"
//                 onChange={handleTopic} 
//                 onSubmit={submitTopic}
//             />
//             <input
//                 type="text"
//                 placeholder=""
//             />


//         </div>
//     )


// }


// export default autoTagger;