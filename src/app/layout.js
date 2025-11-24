import Providers from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yan Portfolio',
  description: 'Yan nextjs app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
