"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  Brain,
  Building2,
  ChevronRight,
  Coins,
  Database,
  FileText,
  GraduationCap,
  LineChart,
  Lock,
  MessageCircle,
  School,
  Shield,
  Sparkles,
  Users,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userCount, setUserCount] = useState(1243)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("freshers")

  useEffect(() => {
    // Simulate increasing user count
    const interval = setInterval(() => {
      setUserCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 10000)

    // Handle scroll for navbar
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/80 shadow-sm backdrop-blur-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-green-600 flex items-center justify-center text-white font-bold">
              D
            </div>
            <span className="font-bold text-xl">Dreamclerk</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
            >
              How It Works
            </Link>
            <Link href="#for-who" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
              For Who
            </Link>
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
              Features
            </Link>
          </nav>
          <Button onClick={openModal} className="rounded-full bg-green-600 hover:bg-green-700 text-white">
            Register Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-20 md:py-32">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6"
              >
                <Badge className="w-fit bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1">
                  Student Data Platform
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-green-600">
                  Monetize Your College Experience with AI-Powered Insights
                </h1>
                <p className="text-lg text-gray-600">
                  Share your daily college life, earn rewards, and contribute to the future of AI-driven education.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={openModal}
                    size="lg"
                    className="rounded-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                    <span>
                      <span className="font-semibold text-green-600">{userCount.toLocaleString()}</span> students
                      already joined
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="Dreamclerk Platform"
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-600/10 to-transparent"></div>
                </div>

                {/* Floating elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-6 -left-6 rounded-xl bg-white p-3 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Coins className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Rewards Earned</p>
                      <p className="text-lg font-bold text-green-600">$1,245</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -top-6 -right-6 rounded-xl bg-white p-3 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">AI Insights</p>
                      <p className="text-lg font-bold text-green-600">12,890</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1">The Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">How Dreamclerk Works</h2>
              <p className="max-w-3xl mx-auto text-gray-600">
                Transforming real student experiences into structured insights—powered by AI, protected by anonymity,
                and driving real-world impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  icon: <FileText className="h-8 w-8 text-green-600" />,
                  title: "Share Your College Life",
                  description:
                    "Students anonymously write daily journals covering academics, social life, lifestyle, and personal experiences.",
                  features: [
                    "Share authentic, unfiltered experiences",
                    "Ensure privacy through anonymity",
                    "Contribute to a growing student-driven knowledge hub",
                  ],
                },
                {
                  icon: <Brain className="h-8 w-8 text-green-600" />,
                  title: "AI-Powered Insights",
                  description:
                    "Our AI categorizes student journals into key themes like academics, social interactions, lifestyle, university reviews, and mental well-being.",
                  features: [
                    "Automatic categorization of student experiences",
                    "Trend & sentiment analysis for deeper insights",
                    "Verified, bias-free data for AI model training",
                  ],
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-green-600" />,
                  title: "Value for Everyone",
                  description:
                    "The structured insights create value for students, universities, AI companies, and mental health researchers.",
                  features: [
                    "Students make informed choices with real experiences",
                    "Universities enhance campus life with structured insights",
                    "AI companies train models using high-quality data",
                    "Mental health firms analyze student well-being trends",
                  ],
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2 mt-auto">
                        {step.features.map((feature, j) => (
                          <li key={j} className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-green-600" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* For Who Section */}
        <section id="for-who" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1">For Everyone</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Who Benefits from Dreamclerk</h2>
              <p className="max-w-3xl mx-auto text-gray-600">
                Our platform creates value for students, universities, and companies through structured insights and
                real experiences.
              </p>
            </motion.div>

            <Tabs defaultValue="freshers" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-gray-100 p-1 rounded-lg">
                  <TabsTrigger
                    value="freshers"
                    className={`rounded-md px-4 py-2 text-sm ${activeTab === "freshers" ? "bg-white text-green-600 shadow-sm" : "text-gray-600"}`}
                  >
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Freshers
                  </TabsTrigger>
                  <TabsTrigger
                    value="students"
                    className={`rounded-md px-4 py-2 text-sm ${activeTab === "students" ? "bg-white text-green-600 shadow-sm" : "text-gray-600"}`}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Students
                  </TabsTrigger>
                  <TabsTrigger
                    value="universities"
                    className={`rounded-md px-4 py-2 text-sm ${activeTab === "universities" ? "bg-white text-green-600 shadow-sm" : "text-gray-600"}`}
                  >
                    <Building2 className="h-4 w-4 mr-2" />
                    Universities
                  </TabsTrigger>
                  <TabsTrigger
                    value="companies"
                    className={`rounded-md px-4 py-2 text-sm ${activeTab === "companies" ? "bg-white text-green-600 shadow-sm" : "text-gray-600"}`}
                  >
                    <Database className="h-4 w-4 mr-2" />
                    AI Companies
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="freshers" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-green-600 mb-4">Your First Step into the Future</h3>
                    <p className="text-gray-600 mb-6">
                      Join the right college with your personal AI guide. Make informed decisions based on real student
                      experiences and get personalized recommendations.
                    </p>
                    <motion.ul
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      {[
                        { icon: <Brain />, text: "AI-driven college recommendations based on real student insights" },
                        {
                          icon: <LineChart />,
                          text: "Honest, unbiased reviews on academics, campus life, and placements",
                        },
                        { icon: <School />, text: "Smart comparisons of universities, rankings, and facilities" },
                        { icon: <BookOpen />, text: "Personalized course recommendations" },
                        { icon: <Shield />, text: "Transparent admission process with scholarship details" },
                      ].map((item, i) => (
                        <motion.li key={i} variants={item} className="flex items-start">
                          <div className="h-6 w-6 text-green-600 mr-3 flex-shrink-0">{item.icon}</div>
                          <span className="text-gray-700">{item.text}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <Button
                      onClick={openModal}
                      className="mt-8 rounded-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        width={800}
                        height={600}
                        alt="Freshers using Dreamclerk"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="h-8 w-8 text-green-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-600">College Match</p>
                          <p className="text-lg font-bold text-green-600">98% Accuracy</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="students" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-green-600 mb-4">Monetize Your Experiences</h3>
                    <p className="text-gray-600 mb-6">
                      Share daily updates about college life and earn rewards. Help future students make informed
                      choices while building your digital profile.
                    </p>
                    <motion.ul
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      {[
                        { icon: <Coins />, text: "Earn rewards for sharing structured experiences" },
                        { icon: <LineChart />, text: "Contribute to improving student life & mental health solutions" },
                        { icon: <Brain />, text: "Help train AI models with real-world insights" },
                        { icon: <Lock />, text: "Ensure complete privacy through anonymous participation" },
                        {
                          icon: <Database />,
                          text: "Exchange Student-Created Data Tokens (SCDTs) for exclusive benefits",
                        },
                      ].map((item, i) => (
                        <motion.li key={i} variants={item} className="flex items-start">
                          <div className="h-6 w-6 text-green-600 mr-3 flex-shrink-0">{item.icon}</div>
                          <span className="text-gray-700">{item.text}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <Button
                      onClick={openModal}
                      className="mt-8 rounded-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        width={800}
                        height={600}
                        alt="Students using Dreamclerk"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <Coins className="h-8 w-8 text-green-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-600">Average Earnings</p>
                          <p className="text-lg font-bold text-green-600">$120/month</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="universities" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-green-600 mb-4">Real Insights for Better Engagement</h3>
                    <p className="text-gray-600 mb-6">
                      Access real-time student experiences to improve campus life. Identify key areas for academic and
                      infrastructure enhancements.
                    </p>
                    <motion.ul
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      {[
                        { icon: <LineChart />, text: "Optimize academic programs based on AI-analyzed feedback" },
                        { icon: <Users />, text: "Enhance student retention with data-driven strategies" },
                        { icon: <Building2 />, text: "Compare performance and track student satisfaction" },
                        {
                          icon: <Brain />,
                          text: "Support AI-driven education tools with structured real-world insights",
                        },
                        {
                          icon: <MessageCircle />,
                          text: "Direct engagement with students through structured insights",
                        },
                      ].map((item, i) => (
                        <motion.li key={i} variants={item} className="flex items-start">
                          <div className="h-6 w-6 text-green-600 mr-3 flex-shrink-0">{item.icon}</div>
                          <span className="text-gray-700">{item.text}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <Button
                      onClick={openModal}
                      className="mt-8 rounded-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        width={800}
                        height={600}
                        alt="Universities using Dreamclerk"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <LineChart className="h-8 w-8 text-green-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-600">Retention Increase</p>
                          <p className="text-lg font-bold text-green-600">+24%</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="companies" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-green-600 mb-4">The Next Big Data Revolution</h3>
                    <p className="text-gray-600 mb-6">
                      Access real-time categorized student data for AI model training. Improve mental health analytics
                      using authentic student sentiment.
                    </p>
                    <motion.ul
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      {[
                        { icon: <Database />, text: "Premium structured datasets from diverse student communities" },
                        { icon: <Brain />, text: "Train smarter AI models with real experiences" },
                        {
                          icon: <LineChart />,
                          text: "Advance AI research for education, mental health, and recommendation systems",
                        },
                        { icon: <Sparkles />, text: "Access real-time updates on student trends and behaviors" },
                        { icon: <Shield />, text: "Contribute to ethical and transparent data usage in education" },
                      ].map((item, i) => (
                        <motion.li key={i} variants={item} className="flex items-start">
                          <div className="h-6 w-6 text-green-600 mr-3 flex-shrink-0">{item.icon}</div>
                          <span className="text-gray-700">{item.text}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <Button
                      onClick={openModal}
                      className="mt-8 rounded-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        width={800}
                        height={600}
                        alt="AI Companies using Dreamclerk"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <Brain className="h-8 w-8 text-green-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-600">AI Model Accuracy</p>
                          <p className="text-lg font-bold text-green-600">+37%</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1">Platform Features</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Everything You Need to Succeed</h2>
              <p className="max-w-3xl mx-auto text-gray-600">
                Our comprehensive platform provides all the tools you need to share experiences, gain insights, and earn
                rewards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <FileText className="h-6 w-6 text-green-600" />,
                  title: "Anonymous Journaling",
                  description:
                    "Share your daily college experiences without revealing your identity, ensuring complete privacy and honest feedback.",
                },
                {
                  icon: <Brain className="h-6 w-6 text-green-600" />,
                  title: "AI-Powered Analysis",
                  description:
                    "Our advanced AI categorizes and analyzes student experiences to generate valuable insights and trends.",
                },
                {
                  icon: <Coins className="h-6 w-6 text-green-600" />,
                  title: "Reward System",
                  description:
                    "Earn Student-Created Data Tokens (SCDTs) for your contributions, redeemable for various benefits and rewards.",
                },
                {
                  icon: <Shield className="h-6 w-6 text-green-600" />,
                  title: "Data Privacy",
                  description:
                    "Your data is protected with enterprise-grade security and anonymization techniques to ensure confidentiality.",
                },
                {
                  icon: <School className="h-6 w-6 text-green-600" />,
                  title: "College Recommendations",
                  description:
                    "Get personalized college and course recommendations based on real student experiences and your preferences.",
                },
                {
                  icon: <LineChart className="h-6 w-6 text-green-600" />,
                  title: "Insight Dashboard",
                  description:
                    "Access comprehensive analytics and insights about student experiences, trends, and satisfaction levels.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Monetize Your College Experience?</h2>
              <p className="text-green-100 text-lg mb-8">
                Join thousands of students who are already sharing their experiences, earning rewards, and contributing
                to the future of AI-driven education.
              </p>
              <Button onClick={openModal} size="lg" className="rounded-full bg-white text-green-600 hover:bg-green-50">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="mt-8 flex justify-center items-center gap-2 text-green-100">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-green-500 border-2 border-green-600 flex items-center justify-center text-xs font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span>
                  <span className="font-semibold text-white">{userCount.toLocaleString()}</span> students already joined
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-md bg-green-600 flex items-center justify-center text-white font-bold">
                  D
                </div>
                <span className="font-bold text-xl">Dreamclerk</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Monetize your college experience with AI-powered insights.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-green-600 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#for-who" className="text-gray-600 hover:text-green-600 transition-colors">
                    For Who
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-600 hover:text-green-600 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-600 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Data Protection
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-600 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">
                  <span className="block">Email:</span>
                  <a href="mailto:info@dreamclerk.com" className="text-green-600 hover:underline">
                    info@dreamclerk.com
                  </a>
                </li>
                <li className="text-gray-600">
                  <span className="block">Address:</span>
                  <span>123 Innovation Street, Tech City, TC 12345</span>
                </li>
                <li className="text-gray-600 flex items-center gap-2 mt-4">
                  <span>Active Users:</span>
                  <span className="font-semibold text-green-600">{userCount.toLocaleString()}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Dreamclerk. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sign-in Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative"
          >
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
            <div className="text-center mb-6">
              <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <div className="h-8 w-8 rounded-md bg-green-600 flex items-center justify-center text-white font-bold">
                  D
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Join Dreamclerk</h3>
              <p className="text-gray-600 mt-1">Sign in to start monetizing your college experience</p>
            </div>
            <div className="space-y-4">
              <Button
                className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800"
                onClick={closeModal}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </Button>
              <Button
                className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white"
                onClick={closeModal}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Continue with GitHub
              </Button>
            </div>
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                By signing up, you agree to our{" "}
                <Link href="#" className="text-green-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-green-600 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

