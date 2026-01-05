'use client'

import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, Users, Heart, Lightbulb, Target, Smile } from 'lucide-react'

export default function About() {
  const principles = [
    {
      icon: BookOpen,
      title: "Child-Centered Learning",
      description: "Each child learns at their own pace with individualized attention and respect for their natural development.",
      emoji: "👶",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: Users,
      title: "Mixed Age Groups",
      description: "Children learn from peers, developing leadership skills and empathy in our carefully structured environment.",
      emoji: "👫",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Heart,
      title: "Prepared Environment",
      description: "Our classrooms are thoughtfully designed to encourage independence, exploration, and discovery.",
      emoji: "🏫",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Lightbulb,
      title: "Hands-On Materials",
      description: "Specially designed Montessori materials that are self-correcting and promote concrete to abstract learning.",
      emoji: "🧩",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Target,
      title: "Freedom of Choice",
      description: "Children choose their activities, fostering intrinsic motivation and responsibility for their learning.",
      emoji: "🎯",
      color: "from-purple-400 to-indigo-400"
    },
    {
      icon: Smile,
      title: "Joy in Learning",
      description: "We cultivate a love for learning that lasts a lifetime through engaging, meaningful experiences.",
      emoji: "😊",
      color: "from-red-400 to-pink-400"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-20 h-20 bg-pink-200 rounded-full opacity-25 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Our Montessori Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded on the principles of Dr. Maria Montessori, we create an environment where children 
            naturally develop independence, confidence, and a genuine love for learning.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Pattaampoochi Montessori Pre-School was established with a vision to provide quality 
                early childhood education in Chennai's Ponmar area. Our name "Pattaampoochi" reflects 
                the beautiful transformation we witness in every child - like a butterfly emerging 
                from its cocoon.
              </p>
              <p>
                Located in the heart of Thalambur, we serve families seeking an authentic Montessori 
                experience. Our dedicated team of certified Montessori educators creates a nurturing 
                environment where children aged 2-6 years can explore, discover, and grow at their own pace.
              </p>
              <p>
                With over 5 years of experience and 50+ positive reviews, we have established ourselves 
                as a trusted partner in your child's educational journey. Our commitment to excellence 
                and child-centered approach has made us a preferred choice for discerning parents.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 p-8 shadow-2xl">
              <div className="w-full h-full rounded-xl bg-white/40 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                {/* Montessori Materials Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-6 h-6 bg-red-400 rounded-sm transform rotate-12 animate-pulse"></div>
                  <div className="absolute top-8 right-6 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-8 left-6 w-3 h-6 bg-green-400 rounded-sm animate-pulse" style={{animationDelay: '2s'}}></div>
                  <div className="absolute bottom-4 right-4 w-5 h-5 bg-yellow-400 transform rotate-45 animate-bounce"></div>
                  <div className="absolute top-1/2 left-1/2 w-8 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                <div className="text-center space-y-4 relative z-10">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-lg animate-pulse">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-800">Montessori Method</h4>
                    <p className="text-gray-600 text-sm">Authentic approach to early learning</p>
                    <div className="flex justify-center space-x-1 mt-2">
                      <span className="text-lg animate-bounce" style={{animationDelay: '0s'}}>🔴</span>
                      <span className="text-lg animate-bounce" style={{animationDelay: '0.2s'}}>🟡</span>
                      <span className="text-lg animate-bounce" style={{animationDelay: '0.4s'}}>🟢</span>
                      <span className="text-lg animate-bounce" style={{animationDelay: '0.6s'}}>🔵</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Montessori Principles */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Montessori Principles We Follow
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our educational approach is built on time-tested Montessori principles that respect 
              the child as an individual and support their natural development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center space-y-4 relative">
                  <div className="absolute -top-3 -right-3 text-3xl animate-bounce" style={{animationDelay: `${index * 0.2}s`}}>
                    {principle.emoji}
                  </div>
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${principle.color} flex items-center justify-center shadow-lg`}>
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{principle.title}</h4>
                  <p className="text-gray-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-500 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Our Mission</h4>
              <p className="text-gray-700">
                To provide an authentic Montessori education that nurtures each child's natural 
                curiosity, independence, and love for learning in a prepared environment that 
                respects their individual development.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-500 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Our Vision</h4>
              <p className="text-gray-700">
                To be the leading Montessori pre-school in Chennai, creating confident, 
                independent, and compassionate global citizens who are prepared for lifelong 
                learning and positive contribution to society.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
