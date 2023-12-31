import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord',
  description: 'A simple discord clone created with  Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider> 
      <html lang="pt-br" suppressHydrationWarning>
        <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
          <ThemeProvider 
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          storageKey='discord-theme'>
             {children}
          </ThemeProvider> 
          </body>
      </html>
    </ClerkProvider>
  )
}
import React from 'react'

export default function AuthLayout({children}:{children: React.ReactNode}) {
  return (
    <div className='h-full flex items-center justify-center'>
        {children}
    </div>
  )
}