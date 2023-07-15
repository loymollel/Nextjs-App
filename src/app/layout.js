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

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Features
                </a>
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </nav>

        {children}  
      </body>
    </html>
  )
}
