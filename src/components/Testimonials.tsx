'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Aarav (4 years)",
      rating: 5,
      text: "The excellent environment for young learners at Pattaampoochi is remarkable. The teachers are incredibly creative and patient, making learning a joyful experience for my son.",
      highlight: "Excellent environment for young learners"
    },
    {
      name: "Rajesh Kumar",
      role: "Parent of Ananya (3 years)",
      rating: 5,
      text: "I'm impressed by the school's focus on overall development. The supportive staff is truly committed to their work, and it shows in how well the children are cared for.",
      highlight: "Focus on overall development"
    },
    {
      name: "Meera Patel",
      role: "Parent of Arjun (5 years)",
      rating: 5,
      text: "The clean and tidy facilities of the school are exceptional. As a parent, it gives me peace of mind knowing my child is in such a well-maintained environment.",
      highlight: "Clean and tidy facilities"
    },
    {
      name: "Suresh Reddy",
      role: "Parent of Kavya (4 years)",
      rating: 5,
      text: "The Montessori approach here is authentic and well-implemented. My daughter has become more independent and confident since joining Pattaampoochi.",
      highlight: "Authentic Montessori approach"
    },
    {
      name: "Lakshmi Nair",
      role: "Parent of Dev (3 years)",
      rating: 5,
      text: "The teachers genuinely care about each child's individual needs. The mixed-age environment has helped my son develop leadership skills and empathy.",
      highlight: "Individual attention and care"
    },
    {
      name: "Arun Krishnan",
      role: "Parent of Riya (5 years)",
      rating: 5,
      text: "Excellent preparation for primary school while maintaining the joy of learning. The transition support they provide is outstanding.",
      highlight: "Excellent school preparation"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50 relative overflow-hidden">
      {/* Playful Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-12 w-16 h-16 bg-pink-200 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-20 right-16 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-14 h-14 bg-green-200 rounded-full opacity-25 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Floating Hearts and Stars */}
        <div className="absolute top-24 right-32 text-2xl text-pink-300 animate-pulse">💖</div>
        <div className="absolute bottom-32 left-20 text-xl text-yellow-300 animate-bounce" style={{animationDelay: '1.5s'}}>⭐</div>
        <div className="absolute top-1/2 left-16 text-lg text-blue-300 animate-pulse" style={{animationDelay: '2.5s'}}>🌟</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Parents Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what parents in our community 
            have to say about their experience with Pattaampoochi Montessori.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-600">• 50+ Reviews on JustDial</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm transform hover:-translate-y-2 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 text-3xl animate-bounce" style={{animationDelay: `${index * 0.3}s`}}>
                {index % 4 === 0 ? '🌟' : index % 4 === 1 ? '💖' : index % 4 === 2 ? '🎈' : '🦋'}
              </div>
              <div className="absolute top-2 left-2 opacity-20">
                <div className="flex space-x-1">
                  <span className="text-sm animate-pulse" style={{animationDelay: '0s'}}>👶</span>
                  <span className="text-sm animate-pulse" style={{animationDelay: '0.5s'}}>📚</span>
                  <span className="text-sm animate-pulse" style={{animationDelay: '1s'}}>🎨</span>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4 relative z-10">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-pink-500 opacity-60" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Highlight */}
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-blue-800 font-medium text-sm">
                    ✨ {testimonial.highlight}
                  </p>
                </div>

                {/* Author */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">5.0</div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">50+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
              <div className="text-xs text-gray-500">On JustDial</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
              <div className="text-xs text-gray-500">Trusted by community</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
              <div className="text-xs text-gray-500">No negative reviews</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Happy Parent Community
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the difference that authentic Montessori education can make 
            in your child's development. Schedule a visit today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Visit
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
