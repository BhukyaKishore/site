import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Search } from 'lucide-react'

const Hero = ({ onChatStart }) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim()) {
            onChatStart(inputValue)
            setInputValue('')
        }
    }

    return (
        <section className="relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden bg-surface">
            {/* Background Gradients - Subtle & Light */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl -z-10 animate-pulse-slow" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-100/40 blur-3xl -z-10" />

            <div className="container-custom mx-auto text-center z-10 pt-20">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-accent-dark font-semibold text-sm mb-8"
                >
                    <Sparkles size={16} className="text-accent" />
                    <span>Next-Gen Enterprise Intelligence</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-6 max-w-5xl mx-auto leading-tight"
                >
                    Future-Proof Your Business with <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                        Intelligent AI Solutions.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-secondary max-w-3xl mx-auto mb-16 leading-relaxed"
                >
                    We build scalable cloud architectures and custom data products that drive growth.
                </motion.p>

                {/* AI Command Center */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative max-w-2xl mx-auto group"
                >
                    {/* Pulsing Halo Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-light to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                    <form
                        onSubmit={handleSubmit}
                        className="relative flex items-center bg-white rounded-2xl shadow-xl p-2 border border-gray-100 transition-transform transform group-hover:-translate-y-1"
                    >
                        <div className="pl-4 pr-3 text-accent">
                            <Search size={24} strokeWidth={2.5} />
                        </div>
                        <input
                            type="text"
                            placeholder="Ask our AI about MHK services..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="flex-1 bg-transparent text-lg py-4 outline-none text-primary placeholder:text-gray-400 font-medium"
                        />
                        <button
                            type="submit"
                            className="bg-accent hover:bg-accent-dark text-white p-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center aspect-square"
                        >
                            <ArrowRight size={24} />
                        </button>
                    </form>

                    {/* Helper text below input */}
                    <div className="mt-4 flex justify-center gap-4 text-sm text-gray-400 font-medium">
                        <span>Try: "Pricing"</span>
                        <span>•</span>
                        <span>"Cloud Services"</span>
                        <span>•</span>
                        <span>"Consulting"</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
