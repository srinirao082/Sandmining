import { Brain, TrendingUp, Droplets, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

const cards = [
  {
    icon: Brain,
    title: 'Sand Demand Prediction',
    description: 'AI models predict sand demand based on building permits, infrastructure projects, and historical consumption patterns.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Droplets,
    title: 'Replenishment Modeling',
    description: 'Advanced hydrological models estimate natural sand replenishment rates based on rainfall and river flow data.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Hydrology Flow Analysis',
    description: 'Real-time analysis of sediment transport and deposition patterns across river networks in Telangana.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Detection',
    description: 'Automated detection of illegal mining activities, over-extraction, and environmental violations using ML algorithms.',
    color: 'from-orange-500 to-red-500',
  },
];

export function AIAnalyticsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm mb-6">
            AI + Analytics
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">
            Intelligent Insights, Powered by AI
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Machine learning and predictive analytics for proactive decision-making and sustainable mining practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all border border-gray-100 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
