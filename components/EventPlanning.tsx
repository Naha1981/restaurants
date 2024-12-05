'use client'

import { useState } from 'react'

export default function EventPlanning() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guestCount, setGuestCount] = useState(10)
  const [tableCount, setTableCount] = useState(1)
  const [menuSelection, setMenuSelection] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would be an API call to plan the event
    console.log('Event planned:', { name, date, time, guestCount, tableCount, menuSelection })
    // Reset form or show confirmation
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Plan an Event</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Event Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
          Time
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guestCount">
          Number of Guests
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="guestCount"
          type="number"
          value={guestCount}
          onChange={(e) => setGuestCount(parseInt(e.target.value))}
          min="1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tableCount">
          Number of Tables
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tableCount"
          type="number"
          value={tableCount}
          onChange={(e) => setTableCount(parseInt(e.target.value))}
          min="1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Menu Pre-selection</label>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="appetizers"
              checked={menuSelection.includes('appetizers')}
              onChange={(e) => {
                if (e.target.checked) {
                  setMenuSelection([...menuSelection, 'appetizers'])
                } else {
                  setMenuSelection(menuSelection.filter(item => item !== 'appetizers'))
                }
              }}
            />
            <span className="ml-2">Appetizers</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="main_course"
              checked={menuSelection.includes('main_course')}
              onChange={(e) => {
                if (e.target.checked) {
                  setMenuSelection([...menuSelection, 'main_course'])
                } else {
                  setMenuSelection(menuSelection.filter(item => item !== 'main_course'))
                }
              }}
            />
            <span className="ml-2">Main Course</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="desserts"
              checked={menuSelection.includes('desserts')}
              onChange={(e) => {
                if (e.target.checked) {
                  setMenuSelection([...menuSelection, 'desserts'])
                } else {
                  setMenuSelection(menuSelection.filter(item => item !== 'desserts'))
                }
              }}
            />
            <span className="ml-2">Desserts</span>
          </label>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Plan Event
      </button>
    </form>
  )
}

