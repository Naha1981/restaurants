'use client'

import { useState, useEffect } from 'react'
import { Users, Clock, Loader } from 'lucide-react'

export default function VirtualWaitlist() {
  const [name, setName] = useState('')
  const [partySize, setPartySize] = useState(2)
  const [estimatedWaitTime, setEstimatedWaitTime] = useState<number | null>(null)
  const [status, setStatus] = useState('')

  const joinWaitlist = () => {
    if (!name) {
      alert('Please enter your name')
      return
    }
    // In a real app, this would be an API call
    setEstimatedWaitTime(Math.floor(Math.random() * 60) + 15) // Random wait time between 15-75 minutes
    setStatus('Waiting')
  }

  useEffect(() => {
    if (estimatedWaitTime !== null) {
      const timer = setInterval(() => {
        setEstimatedWaitTime((prevTime) => {
          if (prevTime !== null && prevTime <= 1) {
            clearInterval(timer)
            setStatus('Table being prepared')
            return 0
          }
          return prevTime !== null ? prevTime - 1 : null
        })
      }, 60000) // Update every minute

      return () => clearInterval(timer)
    }
  }, [estimatedWaitTime])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#A5833B] text-center">Join Virtual Waitlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="partySize" className="label">Party Size</label>
            <div className="flex items-center">
              <button
                className="btn btn-secondary rounded-r-none px-3 py-2"
                onClick={() => setPartySize(Math.max(1, partySize - 1))}
              >
                -
              </button>
              <input
                id="partySize"
                type="number"
                value={partySize}
                onChange={(e) => setPartySize(Math.max(1, parseInt(e.target.value)))}
                className="input rounded-none text-center w-16"
                min="1"
              />
              <button
                className="btn btn-secondary rounded-l-none px-3 py-2"
                onClick={() => setPartySize(partySize + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="btn btn-secondary w-full flex items-center justify-center"
            onClick={joinWaitlist}
          >
            <Users className="mr-2" size={18} />
            Join Waitlist
          </button>
        </div>
        <div className="bg-[rgba(165,131,59,0.1)] rounded-lg p-6 flex flex-col justify-center items-center">
          {estimatedWaitTime !== null ? (
            <>
              <Clock className="text-[#A5833B] mb-4" size={48} />
              <p className="text-2xl font-bold text-[#A5833B] mb-2">{estimatedWaitTime} minutes</p>
              <p className="text-lg text-[#A5833B]">Estimated Wait Time</p>
              <p className="text-md text-[#A5833B] mt-4">Status: {status}</p>
            </>
          ) : (
            <>
              <Loader className="text-[#A5833B] mb-4 animate-spin" size={48} />
              <p className="text-lg text-[#A5833B]">Join the waitlist to see estimated wait time</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

