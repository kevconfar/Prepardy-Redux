// maybe in clude in an if statement with answerform
// include in answer form and pass the selectedClue as a prop
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// have a SKIP option where user can press ENTER with a blank form and not tag a question

const Tagger = (props) => {
    
    // const [tags, setTags] = useState([]);
    // const handleTages = (e) => setTags(...tags, e.target.value);
    
    const dispatch = useDispatch();

    const { question, answer, category, id } = props.clue; // extract all relevant clue information

    const incorrect = {
        answer: answer, 
        clueID: id,
        topic: [],
        tags: []
    }

    const handleTags = (e) => {
        const reg = /(\w*\s?\w*\s?\w*):\s(\w+\s?\w+\s)/
        let output = []
        if (e.target.value.includes(", ")) {
            let arr = e.target.value.split(", ");
            arr.forEach((x) => {
                let kv = x.split(": ");
                let obj = {};
                obj[kv[0]] = kv[1];
                output.push(obj);
            }); 
        }
        incorrect.tags.push(output);     
    }

    const topicTagger = () => {
        return (
            <input
                type="text"
                value={topic}
                placeholder="TOPIC/SUBJECT (e.g. History, Roman History)"
                onChange={handleTopic}
                onSubmit={submitTopic}
            />
        )
    }

    return (
        <div>
            <div className="header">
                <h1>{category}</h1>
            </div>
            <div id="quesiton">
                <p>{question}</p>
                <p>{answer}</p>
                <p>Tag the clue with any relevant information. </p>
            </div>
       

            <form onSubmit={handleSubmit}>
                <input onChange={handle}/>


            </form>


        </div>
    )
}

Tagger.propTypes = {
    clue: PropTypes.object,
    userAnswer: PropTypes.string // optional props
}