'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

export default function FeedbackLoyaltyPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')
  const [rating, setRating] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the feedback to an API
    console.log('Feedback submitted:', { name, email, feedback, rating })
    // Reset form
    setName('')
    setEmail('')
    setFeedback('')
    setRating(0)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-center text-indigo-800">Customer Feedback & Loyalty</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">Your Feedback</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
            rows={4}
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Rating</label>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-8 h-8 cursor-pointer transition duration-200 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>

        <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200">
          Submit Feedback
        </button>
      </form>

      <div className="bg-indigo-50 rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">Your Loyalty Rewards</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 bg-white p-4 rounded-md shadow">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Star className="w-6 h-6 text-indigo-600" />
            </div>
            <p className="text-lg text-indigo-800">500 points - Redeem for a free dessert</p>
          </div>
          <div className="flex items-center space-x-4 bg-white p-4 rounded-md shadow">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Star className="w-6 h-6 text-indigo-600" />
            </div>
            <p className="text-lg text-indigo-800">1000 points - 20% off your next meal</p>
          </div>
          <div className="flex items-center space-x-4 bg-white p-4 rounded-md shadow">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Star className="w-6 h-6 text-indigo-600" />
            </div>
            <p className="text-lg text-indigo-800">Mystery reward unlocked! Click to reveal</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">Satisfaction Heatmap</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="w-32 text-indigo-700 font-medium">Food Quality</span>
            <div className="flex-grow bg-gray-200 rounded-full h-4">
              <div className="bg-green-500 h-4 rounded-full" style={{width: '90%'}}></div>
            </div>
            <span className="w-12 text-right text-indigo-700 font-medium">90%</span>
          </div>
          <div className="flex items-center">
            <span className="w-32 text-indigo-700 font-medium">Service</span>
            <div className="flex-grow bg-gray-200 rounded-full h-4">
              <div className="bg-yellow-500 h-4 rounded-full" style={{width: '75%'}}></div>
            </div>
            <span className="w-12 text-right text-indigo-700 font-medium">75%</span>
          </div>
          <div className="flex items-center">
            <span className="w-32 text-indigo-700 font-medium">Ambiance</span>
            <div className="flex-grow bg-gray-200 rounded-full h-4">
              <div className="bg-indigo-500 h-4 rounded-full" style={{width: '85%'}}></div>
            </div>
            <span className="w-12 text-right text-indigo-700 font-medium">85%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

