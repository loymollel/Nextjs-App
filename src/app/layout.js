// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import 'bootstrap/dist/css/bootstrap.css'


export const metadata = {
  title: 'CRUD',
  description: 'Created by Lotaanywaki Mollel',
  meta: {
    charset: "utf-8",
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}  
      </body>
    </html>
  )
}
