import { Trees, Shield, Waves, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Trees,
    title: 'Eco-sensitive Zones',
    description: 'Protected forest areas and wildlife corridors are automatically excluded from mining permissions.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Forest Proximity Alerts',
    description: 'Real-time alerts when mining activities approach protected forest boundaries.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Waves,
    title: 'River Protection',
    description: 'Minimum buffer zones enforced along river banks to prevent erosion and habitat destruction.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    description: 'Compliance tracking for sustainable mining guidelines and environmental impact assessments.',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function EnvironmentalSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm mb-6">
            Environmental Safety
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">
            Protecting Telangana's Natural Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced environmental monitoring ensures mining activities remain sustainable and compliant with ecological standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl mb-3">Zero-Tolerance for Illegal Mining</h3>
            <p className="text-green-50 mb-6">
              Our AI-powered monitoring system detects unauthorized activities in real-time, ensuring complete compliance with environmental regulations.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                <div className="text-2xl mb-1">24/7</div>
                <div className="text-sm text-green-100">Monitoring</div>
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                <div className="text-2xl mb-1">100%</div>
                <div className="text-sm text-green-100">Coverage</div>
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                <div className="text-2xl mb-1">&lt;5min</div>
                <div className="text-sm text-green-100">Alert Time</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
