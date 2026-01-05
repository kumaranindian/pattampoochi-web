'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Home, 
  TreePine, 
  BookOpen, 
  Utensils, 
  Shield, 
  Camera,
  MapPin,
  Clock,
  Users,
  Heart,
  Sparkles,
  Sun
} from 'lucide-react'

export default function Facilities() {
  const facilities = [
    {
      icon: Home,
      title: "Spacious Classrooms",
      description: "Bright, airy classrooms designed according to Montessori principles with child-sized furniture and organized learning areas.",
      features: ["Natural lighting", "Child-sized furniture", "Organized learning areas", "Safe materials"]
    },
    {
      icon: TreePine,
      title: "Outdoor Play Area",
      description: "Secure outdoor space with age-appropriate play equipment, garden area, and nature exploration zones.",
      features: ["Safe play equipment", "Garden area", "Nature exploration", "Shaded areas"]
    },
    {
      icon: BookOpen,
      title: "Library Corner",
      description: "Cozy reading nook with age-appropriate books in multiple languages to foster love for reading.",
      features: ["Multilingual books", "Comfortable seating", "Story time area", "Interactive displays"]
    },
    {
      icon: Utensils,
      title: "Nutrition Center",
      description: "Clean, hygienic kitchen facility providing healthy, nutritious meals and snacks for children.",
      features: ["Healthy meals", "Hygienic preparation", "Dietary accommodations", "Fresh ingredients"]
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Comprehensive safety measures including CCTV monitoring, secure entry systems, and trained staff.",
      features: ["CCTV monitoring", "Secure entry", "First aid trained staff", "Emergency protocols"]
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Regular health check-ups, hygiene maintenance, and wellness programs for holistic child development.",
      features: ["Health monitoring", "Hygiene protocols", "Wellness activities", "Medical support"]
    }
  ]

  const highlights = [
    {
      icon: Sparkles,
      title: "Clean & Tidy Environment",
      description: "Maintained to the highest standards of cleanliness as appreciated by our parents."
    },
    {
      icon: Sun,
      title: "Natural Light & Ventilation",
      description: "All spaces designed with ample natural light and proper ventilation for healthy learning."
    },
    {
      icon: Users,
      title: "Mixed Age Learning Spaces",
      description: "Flexible spaces that accommodate mixed-age interactions and collaborative learning."
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Conveniently located in Ponmar, easily accessible from Thalambur and surrounding areas."
    }
  ]

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A carefully prepared environment that supports your child's natural development 
            and provides a safe, nurturing space for exploration and learning.
          </p>
        </div>

        {/* Main Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {facilities.map((facility, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                  <facility.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center">{facility.title}</h3>
                <p className="text-gray-600 text-center text-sm">{facility.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm">Features:</h4>
                  <ul className="space-y-1">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What Makes Our Facilities Special
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our facilities have been praised by parents for their cleanliness, safety, 
              and child-friendly design that supports the Montessori learning environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-white shadow-md flex items-center justify-center">
                  <highlight.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">{highlight.title}</h4>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Contact Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Visit Our Campus</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">
                    No. 2, Adroit District S Thalambur, Kanniappan Nagar<br />
                    Opposite to Dabc Orchid Polachery<br />
                    Ponmar, Chennai - 600127, Tamil Nadu
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Operating Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 8:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Camera className="w-4 h-4 mr-2" />
                Schedule a Tour
              </Button>
              <Button variant="outline">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 p-8">
              <div className="w-full h-full rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                    <Home className="w-12 h-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-800">Our Campus</h4>
                    <p className="text-gray-600 text-sm">A home away from home</p>
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                      <span>Safe</span>
                      <span>•</span>
                      <span>Clean</span>
                      <span>•</span>
                      <span>Nurturing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gray-900 rounded-2xl p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to See Our Facilities?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We invite you to visit our campus and experience the warm, nurturing environment 
            we've created for your child's growth and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Book a Visit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
