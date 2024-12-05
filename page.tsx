import Link from 'next/link'
import { ArrowRight, Clock, Users, Calendar, Star } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Table Master</h1>
        <p className="text-xl text-gray-600">Streamline Your Dining Experience with Advanced Reservation and Queue Management</p>
        <Link 
          href="/reservation-queue" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Get Started <ArrowRight className="inline ml-2" />
        </Link>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Why Choose Table Master?</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><Clock className="mr-2 text-blue-600" /> Real-time queue updates</li>
            <li className="flex items-center"><Users className="mr-2 text-blue-600" /> Efficient table management</li>
            <li className="flex items-center"><Calendar className="mr-2 text-blue-600" /> Easy event planning</li>
            <li className="flex items-center"><Star className="mr-2 text-blue-600" /> Premium reservation options</li>
          </ul>
        </div>
        <div className="bg-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Join our virtual waitlist or make a reservation</li>
            <li>Receive real-time updates on your queue status</li>
            <li>Enjoy a seamless dining experience</li>
            <li>Rate your experience and provide feedback</li>
          </ol>
        </div>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Ready to Enhance Your Restaurant Experience?</h2>
        <Link 
          href="/reservation-queue" 
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
        >
          Make a Reservation Now <ArrowRight className="inline ml-2" />
        </Link>
      </section>
    </div>
  )
}

