import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sehat Sathi - Home Care Services',
  description: 'Quality home care services for your family',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
