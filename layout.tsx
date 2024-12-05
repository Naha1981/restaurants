import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Home, ChevronLeft, ChevronRight } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Table Master - Reservation & Queue Management',
  description: 'Streamline your dining experience with our advanced reservation and queue management system.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-[#A5833B]`}>
        <nav className="bg-black border-b border-[#A5833B] p-4">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <Link href="/" className="text-2xl font-bold mb-2 sm:mb-0 hover:text-[#8B6F32] transition duration-300">Table Master</Link>
            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
              <Link href="/" className="hover:text-[#8B6F32] transition duration-300 mb-1 sm:mb-0">Home</Link>
              <Link href="/reservation-queue" className="hover:text-[#8B6F32] transition duration-300 mb-1 sm:mb-0">Reservation & Queue</Link>
              <Link href="/feedback-loyalty" className="hover:text-[#8B6F32] transition duration-300 mb-1 sm:mb-0">Feedback & Loyalty</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <Link href="/" className="text-[#A5833B] hover:text-[#8B6F32] transition duration-300">
              <Home size={24} />
            </Link>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#A5833B] hover:text-[#8B6F32] transition duration-300">
                <ChevronLeft size={24} />
              </Link>
              <Link href="#" className="text-[#A5833B] hover:text-[#8B6F32] transition duration-300">
                <ChevronRight size={24} />
              </Link>
            </div>
          </div>
          {children}
        </main>
        <footer className="bg-black border-t border-[#A5833B] text-[#A5833B] p-4 mt-8">
          <div className="container mx-auto text-center">
            © 2023 Table Master. All rights reserved. | Built By: NahaInc
          </div>
        </footer>
      </body>
    </html>
  )
}

