"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  project: string;
  avatar: string;
  featured?: boolean;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  isHovered: number | null;
  onHover: (index: number | null) => void;
}

interface FeaturedTestimonialProps {
  testimonial: Testimonial;
}

const testimonials = [
  {
    content: "Ramzan is great! He is very skillful and fast learner, just what you need in a developer.",
    author: "Mohammed Swellam",
    role: "CEO",
    company: "Geeky Air",
    rating: 5,
    project: "Events based Web App",
    avatar: "MS",
    featured: true
  },
  {
    content: "Ramzan produced some really amazing work on the backend. He demonstrated his proficiency and efficiency by using Node.js and Javascript to successfully import a very large dataset into a MySQL database.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "DataFlow Inc",
    rating: 5,
    project: "Backend Development",
    avatar: "SJ"
  },
  {
    content: "It's been great to work with him! Fast, active and hardworking! He ",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "TechStart Labs",
    rating: 5,
    project: "JavaScript Applications",
    avatar: "MR"
  },
  {
    content: "We had a fantastic experience working with him on a recent project. He consistently delivered high-quality work, showed exceptional attention to detail, and communicated effectively throughout the process.",
    author: "Jacek Jllaskowski",
    role: "Project Manger ",
    company: "Golem",
    rating: 5,
    project: "Full Stack Development",
    avatar: "ED"
  },

];

const TestimonialCard = ({ testimonial, index, isHovered, onHover }: TestimonialCardProps) => {
  const gradients = [
    'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20',
    'from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20',
    'from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20',
    'from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20'
  ];

  const borderGradients = [
    'from-blue-400 to-indigo-500',
    'from-purple-400 to-pink-500',
    'from-green-400 to-emerald-500',
    'from-orange-400 to-red-500'
  ];

  const gradient = gradients[index % gradients.length];
  const borderGradient = borderGradients[index % borderGradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="h-full w-full group"
    >
      <motion.div
        className={`h-full w-full rounded-2xl relative overflow-hidden transition-all duration-500 border-0 ${isHovered === index
          ? 'transform scale-105 shadow-2'
          : 'shadow-lg hover:shadow-xlkk'
          }`}
        whileHover={{ y: -8 }}
      >

        {/* Main Card */}
        <div className={`relative  h-full bg-gradient-to-br ${gradient} backdrop-blur-sm rounded-2xl p-6 `}>


          {/* Quote Icon with Background */}
          <div className="relative mb-2 flex  items-center justify-between">
            <div className={`w-12 h-12 bg-gradient-to-br ${borderGradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
              <Icon
                icon="gravity-ui:quote-open"
                className="text-white text-3xl"
              />
            </div>
            {/* Rating with Animation */}
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <Icon
                    icon="solar:star-bold"
                    className="text-yellow-500 text-2xl drop-shadow-sm"
                  />
                </motion.div>
              ))}
              <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {testimonial.rating}.0
              </span>
            </div>
          </div>


          {/* Testimonial Content with Better Typography */}
          <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-base font-medium relative">
            <span className="text-4xl text-gray-300 dark:text-gray-600 absolute -top-2 -left-2 font-serif">&quot;</span>
            <span className="relative z-10 pl-4">{testimonial.content}</span>
            <span className="text-4xl text-gray-300 dark:text-gray-600 absolute -bottom-6 -right-2 font-serif">&quot;</span>
          </blockquote>

          {/* Author Section with Enhanced Design */}
          <div className="mt-auto  border-t border-gray-200/50 dark:border-gray-600/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${borderGradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                </div>
                {/* Online Status Indicator */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
              </div>

              <div className="flex-1">
                <div className="font-bold text-gray-900 dark:text-white text-lg">
                  {testimonial.author}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {testimonial.role}
                </div>
                <div className="text-gray-500 dark:text-gray-500 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>

            {/* Project Tag with Gradient */}
            <div className="flex justify-between items-center">
              <span className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${borderGradient} text-white text-xs font-semibold rounded-full shadow-md`}>
                <Icon icon="solar:code-outline" className="mr-1" width={14} height={14} />
                {testimonial.project}
              </span>

              {/* Verified Badge */}
              <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400 font-medium">
                <Icon icon="solar:verified-check-bold" width={16} height={16} />
                Verified
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FeaturedTestimonial = ({ testimonial }: FeaturedTestimonialProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative max-w-3xl mx-auto"
  >
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/50">
      {/* Simple Featured Badge */}

      <div className="relative mb-2 flex items-center justify-between">
        <div className={`w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
          <Icon
            icon="gravity-ui:quote-open"
            className="text-white text-3xl"
          />
        </div>
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
            <Icon icon="solar:star-bold" width={16} height={16} />
            Featured Review
          </span>
        </div>

      </div>


      {/* Quote */}
      <blockquote className="text-center text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-8">
        {testimonial.content}
      </blockquote>

      {/* Rating with Animation */}
      <div className="flex items-center justify-center gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <Icon
              icon="solar:star-bold"
              className="text-yellow-500 text-2xl drop-shadow-sm"
            />
          </motion.div>
        ))}
        <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          {testimonial.rating}.0
        </span>
      </div>

      {/* Author */}
      <div className="flex items-center justify-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <span className="text-white text-xl font-bold">{testimonial.avatar}</span>
        </div>
        <div className="text-center">
          <div className="font-bold text-gray-900 dark:text-white text-lg">
            {testimonial.author}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            {testimonial.role} at {testimonial.company}
          </div>
          <div className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-1">
            {testimonial.project}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function TestimonialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const featuredTestimonial = testimonials.find(t => t.featured);
  const otherTestimonials = testimonials.filter(t => !t.featured);

  if (!featuredTestimonial) {
    return null;
  }

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Icon icon="solar:users-group-rounded-outline" className="text-blue-500" width={20} height={20} />
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
              Client Stories
            </span>
          </motion.div>

          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Testimonials Wall
          </h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Real feedback from real clients who trusted me with their projects
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <FeaturedTestimonial testimonial={featuredTestimonial} />
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Client Testimonials
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Honest feedback from clients I&apos;ve had the pleasure to work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
                isHovered={hoveredCard}
                onHover={setHoveredCard}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <motion.div
              className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-200/30 dark:border-gray-700/30"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">87%</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Upwork Success</div>
            </motion.div>

            <motion.div
              className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-200/30 dark:border-gray-700/30"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5.0</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Average Rating</div>
            </motion.div>

            <motion.div
              className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-200/30 dark:border-gray-700/30"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Happy Clients</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 