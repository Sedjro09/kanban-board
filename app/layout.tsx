import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { CategoriesAPI } from '@/api/categories'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

CategoriesAPI.fetchCategories()

export const metadata: Metadata = {
  title: 'Mon tableau kanban',
  description: 'Gérer mes tâches quotidiennes.',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="bg-slate-200 flex flex-col items-center justify-center">

            {children}

        </div>

      </body>
    </html>
  )
}
