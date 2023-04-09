import { Inter } from 'next/font/google'
import Dashboard from './Dashboard'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Menú lateral izquierdo */}
      <aside></aside>

      {/* Contenido de las páginas */}
      <Dashboard/>
    </div>
  )
}
