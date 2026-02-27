import { motion } from "framer-motion";

const newsItems = [
    {
        title: "School advancing AI-driven drug discovery for Alzheimer's disease",
        link: "https://pharmacy.unc.edu/2026/02/18/school-advancing-ai-driven-drug-discovery-for-alzheimers-disease/",
        image: "https://pharmacy.unc.edu/wp-content/uploads/sites/1424/2026/02/AI-grant-research-team-1024x683.png",
        date: "February 18, 2026"
    },
    {
        title: "Drug discovery center integrating AI for big impact",
        link: "https://pharmacy.unc.edu/2025/10/22/drug-discovery-center-integrating-ai-for-big-impact/",
        image: "https://pharmacy.unc.edu/wp-content/uploads/sites/1424/2025/10/Popov-lab-team-scaled.jpg",
        date: "October 22, 2025"
    }
];

export default function NewsSection() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="news" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">Latest News</h2>
                    <p className="text-xl text-slate-600 max-w-xl mx-auto">
                        Recent updates and features from our lab
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {newsItems.map((news, index) => (
                        <motion.a
                            href={news.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 duration-300 group block"
                            variants={item}
                        >
                            <div className="relative h-48 sm:h-56 overflow-hidden">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-primary font-medium mb-2">{news.date}</div>
                                <h3 className="font-['Space_Grotesk'] font-semibold text-xl text-slate-800 mb-3 group-hover:text-primary transition-colors">
                                    {news.title}
                                </h3>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
