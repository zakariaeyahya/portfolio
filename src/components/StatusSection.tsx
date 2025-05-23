"use client";

import { motion } from "framer-motion";
import { Activity, Clock, Code, Coffee, MapPin, Music } from "lucide-react";
import { useEffect, useState } from "react";

const StatusSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const statusItems = [
    {
      icon: Activity,
      label: "Status",
      value: "Available for work",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      pulse: true
    },
    {
      icon: Code,
      label: "Currently Building",
      value: "Portfolio v3.0",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Coffee,
      label: "Caffeine Level",
      value: "High ☕️",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10"
    },
    {
      icon: Music,
      label: "Coding Playlist",
      value: "Lo-fi Hip Hop",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const codeStats = [
    { label: "Lines of Code", value: "50,234", change: "+1,234 this week" },
    { label: "Commits", value: "1,567", change: "+23 this week" },
    { label: "Projects", value: "42", change: "+2 this month" },
    { label: "Coffee Cups", value: "∞", change: "Always brewing" }
  ];

  const recentActivity = [
    {
      action: "Pushed to",
      project: "portfolio-v3",
      time: "2 minutes ago",
      type: "commit"
    },
    {
      action: "Deployed",
      project: "askrudy.ai",
      time: "1 hour ago",
      type: "deploy"
    },
    {
      action: "Started working on",
      project: "new-feature",
      time: "3 hours ago",
      type: "start"
    },
    {
      action: "Fixed bug in",
      project: "checkersvip.com",
      time: "5 hours ago",
      type: "fix"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "commit": return "📝";
      case "deploy": return "🚀";
      case "start": return "✨";
      case "fix": return "🔧";
      default: return "💻";
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          <Activity className="text-green-500" size={24} />
          Developer Status
        </h2>
        <p className="text-gray-700 dark:text-gray-400">
          Real-time insights into my development workflow and current activities
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-300 dark:border-gray-800 p-6">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Current Status
            </h3>

            <div className="space-y-4">
              {statusItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className={`p-2 rounded-lg ${item.bgColor} relative`}>
                    <item.icon size={18} className={item.color} />
                    {item.pulse && (
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-green-500/20"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {item.label}
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Local Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="p-2 rounded-lg bg-indigo-500/10">
                  <Clock size={18} className="text-indigo-500" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Local Time (PKT)
                  </div>
                  <div className="font-mono font-medium text-gray-900 dark:text-white">
                    {currentTime.toLocaleTimeString()}
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-red-500/10">
                  <MapPin size={18} className="text-red-500" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Location
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    📍 Pakistan
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Code Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-300 dark:border-gray-800 p-6">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Coding Statistics
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {codeStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200/50 dark:border-blue-800/30"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    {stat.change}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div>
              <h4 className="text-md font-semibold mb-4 text-gray-900 dark:text-white">
                Recent Activity
              </h4>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
                  >
                    <div className="text-lg">{getActivityIcon(activity.type)}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {activity.action}{" "}
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          {activity.project}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {activity.time}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200/50 dark:border-green-800/50 rounded-2xl">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-700 dark:text-green-300 text-sm font-medium">
              Online & Available
            </span>
          </div>
          <div className="w-px h-4 bg-green-300/50"></div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Ready to collaborate on your next project
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default StatusSection; 