import './App.css'
import { Toaster } from 'sonner'
import { Footer } from './components/organisms/Footer'
import { Nav } from './components/organisms/Nav'
import { MainContent } from './components/organisms/MainContent'
import { cn } from './lib/utils'

function App() {

  return (
        <div className={cn("relative h-full font-sans antialiased")}>
            <main className="relative flex flex-col min-h-screen">
                <Nav />
                <MainContent />
                <Footer />
            </main>
            <Toaster />
        </div>
  )
}

export default App
