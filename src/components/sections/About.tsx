"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "Three.js", icon: "🎮" },
  { name: "Node.js", icon: "💚" },
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

export default function About() {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-gray-900 dark:text-gray-100"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed space-y-6"
          >
            <p>
              フロントエンド開発に情熱を持つエンジニアです。モダンな技術スタックを活用し、ユーザーフレンドリーなインターフェースの作成に取り組んでいます。特にインタラクティブなWebアプリケーションの開発に強みを持っています。
            </p>
            <p>
              新しい技術のキャッチアップを常に心がけ、ベストプラクティスを取り入れた保守性の高いコードを書くことを心がけています。
            </p>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mt-24 mb-12 text-gray-900 dark:text-gray-100"
          >
            Skills & Technologies
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
              >
                <span className="text-xl">{skill.icon}</span>
                <span className="font-medium tracking-wide text-gray-900 dark:text-gray-100 text-sm md:text-base truncate">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
