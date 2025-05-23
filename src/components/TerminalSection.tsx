"use client";

import { motion } from "framer-motion";
import { Play, Square, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const TerminalSection = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState("");

  const commands = [
    {
      input: "whoami",
      output: "Muhammad Ramazan - Full Stack Developer"
    },
    {
      input: "ls -la skills/",
      output: `total 24
drwxr-xr-x  8 ramazan  staff   256 Dec 2024 .
drwxr-xr-x  3 ramazan  staff    96 Dec 2024 ..
-rw-r--r--  1 ramazan  staff  2048 Dec 2024 react.js
-rw-r--r--  1 ramazan  staff  2048 Dec 2024 nextjs.ts
-rw-r--r--  1 ramazan  staff  1536 Dec 2024 python.py
-rw-r--r--  1 ramazan  staff  1792 Dec 2024 nodejs.js
-rw-r--r--  1 ramazan  staff  1280 Dec 2024 docker.yml
-rw-r--r--  1 ramazan  staff  1024 Dec 2024 aws.tf`
    },
    {
      input: "cat projects/current.json",
      output: `{
  "name": "Portfolio v3.0",
  "status": "building",
  "technologies": ["Next.js", "Framer Motion", "Tailwind"],
  "features": ["Interactive Animations", "Dark Mode", "Responsive Design"],
  "completion": "95%"
}`
    },
    {
      input: "git log --oneline -5",
      output: `a7b2c3d feat: add interactive terminal section
f8e9d1a style: enhance animations and micro-interactions
c4d5e6f feat: implement advanced particle system
b1a2c3d fix: optimize performance for mobile devices
9e8f7g6 feat: add creative background animations`
    }
  ];

  useEffect(() => {
    if (!isTyping) return;

    const command = commands[currentCommand];
    const fullText = `$ ${command.input}\n${command.output}`;

    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentCommand((prev) => (prev + 1) % commands.length);
        setDisplayedText("");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, currentCommand, isTyping, commands]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          <Terminal className="text-green-500" size={24} />
          Developer Terminal
        </h2>
        <p className="text-gray-700 dark:text-gray-400">
          Welcome to my development environment
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm font-mono">
              ramazan@portfolio:~
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsTyping(!isTyping)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isTyping ? <Square size={14} /> : <Play size={14} />}
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 bg-gray-900 min-h-[300px] font-mono text-sm">
            <div className="text-green-400 mb-2">
              Welcome to Muhammad Ramazan&apos;s development environment!
            </div>
            <div className="text-gray-300 mb-4">
              Type &apos;help&apos; for available commands.
            </div>

            <div className="space-y-2">
              <pre className="text-gray-100 whitespace-pre-wrap">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-green-400"
                >
                  ▊
                </motion.span>
              </pre>
            </div>

            {/* Interactive Command Buttons */}
            <div className="mt-6 flex flex-wrap gap-2">
              {commands.map((cmd, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setCurrentCommand(index);
                    setDisplayedText("");
                    setIsTyping(true);
                  }}
                  className={`px-3 py-1.5 text-xs rounded border ${index === currentCommand
                    ? "bg-green-500/20 border-green-500 text-green-400"
                    : "bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-500"
                    } transition-all duration-300`}
                >
                  {cmd.input}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TerminalSection; 