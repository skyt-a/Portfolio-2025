"use client";

import { motion } from "framer-motion";

const links = [
  {
    title: "Zenn",
    url: "https://zenn.dev",
    description:
      "技術記事の投稿や、最新のフロントエンド開発に関する知見を共有しています。",
    icon: "📚",
  },
  {
    title: "Qiita",
    url: "https://qiita.com",
    description:
      "日々の開発で得た知識や、技術的な問題解決のプロセスを発信しています。",
    icon: "✍️",
  },
  {
    title: "Katacky",
    url: "https://katacky.com",
    description: "個人開発したWebアプリケーションを公開しています。",
    icon: "💻",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Portfolio() {
  return (
    <section className="py-32">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-gray-900 dark:text-gray-100"
          >
            Portfolio
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-12"
          >
            {links.map((link) => (
              <motion.a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group block p-8 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-100 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl">{link.icon}</span>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    {link.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {link.description}
                </p>
                <div className="flex items-center text-gray-900 dark:text-gray-100 font-medium tracking-wide group-hover:translate-x-2 transition-transform">
                  View Project
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
