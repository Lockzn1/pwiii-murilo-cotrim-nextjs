import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Murilo Cotrim | Portfólio',
  description: 'Meu portfólio pessoal feito com Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
