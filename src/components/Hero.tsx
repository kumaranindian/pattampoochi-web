'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Users, Award, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-blue-300 rounded-full opacity-25 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-green-300 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-18 h-18 bg-purple-300 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-1/4 w-8 h-8 bg-orange-400 transform rotate-45 opacity-25 animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-40 left-1/2 w-6 h-12 bg-red-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-40 right-1/4 w-10 h-10 bg-indigo-400 opacity-25 animate-bounce" style={{animationDelay: '3s', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
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

          {/* Right Content - Enhanced Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-200 via-yellow-200 to-blue-200 p-8 shadow-2xl">
                <div className="w-full h-full rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  {/* Montessori Elements Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-red-500 rounded-sm transform rotate-12"></div>
                    <div className="absolute top-8 right-6 w-6 h-6 bg-blue-500 rounded-full"></div>
                    <div className="absolute bottom-8 left-6 w-4 h-8 bg-green-500 rounded-sm"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 bg-yellow-500 transform rotate-45"></div>
                  </div>
                  
                  <div className="text-center space-y-4 relative z-10">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-lg animate-pulse">
                      <span className="text-4xl font-bold text-white">🦋</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-800">Pattaampoochi</h3>
                      <p className="text-gray-600 font-medium">Montessori Pre-School</p>
                      <p className="text-sm text-gray-500">Chennai, Ponmar</p>
                      <div className="flex justify-center space-x-2 mt-3">
                        <span className="text-2xl animate-bounce" style={{animationDelay: '0s'}}>🎨</span>
                        <span className="text-2xl animate-bounce" style={{animationDelay: '0.2s'}}>📚</span>
                        <span className="text-2xl animate-bounce" style={{animationDelay: '0.4s'}}>🧩</span>
                        <span className="text-2xl animate-bounce" style={{animationDelay: '0.6s'}}>🌱</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-70 animate-pulse flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-300 rounded-full opacity-70 animate-bounce flex items-center justify-center">
              <span className="text-xl">🎈</span>
            </div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-purple-300 rounded-full opacity-70 animate-spin flex items-center justify-center" style={{animationDuration: '4s'}}>
              <span className="text-sm">🌈</span>
            </div>
            <div className="absolute top-1/4 -right-6 w-14 h-14 bg-green-300 rounded-full opacity-60 animate-bounce flex items-center justify-center" style={{animationDelay: '1s'}}>
              <span className="text-lg">🎯</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
