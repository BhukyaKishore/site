import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, ArrowRight, Linkedin } from 'lucide-react'
import contactImage from '../assets/contact.jpeg'

const Contact = () => {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">Get in Touch</span>
                            <h1 className="text-5xl font-bold mb-8 text-primary">Take The Lead</h1>
                            <p className="text-xl text-secondary mb-12 leading-relaxed">
                                Know about us or simply get in touch. We are always ready to start a conversation about how we can help your business grow.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-accent shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg mb-1">Our Locations</h3>
                                        <div className="space-y-4 text-secondary">
                                            <div>
                                                <strong className="block text-primary">USA</strong>
                                                <p>20008 Champion Forest Dr, STE 403, Spring, TX 77379</p>
                                            </div>
                                            <div>
                                                <strong className="block text-primary">India</strong>
                                                <p>Road No 36 & 37 Beside Madhapur Metrostation Jubilee Hills, Hyderabad, Telangana, 500033</p>
                                            </div>
                                            <div>
                                                <strong className="block text-primary">Canada</strong>
                                                <p>132 Daylily Lane, Kitchener, Ontario, Canada, N2R 0L7</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem]"
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-primary mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-primary mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-primary mb-2">Subject</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="How can we help?" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                                </div>
                                <button type="button" className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20 flex items-center justify-center gap-2">
                                    Send Message <ArrowRight size={20} />
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-4">
                                    Note: We don’t accept job applications in this form. For career-related inquiries, check out our Careers page.
                                </p>
                            </form>
                        </motion.div>
                    </div>

                    {/* CEO Section */}
                    <div className="border-t border-gray-100 pt-20">
                        <div className="flex flex-col md:flex-row items-center gap-12 bg-surface p-8 md:p-16 rounded-[3rem] shadow-sm">
                            <div className="w-full md:w-1/3 flex justify-center">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                                    <img
                                        src={contactImage}
                                        alt="Rajesh Kota"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 text-center md:text-left">
                                <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">Leadership</span>
                                <h2 className="text-4xl font-bold text-primary mb-2">Rajesh Kota</h2>
                                <p className="text-xl text-secondary font-medium mb-6">CEO & Founder</p>
                                <p className="text-lg text-secondary leading-relaxed mb-8 max-w-2xl">
                                    "Our mission is to bridge the gap between complex technology and business growth. At MHK Tech, we don't just build software; we build the future of enterprises through innovation, integrity, and client success."
                                </p>
                                <div className="flex items-center justify-center md:justify-start gap-4">
                                    <a href="https://www.linkedin.com/in/kotarajesh/" className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
                                        <Linkedin size={24} />
                                    </a>
                                    <a href="mailto:r.kota@mhktechinc.com" className="p-3 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-100 transition-colors">
                                        <Mail size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact
