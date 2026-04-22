import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4">TSMIP</h3>
            <p className="text-sm text-gray-400">
              Telangana Sand Mining Intelligence Platform - Smart monitoring for sustainable mining.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4 text-sm">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">GIS Map</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reports</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>support@tsmip.gov.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 40 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400 text-center">
          <p>© 2026 Telangana Sand Mining Intelligence Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
