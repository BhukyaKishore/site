import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Bot, Sparkles, User, ArrowUp } from 'lucide-react'

const ChatWidget = ({ initialMessage, onClose }) => {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        if (initialMessage) {
            setMessages([{ role: 'user', content: initialMessage }])
            handleSend(initialMessage)
        }
    }, [])

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = async (text) => {
        const userMsg = text || input
        if (!userMsg.trim()) return

        if (!text) {
            setMessages(prev => [...prev, { role: 'user', content: userMsg }])
            setInput('')
        }

        setLoading(true)

        // Mock API Call
        setTimeout(() => {
            const mockResponses = [
                "That's a great question about our AI services. We offer end-to-end machine learning pipelines.",
                "Our cloud solutions are designed to be scalable and secure. Would you like to know more about Azure or AWS?",
                "We can certainly help with data synchronization using Toreo Data Connector.",
                "I'm just a frontend demo bot, but I can tell you that MHK Tech is awesome!"
            ]
            const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)]

            setMessages(prev => [...prev, { role: 'bot', content: randomResponse }])
            setLoading(false)
        }, 1500)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/90 backdrop-blur-xl flex justify-center items-center"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-full h-full md:max-w-4xl md:h-[85vh] md:rounded-[2.5rem] bg-white shadow-2xl overflow-hidden flex flex-col relative border border-gray-100"
            >
                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-tr from-accent to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                            <Sparkles size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">MHK AI Assistant</h3>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm text-gray-500 font-medium">Online & Ready</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-3 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 bg-gray-50/30">
                    {messages.length === 0 && !loading && (
                        <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                            <Bot size={64} className="text-gray-300 mb-6" />
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">How can I help you?</h2>
                            <p className="text-gray-500">Ask me about AI, Cloud, or our Services.</p>
                        </div>
                    )}

                    {messages.map((msg, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={idx}
                            className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {msg.role === 'bot' && (
                                <div className="w-10 h-10 bg-gradient-to-tr from-accent to-purple-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                                    <Bot size={20} />
                                </div>
                            )}

                            <div className={`
                                max-w-[85%] md:max-w-[75%] p-5 text-lg leading-relaxed shadow-sm
                                ${msg.role === 'user'
                                    ? 'bg-primary text-white rounded-[1.5rem] rounded-tr-none'
                                    : 'bg-white border border-gray-100 text-gray-800 rounded-[1.5rem] rounded-tl-none'}
                            `}>
                                {msg.content}
                            </div>

                            {msg.role === 'user' && (
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                                    <User size={20} />
                                </div>
                            )}
                        </motion.div>
                    ))}

                    {loading && (
                        <div className="flex gap-4 justify-start">
                            <div className="w-10 h-10 bg-gradient-to-tr from-accent to-purple-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                                <Bot size={20} />
                            </div>
                            <div className="bg-white border border-gray-100 p-5 rounded-[1.5rem] rounded-tl-none flex gap-2 items-center h-[52px]">
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-6 md:p-8 bg-white border-t border-gray-100">
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="relative flex items-center gap-4 max-w-4xl mx-auto"
                    >
                        <input
                            type="text"
                            placeholder="Ask anything about our services..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full bg-gray-50 text-gray-900 placeholder-gray-400 px-6 py-5 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white border border-transparent focus:border-accent transition-all text-lg shadow-inner"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || loading}
                            className="absolute right-3 p-3 bg-primary text-white rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 shadow-lg"
                        >
                            <ArrowUp size={24} />
                        </button>
                    </form>
                    <div className="text-center mt-3">
                        <p className="text-xs text-secondary">MHK AI can make mistakes. Verify important info.</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ChatWidget
