import { Linkedin, Twitter, Github, Globe } from 'lucide-react'
import logo from '../mhk-tech_inc.png'

const Footer = ({ onNavigate }) => {
    return (
        <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100 text-secondary">
            <div className="container-custom mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <button onClick={() => onNavigate('home')} className="flex items-center gap-3 mb-6">
                            <img src={logo} alt="MHK Tech Inc" className="h-20 w-auto object-contain opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
                            <span className="font-bold text-xl text-primary"></span>
                        </button>
                        <p className="text-sm leading-relaxed mb-6">
                            Pioneering AI, Cloud, and Data Technologies for the modern enterprise.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/mhktechinc/" className="p-2 bg-white rounded-full shadow-sm hover:text-accent transition-colors"><Linkedin size={18} /></a>
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-accent transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-accent transition-colors"><Github size={18} /></a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-bold text-primary mb-6">Company</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><button onClick={() => onNavigate('events')} className="hover:text-accent transition-colors"> Events</button></li>
                            <li><button onClick={() => onNavigate('careers')} className="hover:text-accent transition-colors">Careers</button></li>
                            <li><button onClick={() => onNavigate('home')} className="hover:text-accent transition-colors">Blog</button></li>
                            <li><button onClick={() => onNavigate('contact')} className="hover:text-accent transition-colors">Contact</button></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="font-bold text-primary mb-6">Services</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><button onClick={() => onNavigate('home')} className="hover:text-accent transition-colors">AI Solutions</button></li>
                            <li><button onClick={() => onNavigate('home')} className="hover:text-accent transition-colors">Cloud Architecture</button></li>
                            <li><button onClick={() => onNavigate('home')} className="hover:text-accent transition-colors">Data Engineering</button></li>
                            <li><button onClick={() => onNavigate('contact')} className="hover:text-accent transition-colors">IT Consulting</button></li>
                        </ul>
                    </div>

                    {/* Links Column 3 */}
                    <div>
                        <h4 className="font-bold text-primary mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                    {/* Locations Column */}
                    <div>
                        <h4 className="font-bold text-primary mb-6">Our Locations</h4>
                        <div className="space-y-6 text-sm font-medium text-secondary">
                            <div>
                                <h5 className="font-bold text-primary mb-1">USA</h5>
                                <p>20008 Champion Forest Dr, STE 403,<br />Spring, TX 77379 USA</p>
                            </div>
                            <div>
                                <h5 className="font-bold text-primary mb-1">INDIA</h5>
                                <p>Road No 36 & 37 Beside Madhapur Metrostation Jubilee Hills,<br />Hyderabad, Telangana, 500033 India</p>
                            </div>
                            <div>
                                <h5 className="font-bold text-primary mb-1">CANADA</h5>
                                <p>132 Daylily Lane, Kitchener,<br />Ontario, Canada, N2R 0L7</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; 2025 MHK Tech Inc. All rights reserved.</p>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <Globe size={16} />
                        <span>English (US)</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
