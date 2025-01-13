"use client";

import { motion } from "framer-motion";
import Background from "@/components/3d/Background";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <Background />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-7xl md:text-8xl xl:text-9xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 text-transparent bg-clip-text"
          >
            Frontend
            <br />
            Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed tracking-wide"
          >
            モダンなWeb開発技術を活用し、
            <br className="md:hidden" />
            美しく機能的なフロントエンド開発に取り組んでいます
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex flex-col md:flex-row gap-8"
          >
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all text-lg tracking-wider font-medium"
            >
              お問い合わせ
            </Link>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gray-500 dark:border-gray-400 text-gray-500 dark:text-gray-400 hover:border-gray-900 hover:text-gray-900 dark:hover:border-gray-100 dark:hover:text-gray-100 transition-all text-lg tracking-wider font-medium"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
