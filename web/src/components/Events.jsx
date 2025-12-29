import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import img1 from '../assets/our1.jpeg'
import img2 from '../assets/ours2.jpeg'
import img3 from '../assets/ours3.jpeg'
import img4 from '../assets/ours4.jpeg'
import img5 from '../assets/image.png'

// Using placeholder images from unsplash source or similar if possible, otherwise I will use colored blocks or the single asset.
// Since I can't browse for new images, I'll use a mix of the logo and some colored gradient blocks for the slide show to simulate "images".

const slides = [
    {
        id: 1,
        content: (
            <div className="w-full h-full relative">
                <img src={img4} alt="Company Retreat" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white text-4xl md:text-5xl font-bold">  </span>
                </div>
            </div>
        ),
        type: 'image'
    },
    {
        id: 2,
        content: (
            <div className="w-full h-full relative">
                <img src={img2} alt="Hackathon Winners" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white text-4xl md:text-5xl font-bold">Collaboration</span>
                </div>
            </div>
        ),
        type: 'image'
    },
    {
        id: 3,
        content: (
            <div className="w-full h-full relative">
                <img src={img3} alt="Team Lunch" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white text-4xl md:text-5xl font-bold">Team Lunch</span>
                </div>
            </div>
        ),
        type: 'image'
    },
    {
        id: 4,
        content: (
            <div className="w-full h-full relative">
                <img src={img1} alt="Team Lunch" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white text-4xl md:text-5xl font-bold">Christmas Celebration </span>
                </div>
            </div>
        ),
        type: 'image'
    },
    {
        id: 5,
        content: (
            <div className="w-full h-full relative">
                <img src={img5} alt="Team Lunch" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white text-4xl md:text-5xl font-bold">Best Employee of the Quarter</span>
                </div>
            </div>
        ),
        type: 'image'
    }
]

const Events = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Hero Section */}
            <section className="py-12 md:py-20">
                <div className="container-custom text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-primary"
                    >
                        Life at MHK Tech
                    </motion.h1>
                    <p className="text-xl text-secondary max-w-2xl mx-auto">
                        Celebrating our moments, milestones, and the people who make it all happen.
                    </p>
                </div>
            </section>

            {/* Slideshow */}
            <section className="py-10 pb-20">
                <div className="container-custom">
                    <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 group">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full"
                            >
                                {slides[currentSlide].content}
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronRight size={32} />
                        </button>

                        {/* Indicators */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-24 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">Our Culture</span>
                            <h2 className="text-4xl font-bold text-primary mb-6">More Than Just a Workplace</h2>
                            <p className="text-lg text-secondary mb-6 leading-relaxed">
                                At MHK Tech, we believe that culture is the heartbeat of innovation. We foster an environment where creativity thrives, voices are heard, and every individual is empowered to bring their best self to work.
                            </p>
                            <p className="text-lg text-secondary mb-8 leading-relaxed">
                                From collaborative brainstorming sessions to Friday fun events, we ensure that the journey is as rewarding as the destination. We value balance, inclusivity, and continuous learning.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-primary font-medium">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Users size={16} /></div>
                                    Collaborative Environment
                                </li>
                                <li className="flex items-center gap-3 text-primary font-medium">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><Star size={16} /></div>
                                    Recognition & Growth
                                </li>
                                <li className="flex items-center gap-3 text-primary font-medium">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Calendar size={16} /></div>
                                    Work-Life Balance
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="rounded-2xl h-48 w-full overflow-hidden shadow-lg transform hover:scale-105 transition-all">
                                    <img src={img4} alt="Culture 1" className="w-full h-full object-cover" />
                                </div>
                                <div className="rounded-2xl h-64 w-full overflow-hidden shadow-lg transform hover:scale-105 transition-all">
                                    <img src={img3} alt="Culture 2" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="rounded-2xl h-64 w-full overflow-hidden shadow-lg transform hover:scale-105 transition-all">
                                    <img src={img2} alt="Culture 3" className="w-full h-full object-cover" />
                                </div>
                                <div className="rounded-2xl h-48 w-full overflow-hidden shadow-lg transform hover:scale-105 transition-all">
                                    <img src={img1} alt="Culture 4" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Events
