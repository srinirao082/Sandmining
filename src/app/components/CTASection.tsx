import { MapPin, BarChart3, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 400">
          <circle cx="100" cy="100" r="80" fill="white" opacity="0.1" />
          <circle cx="900" cy="300" r="120" fill="white" opacity="0.1" />
          <circle cx="500" cy="200" r="60" fill="white" opacity="0.15" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4">
            Ready to Transform Sand Mining Intelligence?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join government officials across Telangana using TSMIP for sustainable mining decisions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <button className="bg-white hover:bg-gray-50 text-gray-900 rounded-2xl p-8 transition-all shadow-lg hover:shadow-xl group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl mb-2">Explore GIS Platform</h3>
            <p className="text-gray-600 text-sm mb-4">
              Interactive maps with real-time mining zone monitoring
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <span>Launch Map</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          <button className="bg-white hover:bg-gray-50 text-gray-900 rounded-2xl p-8 transition-all shadow-lg hover:shadow-xl group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl mb-2">Access Dashboard</h3>
            <p className="text-gray-600 text-sm mb-4">
              Comprehensive analytics and AI-powered insights
            </p>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <span>View Analytics</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          <button className="bg-white hover:bg-gray-50 text-gray-900 rounded-2xl p-8 transition-all shadow-lg hover:shadow-xl group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl mb-2">Generate DSR Reports</h3>
            <p className="text-gray-600 text-sm mb-4">
              District Survey Reports with one-click generation
            </p>
            <div className="flex items-center justify-center gap-2 text-purple-600">
              <span>Create Report</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-200 mb-4">Trusted by</p>
          <div className="flex gap-8 justify-center items-center flex-wrap">
            <div className="text-white/60 text-sm">Telangana State Mineral Development Corporation</div>
            <div className="w-1 h-1 rounded-full bg-white/40" />
            <div className="text-white/60 text-sm">Department of Mines & Geology</div>
            <div className="w-1 h-1 rounded-full bg-white/40" />
            <div className="text-white/60 text-sm">District Administration</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
