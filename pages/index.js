import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Menú lateral izquierdo */}
      <aside></aside>

      {/* Contenido de las páginas */}
      <button className="border border-black rounded p-3 hover:bg-slate-200 active:bg-slate-300">My very first button</button>
    </main>
  )
}
