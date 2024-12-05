'use client'

import { useState, useEffect } from 'react'

export default function VirtualWaitlist() {
  const [name, setName] = useState('')
  const [partySize, setPartySize] = useState(2)
  const [estimatedWaitTime, setEstimatedWaitTime] = useState(null)
  const [status, setStatus] = useState('')

  const joinWaitlist = () => {
    // In a real app, this would be an API call
    setEstimatedWaitTime(Math.floor(Math.random() * 60) + 15) // Random wait time between 15-75 minutes
    setStatus('Waiting')
  }

  useEffect(() => {
    if (estimatedWaitTime !== null) {
      const timer = setInterval(() => {
        setEstimatedWaitTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer)
            setStatus('Table being prepared')
            return 0
          }
          return prevTime - 1
        })
      }, 60000) // Update every minute

      return () => clearInterval(timer)
    }
  }, [estimatedWaitTime])

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Join Virtual Waitlist</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="partySize">
          Party Size
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="partySize"
          type="number"
          value={partySize}
          onChange={(e) => setPartySize(parseInt(e.target.value))}
          min="1"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={joinWaitlist}
      >
        Join Waitlist
      </button>
      {estimatedWaitTime !== null && (
        <div className="mt-4">
          <p className="text-lg">Estimated Wait Time: {estimatedWaitTime} minutes</p>
          <p className="text-lg">Status: {status}</p>
        </div>
      )}
    </div>
  )
}

