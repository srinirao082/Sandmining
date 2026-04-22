import { CloudRain, Waves, Navigation2, Layers, Hammer, RefreshCcw, CheckCircle, FileText } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  { icon: CloudRain, label: 'Rainfall', color: 'from-blue-400 to-blue-600' },
  { icon: Waves, label: 'River Flow', color: 'from-cyan-400 to-cyan-600' },
  { icon: Navigation2, label: 'Sediment Transport', color: 'from-teal-400 to-teal-600' },
  { icon: Layers, label: 'Sand Deposition', color: 'from-green-400 to-green-600' },
  { icon: Hammer, label: 'Mining', color: 'from-orange-400 to-orange-600' },
  { icon: RefreshCcw, label: 'Replenishment', color: 'from-purple-400 to-purple-600' },
  { icon: CheckCircle, label: 'Compliance', color: 'from-emerald-400 to-emerald-600' },
  { icon: FileText, label: 'DSR Report', color: 'from-indigo-400 to-indigo-600' },
];

export function WorkflowSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm mb-6">
            Complete Workflow
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">
            End-to-End Mining Lifecycle
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From natural processes to regulatory compliance — a comprehensive view of the entire sand mining ecosystem.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-indigo-200 transform -translate-y-1/2 z-0" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-gray-300/30 mb-3 hover:scale-110 transition-transform`}>
                  <step.icon className="w-9 h-9 text-white" />
                </div>
                <div className="text-center text-sm text-gray-700">{step.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full border border-gray-200">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white" />
            </div>
            <span className="text-sm text-gray-600 ml-2">Integrated monitoring across all stages</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
