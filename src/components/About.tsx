'use client'

import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, Users, Heart, Lightbulb, Target, Smile } from 'lucide-react'

export default function About() {
  const principles = [
    {
      icon: BookOpen,
      title: "Child-Centered Learning",
      description: "Each child learns at their own pace with individualized attention and respect for their natural development."
    },
    {
      icon: Users,
      title: "Mixed Age Groups",
      description: "Children learn from peers, developing leadership skills and empathy in our carefully structured environment."
    },
    {
      icon: Heart,
      title: "Prepared Environment",
      description: "Our classrooms are thoughtfully designed to encourage independence, exploration, and discovery."
    },
    {
      icon: Lightbulb,
      title: "Hands-On Materials",
      description: "Specially designed Montessori materials that are self-correcting and promote concrete to abstract learning."
    },
    {
      icon: Target,
      title: "Freedom of Choice",
      description: "Children choose their activities, fostering intrinsic motivation and responsibility for their learning."
    },
    {
      icon: Smile,
      title: "Joy in Learning",
      description: "We cultivate a love for learning that lasts a lifetime through engaging, meaningful experiences."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
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
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 p-8">
              <div className="w-full h-full rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-800">Montessori Method</h4>
                    <p className="text-gray-600 text-sm">Authentic approach to early learning</p>
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
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
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
