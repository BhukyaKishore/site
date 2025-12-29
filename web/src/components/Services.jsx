import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Network, ArrowUpRight, X } from 'lucide-react'

const services = [
    {
        id: 'ai',
        title: "AI Solutions",
        description: "Drive innovation and stay ahead of the competition with our AI Solutions.",
        longDescription: "We provide comprehensive AI solutions including Machine Learning, Predictive Modeling & Advanced Analytics, Deep Learning, Data Visualization & Dashboarding, and Natural Language Processing (NLP). Our custom-built intelligent data products help you manage, process, and analyze your data at scale.",
        image: null,
        align: "left"
    },
    {
        id: 'cloud',
        title: "Cloud Solutions",
        description: "Streamline and scale business operations with our cloud-based solutions.",
        longDescription: "Our cloud experts deliver AWS & Azure Native Application Development, IAAS, PAAS, SAAS solutions, Cloud Migrations, Cloud Security & Compliance, and Hybrid Cloud Solutions. We ensure your infrastructure is secure, scalable, and optimized for performance.",
        image: null,
        align: "right"
    },
    {
        id: 'it',
        title: "IT Consultancy",
        description: "Boost productivity, maximize growth and minimize downtime.",
        longDescription: "We offer comprehensive IT Services including Managed Services, Consulting, Project Management, Application and Web Development, and Migration & Support. Our team collaborates with yours to align business requirements and achieve shared goals.",
        image: null,
        align: "left"
    },
    {
        id: 'data',
        title: "Data Engineering",
        description: "Manage, process and analyze your data at scale.",
        longDescription: "Transform your data strategy with Real-time Data Streaming, Data Integration & ETL services, Data Lake Solutions, Data Governance & Management, and BI & Reporting. We help you turn raw data into actionable intelligence.",
        image: null,
        align: "right"
    }
]

const Services = () => {
    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedId(null)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden text-primary">
            <div className="container-custom relative z-10">
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">What We Do</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Expertise</h2>
                    <p className="text-secondary text-lg">
                        End-to-end technology solutions tailored to scale with your business needs.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Central Decoration (Hidden on mobile) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 relative z-10">
                        {services.map((service) => (
                            <motion.div
                                layoutId={service.id}
                                key={service.id}
                                onClick={() => setSelectedId(service.id)}
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                className="group bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 border border-gray-100 cursor-pointer relative overflow-hidden transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight className="text-accent" size={24} />
                                </div>

                                <div className="mb-6 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                    <Network size={24} />
                                </div>

                                <motion.h3 layoutId={`title-${service.id}`} className="text-2xl font-bold mb-3">
                                    {service.title}
                                </motion.h3>
                                <p className="text-secondary leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-50"
                        />

                        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
                            <motion.div
                                layoutId={selectedId}
                                transition={{ type: "spring", stiffness: 250, damping: 20, mass: 1 }}
                                className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[85vh]"
                            >
                                {(() => {
                                    const service = services.find(s => s.id === selectedId)
                                    return (
                                        <>
                                            <div className="p-8 md:p-10 bg-surface border-b border-gray-100 flex justify-between items-start">
                                                <div>
                                                    <motion.h2 layoutId={`title-${service.id}`} className="text-3xl font-bold text-primary mb-2">
                                                        {service.title}
                                                    </motion.h2>
                                                    <p className="text-accent font-medium">MHK Tech Solutions</p>
                                                </div>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-secondary"
                                                >
                                                    <X size={20} />
                                                </button>
                                            </div>

                                            <motion.div
                                                initial={{ opacity: -2 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0 }}
                                                className="p-8 md:p-10 overflow-y-auto"
                                            >
                                                <p className="text-lg text-secondary leading-relaxed mb-8">
                                                    {service.longDescription}
                                                </p>

                                                <div className="flex flex-wrap gap-3 mb-8">
                                                    {['Scalability', 'Security', 'Performance', 'Innovation'].map((tag) => (
                                                        <span key={tag} className="px-4 py-2 bg-blue-50 text-accent text-sm font-semibold rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <button className="w-full py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25">
                                                    Schedule a Consultation
                                                </button>
                                            </motion.div>
                                        </>
                                    )
                                })()}
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Services
