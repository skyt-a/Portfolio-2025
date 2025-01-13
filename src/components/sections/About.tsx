"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Angular", icon: "🅰️" },
  { name: "Svelte", icon: "🔥" },
  { name: "GraphQL", icon: "📊" },
  { name: "Firebase", icon: "🔥" },
];

const experiences = [
  {
    period: "2020.04 - 現在",
    company: "株式会社データワイズ",
    role: "フロントエンドリーダー（業務委託）",
    description:
      "位置情報を利用したマーケティングサービスの開発をリード。React、TypeScript、Redux、GraphQLを用いたフロントエンド実装を担当。Figmaでのデザイン確認からFirebase Hostingでのデプロイまで、フロントエンド開発の全工程を一人で遂行。必要に応じてTypeScript + GraphQLによるバックエンド実装も担当。",
  },
  {
    period: "2019.08 - 2020.03",
    company: "株式会社マッチングエージェント",
    role: "フロントエンドエンジニア（業務委託）",
    description:
      "マッチングアプリのスマホブラウザ版開発に従事。React.jsを使用したレスポンシブデザインの実装、およびWordPressを利用したオウンドメディアの構築を担当。Docker環境でのローカル開発環境の整備も実施。",
  },
  {
    period: "2015.09 - 2019.07",
    company: "株式会社情報システム工学",
    role: "Webエンジニア（正社員）",
    description:
      "既存業務システムのWeb化プロジェクトでAngular + TypeScriptによる開発を担当。社内フレームワーク開発ではAngular、Springを使用したSPAフレームワークの構築に携わる。その他、Struts + Springによる業務Webアプリケーションのバックエンド開発も経験。",
  },
];

const education = [
  {
    period: "2011.04 - 2015.03",
    school: "横浜国立大学",
    department: "経営学部 経営システム科学科",
    description:
      "ゲームプラットフォームが株価に与える影響について研究。データ分析とビジネスの観点から、ゲーム業界における技術革新の経済的インパクトを考察。",
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

          <style jsx global>{`
            @keyframes pulse {
              0% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 rgba(209, 213, 219, 0.7);
              }
              70% {
                transform: scale(1);
                box-shadow: 0 0 0 10px rgba(209, 213, 219, 0);
              }
              100% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 rgba(209, 213, 219, 0);
              }
            }
            @keyframes darkPulse {
              0% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 rgba(55, 65, 81, 0.7);
              }
              70% {
                transform: scale(1);
                box-shadow: 0 0 0 10px rgba(55, 65, 81, 0);
              }
              100% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 rgba(55, 65, 81, 0);
              }
            }
            .timeline-circle {
              animation: pulse 2s infinite;
            }
            .dark .timeline-circle {
              animation: darkPulse 2s infinite;
            }
          `}</style>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mt-24 mb-12 text-gray-900 dark:text-gray-100"
          >
            Career
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-z-10 before:bg-gradient-to-b before:from-gray-200 before:via-gray-200 before:to-transparent dark:before:from-gray-700 dark:before:via-gray-700"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.period}
                variants={itemVariants}
                className="relative flex gap-6 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-700 flex items-center justify-center timeline-circle">
                    <div className="w-3 h-3 rounded-full bg-gray-900 dark:bg-gray-100" />
                  </div>
                  {index !== experiences.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700" />
                  )}
                </div>
                <div className="flex-1 pt-1.5">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {exp.period}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {exp.company}
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300 mb-4 inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    {exp.role}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mt-24 mb-12 text-gray-900 dark:text-gray-100"
          >
            Education
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-z-10 before:bg-gradient-to-b before:from-gray-200 before:via-gray-200 before:to-transparent dark:before:from-gray-700 dark:before:via-gray-700"
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.period}
                variants={itemVariants}
                className="relative flex gap-6 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-700 flex items-center justify-center timeline-circle">
                    <div className="w-3 h-3 rounded-full bg-gray-900 dark:bg-gray-100" />
                  </div>
                  {index !== education.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700" />
                  )}
                </div>
                <div className="flex-1 pt-1.5">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {edu.period}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {edu.school}
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300 mb-4 inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    {edu.department}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
