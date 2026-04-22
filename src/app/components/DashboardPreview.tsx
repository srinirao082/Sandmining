import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Package, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const barData = [
  { month: 'Jan', quantity: 45000 },
  { month: 'Feb', quantity: 52000 },
  { month: 'Mar', quantity: 48000 },
  { month: 'Apr', quantity: 61000 },
  { month: 'May', quantity: 55000 },
  { month: 'Jun', quantity: 67000 },
];

const lineData = [
  { week: 'W1', extraction: 12000, replenishment: 8000 },
  { week: 'W2', extraction: 15000, replenishment: 10000 },
  { week: 'W3', extraction: 13000, replenishment: 12000 },
  { week: 'W4', extraction: 18000, replenishment: 14000 },
];

const pieData = [
  { name: 'Construction', value: 45 },
  { name: 'Infrastructure', value: 30 },
  { name: 'Manufacturing', value: 15 },
  { name: 'Others', value: 10 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

export function DashboardPreview() {
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
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm mb-6">
            Dashboard Preview
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">
            District Analytics at a Glance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive insights for each district with real-time data, trends, and predictive analytics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl shadow-gray-300/50 p-8 border border-gray-100"
        >
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl text-gray-900 mb-1">Khammam District</h3>
                <p className="text-gray-500">Mining Activity Dashboard</p>
              </div>
              <div className="flex gap-2">
                <div className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm">Active</div>
                <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm">Q2 2026</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Package className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-blue-700">Total Orders</span>
                </div>
                <div className="text-3xl text-blue-900">1,247</div>
                <div className="text-sm text-blue-600 mt-1">+12% from last month</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-700">Quantity (MT)</span>
                </div>
                <div className="text-3xl text-green-900">328K</div>
                <div className="text-sm text-green-600 mt-1">+8% from last month</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-purple-700">Active Mines</span>
                </div>
                <div className="text-3xl text-purple-900">23</div>
                <div className="text-sm text-purple-600 mt-1">All compliant</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg text-gray-900 mb-4">Monthly Extraction Trends</h4>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Bar dataKey="quantity" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg text-gray-900 mb-4">Extraction vs Replenishment</h4>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="week" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Line type="monotone" dataKey="extraction" stroke="#ef4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="replenishment" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg text-gray-900 mb-4">Sand Usage by Sector</h4>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-center">
              <h4 className="text-lg text-gray-900 mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Avg. Daily Extraction</span>
                  <span className="text-gray-900">2,340 MT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Peak Extraction Day</span>
                  <span className="text-gray-900">Monday</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Compliance Score</span>
                  <span className="text-green-600">96/100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Environmental Index</span>
                  <span className="text-green-600">Excellent</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
