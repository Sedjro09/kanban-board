import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SideNav } from '@/components/sideNav'
import { TopBar } from '@/components/topBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mon tableau kanban',
  description: 'Gérer mes tâches quotidiennes.',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="flex h-screen">

          <div className="w-1/5 h-full border-solid border-1 border-r-gray-300">
            <SideNav />
          </div>

          <div className="w-4/5 h-full flex flex-col bg-gray-100 px-2">
            <TopBar />
            {children}
          </div>

        </div>

      </body>
    </html>
  )
}
