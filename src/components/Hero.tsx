'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Users, Award, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                <Star className="w-4 h-4 mr-1" />
                Rated 5.0/5 on JustDial
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Nurturing Young
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  {' '}Minds{' '}
                </span>
                Through Montessori
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Pattaampoochi Montessori Pre-School, we believe every child is unique. 
                Our child-centered approach fosters independence, creativity, and a lifelong love for learning 
                in a nurturing environment.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">200+</div>
                <div className="text-sm text-gray-600">Happy Children</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-gray-600">Expert Teachers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Schedule a Visit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                Download Brochure
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>50+ Reviews</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                <span>Certified Teachers</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                <span>Safe Environment</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-200 to-green-200 p-8">
                <div className="w-full h-full rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">P</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-800">Pattaampoochi</h3>
                      <p className="text-gray-600">Montessori Pre-School</p>
                      <p className="text-sm text-gray-500">Chennai, Ponmar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-purple-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
