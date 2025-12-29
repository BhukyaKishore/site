import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import logo from '../mhk-tech_inc.png'

const Navbar = ({ currentView, onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNav = (view, sectionId = null) => {
        setIsMobileMenuOpen(false)
        onNavigate(view)
        if (sectionId) {
            // Wait for view change then scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                } else {
                    window.scrollTo(0, 0)
                }
            }, 100)
        }
    }

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-0' : 'py-0'}`}
            >
                <div
                    className={`w-full transition-all duration-300 px-6 py-3 flex justify-between items-center
                    ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20' : 'bg-transparent'}`}
                >
                    {/* Logo */}
                    <button onClick={() => handleNav('home')} className="flex items-center gap-3 group">
                        <img
                            src={logo}
                            alt="MHK Tech Inc"
                            className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                    </button>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <button onClick={() => handleNav('home', 'services')} className={`text-sm font-medium hover:text-accent transition-colors text-primary`}>Services</button>
                        <button onClick={() => handleNav('products')} className={`text-sm font-medium hover:text-accent transition-colors ${currentView === 'products' ? 'text-accent' : 'text-primary'}`}>Products</button>
                        <button onClick={() => handleNav('careers')} className={`text-sm font-medium hover:text-accent transition-colors ${currentView === 'careers' ? 'text-accent' : 'text-primary'}`}>Careers</button>
                        <button onClick={() => handleNav('events')} className={`text-sm font-medium hover:text-accent transition-colors ${currentView === 'events' ? 'text-accent' : 'text-primary'}`}>Events</button>
                        <button onClick={() => handleNav('contact')} className={`text-sm font-medium hover:text-accent transition-colors ${currentView === 'contact' ? 'text-accent' : 'text-primary'}`}>Contact</button>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button onClick={() => handleNav('chat')}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors
                                ${isScrolled
                                        ? 'bg-accent text-white shadow-lg shadow-accent/20'
                                        : 'bg-white text-accent shadow-md'}`}
                            >
                                Talk to AI <ArrowRight size={16} />
                            </motion.button>
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-primary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            <button className="text-xl font-medium text-primary" onClick={() => handleNav('home')}>Home</button>
                            <button className="text-xl font-medium text-primary" onClick={() => handleNav('products')}>Products</button>
                            <button className="text-xl font-medium text-primary" onClick={() => handleNav('careers')}>Careers</button>
                            <button className="text-xl font-medium text-primary" onClick={() => handleNav('events')}>Events</button>
                            <button className="text-xl font-medium text-primary" onClick={() => handleNav('contact')}>Contact</button>
                            <button className="text-xl font-medium text-accent" onClick={() => handleNav('chat')}>Talk to AI</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
