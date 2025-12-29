import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const CTA = ({ onNavigate }) => {
    return (
        <section className="py-24 px-6 container-custom">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-accent-dark via-accent to-blue-400 p-12 md:p-24 text-center shadow-2xl shadow-blue-200"
            >
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[100%] bg-white blur-[100px] rounded-full mix-blend-overlay" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[100%] bg-white blur-[100px] rounded-full mix-blend-overlay" />

                    {/* Tech Grid Pattern */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        See what we built.
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-50 mb-12 font-medium max-w-2xl">
                        Explore our custom-built intelligent data products and verified solutions.
                    </p>

                    <button onClick={() => onNavigate('products')}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-accent-dark px-10 py-5 rounded-full font-bold text-lg flex items-center gap-2 shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all border border-transparent"
                        >
                            Explore Products <ArrowUpRight size={20} />
                        </motion.button>
                    </button>
                </div>
            </motion.div>
        </section>
    )
}

export default CTA
