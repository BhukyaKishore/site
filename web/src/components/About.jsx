import { motion } from 'framer-motion'
import { Target, Eye, Globe } from 'lucide-react'

const About = () => {
    return (
        <section id="about" className="py-24 bg-surface text-primary">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block"
                    >
                        About Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        Pioneering the Future of Tech
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-secondary leading-relaxed"
                    >
                        MHK Tech Inc. is a leading provider of digital transformation solutions. We combine technical expertise with business acumen to deliver software that drives real value.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <Target size={32} />,
                            title: "Our Mission",
                            description: "To empower businesses with innovative technology solutions that streamline operations and accelerate growth.",
                            color: "bg-blue-50 text-blue-600"
                        },
                        {
                            icon: <Eye size={32} />,
                            title: "Our Vision",
                            description: "To be the global partner of choice for enterprises seeking digital excellence and sustainable innovation.",
                            color: "bg-purple-50 text-purple-600"
                        },
                        {
                            icon: <Globe size={32} />,
                            title: "Global Reach",
                            description: "Serving clients across continents with a diverse team of experts dedicated to your success.",
                            color: "bg-teal-50 text-teal-600"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-secondary leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
