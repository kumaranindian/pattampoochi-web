'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Baby, Users, GraduationCap, Clock, Calendar, Star } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      icon: Baby,
      title: "Toddler Program",
      ageRange: "18 months - 3 years",
      duration: "Half Day / Full Day",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      emoji: "🍼",
      playEmojis: ["🧸", "🎈", "🌈", "⭐"],
      features: [
        "Toilet training support",
        "Language development",
        "Sensory exploration",
        "Social skills building",
        "Independence fostering"
      ],
      description: "A gentle introduction to the Montessori environment where toddlers develop independence and confidence through carefully designed activities."
    },
    {
      icon: Users,
      title: "Primary Program",
      ageRange: "3 - 6 years",
      duration: "Full Day",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      emoji: "👦",
      playEmojis: ["📚", "🎨", "🧩", "🔢"],
      features: [
        "Mixed age classroom",
        "Practical life skills",
        "Sensorial materials",
        "Mathematics & Language",
        "Cultural studies"
      ],
      description: "Our core Montessori program where children engage in self-directed learning with guidance from certified Montessori teachers."
    },
    {
      icon: GraduationCap,
      title: "Kindergarten Prep",
      ageRange: "5 - 6 years",
      duration: "Full Day",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      emoji: "🎓",
      playEmojis: ["📖", "✏️", "🌟", "🏆"],
      features: [
        "School readiness",
        "Advanced academics",
        "Leadership skills",
        "Project-based learning",
        "Transition support"
      ],
      description: "Preparing children for their transition to elementary school while maintaining the Montessori philosophy of learning."
    }
  ]

  const curriculum = [
    {
      area: "Practical Life",
      description: "Daily living activities that develop concentration, coordination, and independence",
      activities: ["Pouring & transferring", "Food preparation", "Care of environment", "Grace & courtesy"]
    },
    {
      area: "Sensorial",
      description: "Materials that refine the senses and develop cognitive skills",
      activities: ["Pink tower", "Color tablets", "Sound cylinders", "Geometric solids"]
    },
    {
      area: "Mathematics",
      description: "Concrete materials that make abstract concepts tangible",
      activities: ["Golden beads", "Number rods", "Sandpaper numbers", "Addition strip board"]
    },
    {
      area: "Language",
      description: "Phonetic approach to reading and writing development",
      activities: ["Sandpaper letters", "Moveable alphabet", "Reading series", "Grammar materials"]
    },
    {
      area: "Cultural Studies",
      description: "Geography, science, history, and arts integrated learning",
      activities: ["Puzzle maps", "Land & water forms", "Botany & zoology", "Art & music"]
    }
  ]

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-yellow-50 via-green-50 to-blue-50 relative overflow-hidden">
      {/* Playful Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-16 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-green-200 rounded-full opacity-25 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-18 h-18 bg-pink-200 rounded-full opacity-25 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Age-appropriate Montessori programs designed to meet your child's developmental needs 
            and foster their natural love for learning.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-3 bg-white/90 backdrop-blur-sm">
              <div className={`h-3 bg-gradient-to-r ${program.color} relative`}>
                <div className="absolute -top-1 right-4 text-2xl animate-bounce" style={{animationDelay: `${index * 0.3}s`}}>
                  {program.emoji}
                </div>
              </div>
              <CardContent className="p-8 relative">
                {/* Floating Play Elements */}
                <div className="absolute top-4 right-4 flex space-x-1">
                  {program.playEmojis.map((emoji, idx) => (
                    <span key={idx} className="text-lg animate-bounce opacity-60" style={{animationDelay: `${idx * 0.2}s`}}>
                      {emoji}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center shadow-lg animate-pulse`}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                      <p className="text-blue-600 font-semibold text-lg">{program.ageRange}</p>
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mt-2">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-center">{program.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button className="w-full bg-gray-900 hover:bg-gray-800">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Curriculum Areas */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Montessori Curriculum Areas
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive curriculum covers five key areas of development, each designed to 
              build upon the child's natural interests and developmental stages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculum.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">{area.area}</h4>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-800 text-sm">Sample Activities:</h5>
                    <div className="flex flex-wrap gap-2">
                      {area.activities.map((activity, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Schedule Info */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Daily Schedule
            </h3>
            <p className="text-gray-600">
              Our structured yet flexible daily routine provides children with security while 
              allowing for individual choice and exploration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Morning Circle</h4>
              <p className="text-sm text-gray-600">8:30 - 9:00 AM</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Work Period</h4>
              <p className="text-sm text-gray-600">9:00 - 11:30 AM</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Outdoor Play</h4>
              <p className="text-sm text-gray-600">11:30 AM - 12:30 PM</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Enrichment</h4>
              <p className="text-sm text-gray-600">2:00 - 3:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
