import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, User, ArrowUp } from 'lucide-react'

const BOT_IMAGE_URL = "https://static.wixstatic.com/media/517fcc_7b1ce65fb2d647e6b9e59a4dfc21addf~mv2.png/v1/fill/w_68,h_68,q_85,usm_0.66_1.00_0.01/517fcc_7b1ce65fb2d647e6b9e59a4dfc21addf~mv2.png"

const ChatPage = ({ initialMessage, onExit }) => {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const messagesEndRef = useRef(null)

    useEffect(() => {
        if (initialMessage) {
            setMessages([{ role: 'user', content: initialMessage }])
            triggerChat(initialMessage)
        }
    }, [initialMessage])

    const triggerChat = async (userMsg) => {
        setLoading(true)
        // Mock API Call
        setTimeout(() => {
            const mockResponse = "I see you're interested in that. Our team specializes in delivering high-value technical solutions in that area."
            setMessages(prev => [...prev, { role: 'bot', content: mockResponse }])
            setLoading(false)
        }, 1500)
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMsg = input
        setMessages(prev => [...prev, { role: 'user', content: userMsg }])
        setInput('')
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
        // Removed pt-20, made it h-screen and removed container constraint for full width experience
        <div className="h-screen bg-white flex flex-col">
            <div className="flex-1 w-full flex flex-col h-full p-0">
                {/* Chat Container - Full Canvas */}
                <div className="bg-white flex flex-col flex-1 overflow-hidden relative">

                    {/* Header - Fixed at top */}
                    <div className="p-4 md:p-6 border-b border-gray-100 flex items-center justify-between gap-4 bg-white/80 backdrop-blur-md z-10 sticky top-0">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-accent to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                <Sparkles size={24} />
                            </div>
                            <div>
                                <h1 className="text-lg md:text-xl font-bold text-gray-900">MHK AI Assistant</h1>
                                <p className="text-xs md:text-sm text-gray-500">Always here to help you</p>
                            </div>
                        </div>
                        {/* Option to go back home */}
                        <button onClick={onExit} className="text-sm font-medium text-gray-500 hover:text-accent transition-colors">
                            Exit Chat
                        </button>
                    </div>

                    {/* Messages Area - Expanded */}
                    <div className="flex-1 overflow-y-auto px-4 md:px-[20%] py-8 space-y-8 bg-gray-50/30">
                        {messages.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                                    <img src={BOT_IMAGE_URL} alt="Bot" className="w-full h-full object-cover" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Hello, how can I help?</h2>
                                <p className="text-gray-500 text-base md:text-lg max-w-md">I can answer questions about our services, products, or company culture.</p>
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
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white shrink-0 shadow-md overflow-hidden bg-white">
                                        <img src={BOT_IMAGE_URL} alt="Bot" className="w-full h-full object-cover" />
                                    </div>
                                )}

                                <div className={`
                                    max-w-[85%] md:max-w-[70%] p-4 md:p-5 text-base md:text-lg leading-relaxed shadow-sm
                                    ${msg.role === 'user'
                                        ? 'bg-primary text-white rounded-[1.5rem] rounded-tr-none'
                                        : 'bg-white border border-gray-100 text-gray-800 rounded-[1.5rem] rounded-tl-none'}
                                `}>
                                    {msg.content}
                                </div>

                                {msg.role === 'user' && (
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                                        <User size={20} />
                                    </div>
                                )}
                            </motion.div>
                        ))}

                        {loading && (
                            <div className="flex gap-4 justify-start">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 shadow-md overflow-hidden bg-white">
                                    <img src={BOT_IMAGE_URL} alt="Bot" className="w-full h-full object-cover" />
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
                    <div className="p-4 md:p-8 bg-white border-t border-gray-100 flex justify-center">
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                            className="relative flex items-center gap-4 w-full max-w-4xl"
                        >
                            <input
                                type="text"
                                placeholder="Type your message..."
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage
