import { Layers, Satellite, Navigation, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Layers,
    title: 'Multi-layer GIS Analysis',
    description: 'Rivers, forests, EO lands, and mining zones in one integrated view',
  },
  {
    icon: Satellite,
    title: 'Satellite Monitoring',
    description: 'Real-time satellite imagery for change detection and compliance',
  },
  {
    icon: Navigation,
    title: 'Geo-fencing of Mining Zones',
    description: 'Automated alerts for unauthorized activities near protected areas',
  },
  {
    icon: Zap,
    title: 'Real-time Spatial Insights',
    description: 'Instant analytics on sand deposits, extraction, and replenishment',
  },
];

export function GISSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm mb-6">
              GIS Intelligence
            </div>
            <h2 className="text-4xl text-gray-900 mb-6">
              Spatial Intelligence at Your Fingertips
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Advanced geospatial technology for comprehensive monitoring and analysis of sand mining activities across Telangana.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 p-8">
                <div className="w-full h-full bg-white rounded-2xl shadow-inner overflow-hidden relative">
                  <svg className="w-full h-full" viewBox="0 0 600 450">
                    <defs>
                      <linearGradient id="river" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>

                    <rect x="0" y="0" width="600" height="450" fill="#f0f9ff" />

                    <path
                      d="M 50 100 Q 150 80 250 120 T 450 100 L 450 200 Q 350 220 250 180 T 50 200 Z"
                      fill="url(#river)"
                    />

                    <circle cx="150" cy="150" r="30" fill="#22c55e" opacity="0.3" />
                    <circle cx="350" cy="160" r="30" fill="#22c55e" opacity="0.3" />

                    <circle cx="250" cy="140" r="20" fill="#ef4444" opacity="0.4" />

                    <rect x="100" y="280" width="60" height="40" fill="#f59e0b" opacity="0.5" rx="4" />
                    <rect x="400" y="300" width="60" height="40" fill="#f59e0b" opacity="0.5" rx="4" />

                    <path d="M 80 380 L 520 380" stroke="#10b981" strokeWidth="3" strokeDasharray="5,5" opacity="0.6" />
                  </svg>

                  <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-xs text-gray-600">Rivers</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs text-gray-600">Active Zones</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-xs text-gray-600">Restricted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
