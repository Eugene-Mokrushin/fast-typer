import { useState, useEffect, useRef } from "react";

export default function (STARTING_TIME = 10) {

      const [text, setText] = useState('')
      const [wordCount, setWordCount] = useState(0)
      const [running, setRunning] = useState(false)
      const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
      const textAreaRef = useRef(null)


      useEffect(() => {
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
            setText("")
            setWordCount(0)
            textAreaRef.current.disabled = false
            textAreaRef.current.focus()
      }

      function endGame() {
            setRunning(false)
            setWordCount(caclculateWordCount(text))
      }

      return {
            text,
            running,
            textAreaRef,
            timeRemaining,
            startGame,
            wordCount,
            handleTyping
      }
}