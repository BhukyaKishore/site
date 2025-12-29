import { motion } from 'framer-motion'
import { Heart, Shield, Zap, Smile, Users, Award, Star, Lightbulb, BookOpen, Briefcase, Clock, MapPin } from 'lucide-react'

const values = [
    {
        icon: <Lightbulb size={32} />,
        title: "Innovation",
        description: "Let’s push the envelope, Let’s think outside the box!",
        color: "bg-blue-50 text-blue-500"
    },
    {
        icon: <Shield size={32} />,
        title: "Trustworthiness",
        description: "Dependability & trustworthiness in all facets of our business.",
        color: "bg-purple-50 text-purple-500"
    },
    {
        icon: <Zap size={32} />,
        title: "Agility",
        description: "Needs and technologies are always evolving, so are we!",
        color: "bg-yellow-50 text-yellow-500"
    },
    {
        icon: <Smile size={32} />,
        title: "Fun",
        description: "We sure want to put some fun in our workplace, let’s face it, the IT industry can be a fairly serious business.",
        color: "bg-pink-50 text-pink-500"
    },
    {
        icon: <Users size={32} />,
        title: "Customer satisfaction",
        description: "Prioritizing client needs and going above and beyond their expectations.",
        color: "bg-green-50 text-green-500"
    },
    {
        icon: <Award size={32} />,
        title: "Professionalism",
        description: "We strongly uphold the highest moral and ethical standards for our employees.",
        color: "bg-indigo-50 text-indigo-500"
    },
    {
        icon: <Star size={32} />,
        title: "Quality over Quantity",
        description: "Continuously aiming for excellence and preparing our team for it.",
        color: "bg-orange-50 text-orange-500"
    },
    {
        icon: <Lightbulb size={32} />,
        title: "Creativity",
        description: "Let’s get creative! An intriguing answer is often an outcome of creativity.",
        color: "bg-red-50 text-red-500"
    },
    {
        icon: <BookOpen size={32} />,
        title: "Learning",
        description: "Constantly developing ourselves as people and as a business. Ground-breaking results are a product of a seamless collaboration.",
        color: "bg-teal-50 text-teal-500"
    }
]

const openings = [
    {
        title: "Senior Full Stack Engineer",
        type: "Full-Time",
        location: "Remote / Hybrid",
        department: "Engineering"
    },
    {
        title: "Data Scientist (AI Specialization)",
        type: "Contract",
        location: "Hyderabad, India",
        department: "Data Team"
    },
    {
        title: "Product Marketing Manager",
        type: "Full-Time",
        location: "Texas, USA",
        department: "Marketing"
    }
]

const Careers = () => {
    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-primary">
                            The MHK TEAM
                        </h1>
                        <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
                            Join our team of innovators and problem-solvers and be a part of our future.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">Our Culture</span>
                        <h2 className="text-4xl font-bold text-primary">Our Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${value.color}`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                                <p className="text-secondary leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">Join Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Current Openings</h2>
                        <p className="text-lg text-secondary max-w-2xl mx-auto">
                            We are looking for talented individuals to join our growing team.
                        </p>
                    </div>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        {openings.map((job, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-secondary">
                                        <span className="flex items-center gap-1"><Briefcase size={16} /> {job.department}</span>
                                        <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>
                                        <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                                    </div>
                                </div>
                                <a href="mailto:careers@mhktechinc.com" className="px-6 py-3 bg-white border-2 border-accent text-accent font-bold rounded-xl hover:bg-accent hover:text-white transition-all text-center">
                                    Apply Now
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-secondary mb-8">
                            Don't see a role that fits? We are always hiring great talent.
                        </p>
                        <a href="mailto:careers@mhktechinc.com" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-accent rounded-full hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent shadow-lg shadow-accent/25">
                            Email Your Resume
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Careers
