'use client'

import { useState } from 'react'
import VirtualWaitlist from './components/VirtualWaitlist'
import ReservationForm from './components/ReservationForm'
import EventPlanning from './components/EventPlanning'
import QueueStatus from './components/QueueStatus'
import TabButton from './components/TabButton'
import Loading from '../components/Loading'

export default function ReservationQueuePage() {
  const [activeTab, setActiveTab] = useState('waitlist')
  const [isLoading, setIsLoading] = useState(false)

  const tabs = [
    { id: 'waitlist', label: 'Virtual Waitlist' },
    { id: 'reservation', label: 'Make Reservation' },
    { id: 'event', label: 'Event Planning' },
    { id: 'queue', label: 'Queue Status' },
  ]

  const handleTabChange = (tabId: string) => {
    setIsLoading(true)
    setActiveTab(tabId)
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-[#A5833B] text-center">Table Reservation & Queue Management</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>
      <div className="card">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {activeTab === 'waitlist' && <VirtualWaitlist />}
            {activeTab === 'reservation' && <ReservationForm />}
            {activeTab === 'event' && <EventPlanning />}
            {activeTab === 'queue' && <QueueStatus />}
          </>
        )}
      </div>
    </div>
  )
}

