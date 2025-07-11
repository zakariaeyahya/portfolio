"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

interface TechItem {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Expert";
  category: string;
  description: string;
  yearsUsed?: number;
}

const techStackData: Record<string, TechItem[]> = {
  "Databases": [
    {
      name: "SQL",
      icon: "logos:mysql",
      level: "Expert",
      category: "Databases",
      description: "Structured Query Language for relational databases",
      yearsUsed: 5
    },
    {
      name: "MySQL",
      icon: "logos:mysql",
      level: "Expert",
      category: "Databases",
      description: "Popular open-source relational database",
      yearsUsed: 4
    },
    {
      name: "Oracle",
      icon: "logos:oracle",
      level: "Intermediate",
      category: "Databases",
      description: "Multimodel database management system",
      yearsUsed: 3
    },
    {
      name: "NoSQL",
      icon: "logos:mongodb",
      level: "Expert",
      category: "Databases",
      description: "Non-relational database systems",
      yearsUsed: 4
    },
  ],
  "Big Data & Storage": [
    {
      name: "Hadoop",
      icon: "logos:apache-hadoop",
      level: "Intermediate",
      category: "Big Data & Storage",
      description: "Framework for distributed storage and processing",
      yearsUsed: 3
    },
    {
      name: "Apache Spark",
      icon: "logos:apache-spark",
      level: "Intermediate",
      category: "Big Data & Storage",
      description: "Analytics engine for large-scale data processing",
      yearsUsed: 3
    },
    {
      name: "Snowflake",
      icon: "logos:snowflake-icon",
      level: "Intermediate",
      category: "Big Data & Storage",
      description: "Cloud-based data warehousing",
      yearsUsed: 2
    },
    {
      name: "Amazon S3",
      icon: "logos:aws-s3",
      level: "Intermediate",
      category: "Big Data & Storage",
      description: "Scalable storage in the cloud",
      yearsUsed: 2
    },
    {
      name: "AWS Glue",
      icon: "logos:aws-glue",
      level: "Intermediate",
      category: "Big Data & Storage",
      description: "Serverless data integration service",
      yearsUsed: 2
    },
  ],
  "Orchestration & Indexing": [
    {
      name: "Apache Airflow",
      icon: "logos:apache-airflow",
      level: "Expert",
      category: "Orchestration & Indexing",
      description: "Platform to programmatically author, schedule, and monitor workflows",
      yearsUsed: 3
    },
    {
      name: "Qdrant",
      icon: "logos:qdrant",
      level: "Intermediate",
      category: "Orchestration & Indexing",
      description: "Vector similarity search engine",
      yearsUsed: 1
    },
    {
      name: "ChromaDB",
      icon: "logos:chromadb",
      level: "Intermediate",
      category: "Orchestration & Indexing",
      description: "AI-native open-source vector database",
      yearsUsed: 1
    },
  ],
  "Machine Learning": [
    {
      name: "Supervised Learning",
      icon: "logos:scikit-learn",
      level: "Expert",
      category: "Machine Learning",
      description: "Machine learning models with labeled data",
      yearsUsed: 4
    },
    {
      name: "Unsupervised Learning",
      icon: "logos:scikit-learn",
      level: "Expert",
      category: "Machine Learning",
      description: "Machine learning models with unlabeled data",
      yearsUsed: 3
    },
    {
      name: "Deep Learning",
      icon: "logos:tensorflow",
      level: "Expert",
      category: "Machine Learning",
      description: "Neural networks with multiple layers",
      yearsUsed: 3
    },
    {
      name: "PyTorch",
      icon: "logos:pytorch",
      level: "Expert",
      category: "Machine Learning",
      description: "Open-source machine learning library",
      yearsUsed: 3
    },
    {
      name: "TensorFlow",
      icon: "logos:tensorflow",
      level: "Expert",
      category: "Machine Learning",
      description: "End-to-end open-source platform for machine learning",
      yearsUsed: 3
    },
    {
      name: "Hugging Face",
      icon: "logos:huggingface",
      level: "Intermediate",
      category: "Machine Learning",
      description: "Platform for building, training, and deploying ML models",
      yearsUsed: 2
    },
  ],
  "Data Visualization": [
    {
      name: "PowerBI",
      icon: "logos:power-bi",
      level: "Expert",
      category: "Data Visualization",
      description: "Business analytics service by Microsoft",
      yearsUsed: 4
    },
    {
      name: "Tableau",
      icon: "logos:tableau-icon",
      level: "Expert",
      category: "Data Visualization",
      description: "Interactive data visualization software",
      yearsUsed: 3
    },
    {
      name: "Matplotlib",
      icon: "logos:python",
      level: "Expert",
      category: "Data Visualization",
      description: "Plotting library for the Python programming language",
      yearsUsed: 4
    },
    {
      name: "Seaborn",
      icon: "logos:python",
      level: "Expert",
      category: "Data Visualization",
      description: "Statistical data visualization library",
      yearsUsed: 3
    },
  ],
  "Programming Languages": [
    {
      name: "Python",
      icon: "logos:python",
      level: "Expert",
      category: "Programming Languages",
      description: "High-level programming language",
      yearsUsed: 5
    },
    {
      name: "SQL",
      icon: "logos:sql-datasource",
      level: "Expert",
      category: "Programming Languages",
      description: "Standard language for relational database management",
      yearsUsed: 5
    },
    {
      name: "Java",
      icon: "logos:java",
      level: "Intermediate",
      category: "Programming Languages",
      description: "Object-oriented programming language",
      yearsUsed: 3
    },
    {
      name: "TypeScript",
      icon: "logos:typescript-icon",
      level: "Intermediate",
      category: "Programming Languages",
      description: "Typed superset of JavaScript",
      yearsUsed: 2
    },
  ],
  "Frameworks": [
    {
      name: "FastAPI",
      icon: "logos:fastapi",
      level: "Expert",
      category: "Frameworks",
      description: "Modern, fast web framework for building APIs",
      yearsUsed: 3
    },
    {
      name: "Django",
      icon: "logos:django-icon",
      level: "Intermediate",
      category: "Frameworks",
      description: "High-level Python web framework",
      yearsUsed: 2
    },
    {
      name: "Spring Boot",
      icon: "logos:spring-icon",
      level: "Intermediate",
      category: "Frameworks",
      description: "Java-based framework for building microservices",
      yearsUsed: 2
    },
    {
      name: "React",
      icon: "logos:react",
      level: "Intermediate",
      category: "Frameworks",
      description: "JavaScript library for building user interfaces",
      yearsUsed: 2
    },
  ],
  "Cloud & DevOps": [
    {
      name: "AWS",
      icon: "logos:aws",
      level: "Intermediate",
      category: "Cloud & DevOps",
      description: "Comprehensive cloud computing platform",
      yearsUsed: 2
    },
    {
      name: "Docker",
      icon: "logos:docker-icon",
      level: "Intermediate",
      category: "Cloud & DevOps",
      description: "Platform for developing, shipping, and running applications",
      yearsUsed: 2
    },
    {
      name: "Kubernetes",
      icon: "logos:kubernetes",
      level: "Intermediate",
      category: "Cloud & DevOps",
      description: "Container orchestration platform",
      yearsUsed: 2
    },
    {
      name: "GitLab CI/CD",
      icon: "logos:gitlab",
      level: "Intermediate",
      category: "Cloud & DevOps",
      description: "Continuous Integration and Continuous Deployment",
      yearsUsed: 2
    },
  ],
  "Tools & Techniques": [
    {
      name: "LangChain",
      icon: "logos:langchain",
      level: "Expert",
      category: "Tools & Techniques",
      description: "Framework for developing applications with large language models",
      yearsUsed: 2
    },
    {
      name: "LLamaIndex",
      icon: "logos:llama",
      level: "Intermediate",
      category: "Tools & Techniques",
      description: "Data framework for LLM applications",
      yearsUsed: 1
    },
    {
      name: "MLflow",
      icon: "logos:mlflow",
      level: "Intermediate",
      category: "Tools & Techniques",
      description: "Platform for managing the ML lifecycle",
      yearsUsed: 1
    },
    {
      name: "Postman",
      icon: "logos:postman",
      level: "Intermediate",
      category: "Tools & Techniques",
      description: "API development and testing tool",
      yearsUsed: 2
    },
  ],
};

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", ...Object.keys(techStackData)];
  const filteredTech = activeCategory === "All"
    ? Object.values(techStackData).flat()
    : techStackData[activeCategory] || [];

  return (
    <motion.section
      id="stack"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <SectionHeader
        tagText="Tech Arsenal"
        tagIcon="solar:settings-bold"
        heading="Technology Stack"
        description="Technologies I use to bring ideas to life"
        showUnderline={false}
        centered={true}
      />
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {activeCategory === "All" ? (
        <div className="space-y-8">
          {Object.entries(techStackData).map(([categoryName, techs]) => (
            <motion.div
              key={categoryName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {categoryName}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {techs.map((tech, index) => (
                  <TechCard
                    key={tech.name}
                    tech={tech}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredTech.map((tech, index) => (
            <TechCard
              key={tech.name}
              tech={tech}
              index={index}
            />
          ))}
        </div>
      )}
    </motion.section>
  );
}

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  const getLevelGradient = (level: string) => {
    switch (level) {
      case "Expert":
        return "from-emerald-500 to-teal-600";
      case "Intermediate":
        return "from-blue-500 to-indigo-600";
      case "Beginner":
        return "from-amber-500 to-orange-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getLevelBadgeStyle = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800";
      case "Intermediate":
        return "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800";
      case "Beginner":
        return "bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getExperienceColor = (years: number | undefined) => {
    if (!years) return "text-gray-600 dark:text-gray-400";
    if (years >= 4) return "text-emerald-600 dark:text-emerald-400";
    if (years >= 2) return "text-blue-600 dark:text-blue-400";
    return "text-amber-600 dark:text-amber-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${getLevelGradient(tech.level)} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl scale-105`} />
        <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 group-hover:border-gray-300/80 dark:group-hover:border-gray-600/80 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-black/5 dark:group-hover:shadow-black/40 overflow-hidden">
          <div className="relative h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent">
            <div className={`absolute inset-0 bg-gradient-to-r ${getLevelGradient(tech.level)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-4 right-4 w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute top-8 left-6 w-0.5 h-0.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-6 right-8 w-0.5 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          <div className="p-4 relative">
            <div className="flex justify-center mb-3">
              <div className="relative group/icon">
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-3 rounded-xl border border-gray-200/50 dark:border-gray-600/50 group-hover:border-gray-300/70 dark:group-hover:border-gray-500/70 transition-all duration-300">
                  <Icon
                    icon={tech.icon}
                    className="group-hover/icon:scale-110 group-hover/icon:rotate-3 transition-all duration-300"
                    width={36}
                    height={36}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${getLevelGradient(tech.level)} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                </div>
              </div>
            </div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-center mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors tracking-tight">
              {tech.name}
            </h3>
            <div className="flex justify-center mb-2">
              <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold border ${getLevelBadgeStyle(tech.level)} transition-all duration-300`}>
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getLevelGradient(tech.level)} mr-1.5`} />
                {tech.level}
              </span>
            </div>
            {tech.yearsUsed && (
              <div className="text-center">
                <div className="inline-flex items-center gap-1">
                  <div className={`w-1 h-1 rounded-full ${getExperienceColor(tech.yearsUsed).replace('text-', 'bg-')}`} />
                  <span className={`text-xs font-medium ${getExperienceColor(tech.yearsUsed)}`}>
                    {tech.yearsUsed} year{tech.yearsUsed > 1 ? 's' : ''} exp
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
