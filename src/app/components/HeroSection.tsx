import { MapPin, LineChart } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3F] via-[#1a237e] to-[#4a148c]" />

      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 800">
          <path
            d="M 100 400 Q 200 300 300 400 T 500 400 T 700 400 T 900 400"
            stroke="white"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M 150 450 Q 250 350 350 450 T 550 450 T 750 450 T 950 450"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
          />
          <circle cx="200" cy="400" r="4" fill="white" opacity="0.6" />
          <circle cx="400" cy="400" r="4" fill="white" opacity="0.6" />
          <circle cx="600" cy="400" r="4" fill="white" opacity="0.6" />
          <circle cx="800" cy="400" r="4" fill="white" opacity="0.6" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20">
            <MapPin className="w-4 h-4 text-blue-200" />
            <span className="text-sm text-white/90">Government of Telangana</span>
          </div>

          <h1 className="text-6xl tracking-tight text-white mb-6 max-w-5xl mx-auto leading-tight">
            Smart Sand Mining Intelligence for Telangana
          </h1>

          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            GIS-powered monitoring, AI-driven insights, and sustainable mining decisions
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-xl hover:bg-blue-50 transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Explore GIS Map
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2">
              <LineChart className="w-5 h-5" />
              View Dashboard
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
