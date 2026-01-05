'use client'

import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Youtube,
  Heart,
  ExternalLink
} from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact', href: '#contact' }
  ]

  const programs = [
    { name: 'Toddler Program', href: '#programs' },
    { name: 'Primary Program', href: '#programs' },
    { name: 'Kindergarten Prep', href: '#programs' },
    { name: 'Summer Camp', href: '#programs' }
  ]

  const resources = [
    { name: 'Admission Process', href: '#contact' },
    { name: 'School Calendar', href: '#contact' },
    { name: 'Parent Handbook', href: '#contact' },
    { name: 'Virtual Tour', href: '#facilities' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Pattaampoochi</h3>
                <p className="text-sm text-gray-400">Montessori Pre-School</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nurturing young minds through authentic Montessori education in Chennai. 
              We believe every child is unique and deserves an environment that fosters 
              independence, creativity, and lifelong learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link 
                    href={program.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>No. 2, Adroit District S Thalambur</p>
                  <p>Kanniappan Nagar, Ponmar</p>
                  <p>Chennai - 600127, Tamil Nadu</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>+91 98765 43210</p>
                  <p>+91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>info@pattaampoochi.com</p>
                  <p>admissions@pattaampoochi.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <div className="grid grid-cols-2 gap-4">
                {resources.map((resource, index) => (
                  <Link 
                    key={index}
                    href={resource.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center"
                  >
                    {resource.name}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">School Hours</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                <p><span className="font-medium">Saturday:</span> 8:00 AM - 1:00 PM</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© 2024 Pattaampoochi Montessori Pre-School. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Admissions Policy
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 flex items-center justify-center">
              Made with <Heart className="w-3 h-3 text-red-500 mx-1" /> for children's bright future
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
