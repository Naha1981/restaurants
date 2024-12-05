'use client'

import { useState } from 'react'

export default function ReservationForm() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [partySize, setPartySize] = useState(2)
  const [tier, setTier] = useState('standard')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would be an API call to make the reservation
    console.log('Reservation submitted:', { name, date, time, partySize, tier })
    // Reset form or show confirmation
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-indigo-800">Make a Reservation</h2>
      <div>
        <label htmlFor="name" className="label">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          required
        />
      </div>
      <div>
        <label htmlFor="date" className="label">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input"
          required
        />
      </div>
      <div>
        <label htmlFor="time" className="label">Time</label>
        <input
          id="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input"
          required
        />
      </div>
      <div>
        <label htmlFor="partySize" className="label">Party Size</label>
        <input
          id="partySize"
          type="number"
          value={partySize}
          onChange={(e) => setPartySize(parseInt(e.target.value))}
          className="input"
          min="1"
          required
        />
      </div>
      <div>
        <label htmlFor="tier" className="label">Reservation Tier</label>
        <select
          id="tier"
          value={tier}
          onChange={(e) => setTier(e.target.value)}
          className="input"
        >
          <option value="standard">Standard</option>
          <option value="premium">Premium (Window Seat)</option>
          <option value="vip">VIP (Complimentary Drinks)</option>
        </select>
      </div>
      <button
        className="btn btn-primary"
        type="submit"
      >
        Make Reservation
      </button>
    </form>
  )
}

