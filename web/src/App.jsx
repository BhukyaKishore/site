import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import CTA from './components/CTA'
import Products from './components/Products'
import Careers from './components/Careers'
import Contact from './components/Contact'
import ChatPage from './components/ChatPage'
import Footer from './components/Footer'
import Events from './components/Events'
import About from './components/About'

function App() {
    const [currentView, setCurrentView] = useState('home')
    const [chatInitialMessage, setChatInitialMessage] = useState(null)

    // Scroll to top on view change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentView])

    const handleChatStart = (message) => {
        setChatInitialMessage(message)
        setCurrentView('chat')
    }

    const navigateTo = (view) => {
        setCurrentView(view)
        if (view !== 'chat') {
            setChatInitialMessage(null)
        }
    }

    const isChatPage = currentView === 'chat'

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            {!isChatPage && <Navbar currentView={currentView} onNavigate={navigateTo} />}

            {/* Main Content */}
            <main>
                {currentView === 'home' && (
                    <>
                        <Hero onChatStart={handleChatStart} />
                        <Services />
                        <About />
                        <CTA onNavigate={navigateTo} />
                    </>
                )}

                {currentView === 'products' && <Products />}
                {currentView === 'careers' && <Careers />}
                {currentView === 'contact' && <Contact />}
                {currentView === 'events' && <Events />}
                {currentView === 'chat' && (
                    <ChatPage
                        initialMessage={chatInitialMessage}
                        onExit={() => navigateTo('home')}
                    />
                )}
            </main>

            {/* Footer */}
            {!isChatPage && <Footer onNavigate={navigateTo} />}
        </div>
    )
}

export default App
