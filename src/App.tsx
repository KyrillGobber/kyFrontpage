import './App.css'
import { Toaster } from 'sonner'
import { Footer } from './components/organisms/Footer'
import { Nav } from './components/organisms/Nav'
import { MainContent } from './components/organisms/MainContent'
import { cn } from './lib/utils'
import { Hero } from './components/organisms/Hero'

function App() {

    return (
        <div className={cn("relative h-full font-sans antialiased")}>
            <main className="relative flex flex-col min-h-screen gap-8">
                <Nav />
                <Hero />
                <div id="main">
                    <MainContent />
                </div>
                <Footer />
            </main>
            <Toaster />
        </div>
    )
}

export default App
