'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  User,
  Baby
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Mon-Fri: 8:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@pattaampoochi.com", "admissions@pattaampoochi.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["No. 2, Adroit District S Thalambur", "Ponmar, Chennai - 600127"],
      description: "Opposite to Dabc Orchid Polachery"
    },
    {
      icon: Clock,
      title: "School Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 8:00 AM - 1:00 PM"],
      description: "Sunday: Closed"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to give your child the gift of Montessori education? Contact us today to 
            schedule a visit or learn more about our programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-gray-600">{detail}</p>
                        ))}
                        <p className="text-xs text-gray-500 mt-2">{info.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Quick Actions</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button className="bg-green-600 hover:bg-green-700 justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
                <Button variant="outline" className="justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Tour
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Location</h4>
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto" />
                  <p className="text-gray-700 font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-600">Ponmar, Chennai</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Parent's Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Child's Name</label>
                      <div className="relative">
                        <Baby className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          name="childName"
                          value={formData.childName}
                          onChange={handleInputChange}
                          placeholder="Child's name"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Child's Age</label>
                      <select
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select age</option>
                        <option value="18months-2years">18 months - 2 years</option>
                        <option value="2-3years">2 - 3 years</option>
                        <option value="3-4years">3 - 4 years</option>
                        <option value="4-5years">4 - 5 years</option>
                        <option value="5-6years">5 - 6 years</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Program Interest</label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select program</option>
                        <option value="toddler">Toddler Program</option>
                        <option value="primary">Primary Program</option>
                        <option value="kindergarten">Kindergarten Prep</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your child's needs, any questions you have, or when you'd like to visit..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Quick Response Guarantee:</strong> We respond to all inquiries within 24 hours. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some common questions parents ask about our Montessori program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What age groups do you accept?</h4>
                <p className="text-gray-600 text-sm">We accept children from 18 months to 6 years old across our Toddler, Primary, and Kindergarten Prep programs.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What are your operating hours?</h4>
                <p className="text-gray-600 text-sm">We're open Monday-Friday 8:00 AM - 6:00 PM, and Saturday 8:00 AM - 1:00 PM. We're closed on Sundays.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you provide meals?</h4>
                <p className="text-gray-600 text-sm">Yes, we provide healthy, nutritious meals and snacks prepared in our hygienic kitchen facility with dietary accommodations available.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Are your teachers Montessori certified?</h4>
                <p className="text-gray-600 text-sm">Yes, all our teachers are certified Montessori educators with extensive experience in early childhood development.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can I visit the school before enrolling?</h4>
                <p className="text-gray-600 text-sm">Absolutely! We encourage parents to schedule a tour to see our facilities and meet our teachers before making a decision.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What safety measures do you have?</h4>
                <p className="text-gray-600 text-sm">We have comprehensive safety measures including CCTV monitoring, secure entry systems, first aid trained staff, and emergency protocols.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
