'use client'

import { useState, useEffect } from 'react'

export default function QueueStatus() {
  const [queueLength, setQueueLength] = useState(0)
  const [estimatedWaitTime, setEstimatedWaitTime] = useState(0)
  const [triviaQuestion, setTriviaQuestion] = useState('')
  const [triviaAnswer, setTriviaAnswer] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    // In a real app, this would be an API call to get the current queue status
    setQueueLength(Math.floor(Math.random() * 20))
    setEstimatedWaitTime(Math.floor(Math.random() * 60) + 15)

    // Simulating trivia questions
    const trivia = [
      { question: "What year was our restaurant founded?", answer: "1985" },
      { question: "What's our chef's signature dish?", answer: "Truffle Risotto" },
      { question: "How many wines are in our cellar?", answer: "Over 500" }
    ]
    const randomTrivia = trivia[Math.floor(Math.random() * trivia.length)]
    setTriviaQuestion(randomTrivia.question)
    setTriviaAnswer(randomTrivia.answer)
  }, [])

  return (
    <div className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Current Queue Status</h2>
      <p className="text-lg mb-2">People in queue: {queueLength}</p>
      <p className="text-lg mb-4">Estimated wait time: {estimatedWaitTime} minutes</p>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">While you wait, try our restaurant trivia!</h3>
        <p className="text-lg mb-2">{triviaQuestion}</p>
        {!showAnswer ? (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
            onClick={() => setShowAnswer(true)}
          >
            Show Answer
          </button>
        ) : (
          <p className="text-lg font-bold">{triviaAnswer}</p>
        )}
      </div>
    </div>
  )
}

