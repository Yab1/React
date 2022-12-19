import { useState } from "react";
import useFetch from "./useFetch";

const Quizzical = () => {
    const[state,setState] = useState(true)

    const{trivia} = useFetch()
    let score = 2

    const question = trivia && trivia.map((triv, index)=>(
        <div className="trivia-container flex" key={index}>
            <h2 className="trivia-question">{triv.question}</h2>
            <div className="ans-btns flex">
                <button className="trivia-ans-btn">1</button>
                <button className="trivia-ans-btn">2</button>
                <button className="trivia-ans-btn">{triv.correct_answer}</button>
                <button className="trivia-ans-btn">3</button>
            </div>
            <hr />
        </div>
    ))

    const handleClick=()=>{
        setState(prevState=>!prevState)
    }
        
    return(
        <div className="Quizzical">
            <div className="quizzical-container">
                {question}
            </div>
            {
                trivia && 
                <div className="checker flex">
                {
                 state
                    ? <button className="check-btn btn" onClick={handleClick}>Check Answers</button>
                    : <div className="play-again flex">
                        <h2 className="score-details">{`You scored ${score}/5 correct answers`}</h2>
                        <button className="btn" onClick={handleClick}>Play Again</button>
                    </div>
                }
            </div>
            }
        </div>
    )
}
 
export default Quizzical;