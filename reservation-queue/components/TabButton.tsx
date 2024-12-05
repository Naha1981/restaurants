import { ReactNode } from 'react'

interface TabButtonProps {
  active: boolean
  onClick: () => void
  children: ReactNode
}

export default function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      className={`
        px-6 py-3 rounded-lg font-semibold text-sm sm:text-base
        transition-all duration-300 ease-in-out
        ${active
          ? 'bg-[rgb(var(--burnt-orange))] text-white shadow-lg scale-105'
          : 'bg-black text-[#A5833B] border border-[#A5833B] hover:bg-[rgba(var(--burnt-orange),0.1)] hover:border-[rgb(var(--burnt-orange))]'
        }
        focus:outline-none focus:ring-2 focus:ring-[rgb(var(--burnt-orange))] focus:ring-offset-2 focus:ring-offset-black
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

