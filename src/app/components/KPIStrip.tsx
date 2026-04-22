import { TrendingUp, MapPin, ShieldAlert, Droplets, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const kpis = [
  {
    label: 'Total Sand Extracted',
    value: '2.4M',
    unit: 'MT',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-600',
  },
  {
    label: 'Active Mining Zones',
    value: '147',
    unit: 'sites',
    icon: MapPin,
    color: 'from-green-500 to-emerald-500',
    textColor: 'text-green-600',
  },
  {
    label: 'Restricted Zones',
    value: '32',
    unit: 'areas',
    icon: ShieldAlert,
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-600',
  },
  {
    label: 'Replenishment Rate',
    value: '68',
    unit: '%',
    icon: Droplets,
    color: 'from-cyan-500 to-blue-500',
    textColor: 'text-cyan-600',
  },
  {
    label: 'Environmental Compliance',
    value: '94',
    unit: '%',
    icon: CheckCircle2,
    color: 'from-emerald-500 to-green-500',
    textColor: 'text-emerald-600',
  },
];

export function KPIStrip() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-gray-900 mb-3">Live Data Snapshot</h2>
          <p className="text-lg text-gray-600">Real-time metrics from across Telangana</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.color} flex items-center justify-center mb-4`}>
                <kpi.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-3xl mb-1 ${kpi.textColor}`}>
                {kpi.value}
                <span className="text-lg ml-1">{kpi.unit}</span>
              </div>
              <div className="text-sm text-gray-500">{kpi.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
