import React from "react";
import useGame from "./hooks/useGame";
import './styles.css'



export default function App() {
  const {
    text, 
    running,
    textAreaRef,
    timeRemaining,
    startGame,
    wordCount, 
    handleTyping
   } = useGame(5)

  return (
    <main>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={e => handleTyping(e)}
        name="typingArea"
        value={text}
        disabled={!running}
        ref={textAreaRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button
        onClick={startGame}
        disabled={running}
      >
        Start!
      </button>
      <h1> Word count: {wordCount} </h1>
    </main>
  )
}
