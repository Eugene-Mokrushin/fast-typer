import React from "react";
import './styles.css'



export default function App() {
  const STARTING_TIME = 5


  const [text, setText] = React.useState('')
  const [wordCount, setWordCount] = React.useState(0)
  const [running, setRunning] = React.useState(false)
  const [timeRemaining, setTimeRemaining] = React.useState(STARTING_TIME)


  React.useEffect(() => {
    if (timeRemaining > 0 && running) {
      setTimeout(() => {
        setTimeRemaining(prevState => prevState - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }

  }, [timeRemaining, running])


  function handleTyping(e) {
    const { value } = e.target
    setText(value)
  }

  function caclculateWordCount(text) {
    const wordsArr = text.trim().split(' ')
    return wordsArr.filter(word => word !== '').length
  }

  function startGame() {
    setRunning(true)
    setTimeRemaining(STARTING_TIME)
    setWordCount(0)
  }

  function endGame() {
    setRunning(false)
    setWordCount(caclculateWordCount(text))
  }


  return (
    <main>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={e => handleTyping(e)}
        name="typingArea"
        value={text}
        disabled={!running}
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
