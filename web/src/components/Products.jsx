import { motion } from 'framer-motion'
import { ArrowUpRight, FileText } from 'lucide-react'
import toreoImage from '../assets/Toreo_Data.png'

const Products = () => {
    return (
        <div className="min-h-screen bg-off-white pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-white border-b border-gray-100">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl -z-10 opacity-60" />

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-4 block">Innovation Logic</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-primary">
                            Our Products
                        </h1>
                        <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
                            Custom-Built Intelligent Data Products designed to synchronize your enterprise at scale.
                        </p>
                    </motion.div>
                </div>
            </section>
            
            {/* Product Showcase: Toreo Data */}
            <section className="py-24 relative">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl mx-auto"
                    >
                        {/* Main Product Feature */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                            {/* Product Visual - Image */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent to-blue-300 blur-[80px] opacity-20 rounded-full transition-opacity group-hover:opacity-30" />
                                <div className="relative bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-xl shadow-blue-500/5 overflow-hidden">
                                    <img
                                        src={toreoImage}
                                        alt="Toreo Data"
                                        className="w-full h-auto rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Product Info */}
                            <div>
                                <h2 className="text-4xl font-bold text-primary mb-6">Toreo Data Connector</h2>
                                <h3 className="text-xl font-semibold text-accent mb-4">Data Connectors for Effortless Data Synchronization</h3>
                                <p className="text-lg text-secondary leading-relaxed mb-8">
                                    Data connectors simplify the most complex data integration & synchronization challenges facing the industry today. Toreo is known as the “art of bull fighting” and we’re doing just that with Toreo Data. Enabling connectivity between diverse platforms while not compromising on accuracy, efficiency and security are the mark of an accomplished data connector.
                                </p>
                                <p className="text-lg text-secondary leading-relaxed mb-10">
                                    The Toreo Data Connector is an ODBC driver that connects the data stored in an SAP BusinessObjects Universe with data visualization solutions like Microsoft Power BI, Qlik (QlikView & Qlik Sense), Spotfire or Tableau. Experience seamless data synchronization with our high-quality Data Connector.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-700 transition-all shadow-lg shadow-slate-200">
                                        Learn More <ArrowUpRight size={20} />
                                    </button>
                                    <a
                                        href="https://6a724ab6-9751-4602-a666-c678b090d8d4.filesusr.com/ugd/474ccd_b6fcf6b31f2c4b4a84699fc26907b717.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-red-50 text-red-600 border border-red-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-red-100 transition-all"
                                    >
                                        <FileText size={20} />
                                        Download Brochure
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Video Section */}
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 border border-gray-100 bg-black relative aspect-video">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                src="https://video.wixstatic.com/video/517fcc_59ec6c4268b841dc809afd767a297e7c/720p/mp4/file.mp4"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none flex items-end p-12">
                                <div className="text-white max-w-2xl">
                                    <h3 className="text-3xl font-bold mb-2">See Toreo in Action</h3>
                                    <p className="text-white/80 text-lg">Experience the power of seamless data synchronization.</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Products
