import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Database, Server, Terminal, Download, Github, Linkedin, Mail, 
  Pocket as Docker, Diameter as Kubernetes, GitBranch, GitPullRequest, 
  Monitor, Activity, AlertCircle, BarChart, Settings, Shield, Network, 
  Cpu, Box, Workflow, LineChart, Gauge, Globe, Lock, HardDrive,
  Layers, MessageSquare, Zap, Radio, Wifi, CloudRain, CloudLightning,
  CloudSnow, CircuitBoard, Binary, Cog, Share2, Boxes, Package
} from 'lucide-react';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const containerTools = [
    {
      category: "Container Technologies",
      description: "Expert in containerization and orchestration",
      tools: [
        {
          name: "Docker",
          icon: <Docker className="w-12 h-12" />,
          skills: ["Container Creation", "Multi-stage Builds", "Docker Compose", "Image Optimization"]
        },
        {
          name: "Kubernetes",
          icon: <Kubernetes className="w-12 h-12" />,
          skills: ["Cluster Management", "Pod Orchestration", "Service Mesh", "Auto-scaling"]
        }
      ]
    }
  ];

  const azureServices = [
    {
      category: "Compute & Containers",
      services: [
        { name: "Azure Kubernetes Service", icon: <Kubernetes className="w-6 h-6" /> },
        { name: "Azure Container Instances", icon: <Box className="w-6 h-6" /> },
        { name: "Virtual Machines", icon: <Server className="w-6 h-6" /> },
        { name: "Azure Functions", icon: <Zap className="w-6 h-6" /> }
      ]
    },
    {
      category: "DevOps & CI/CD",
      services: [
        { name: "Azure DevOps", icon: <Workflow className="w-6 h-6" /> },
        { name: "Azure Pipelines", icon: <GitBranch className="w-6 h-6" /> },
        { name: "Container Registry", icon: <Boxes className="w-6 h-6" /> },
        { name: "Azure Artifacts", icon: <Package className="w-6 h-6" /> }
      ]
    },
    {
      category: "Monitoring & Analytics",
      services: [
        { name: "Azure Monitor", icon: <Activity className="w-6 h-6" /> },
        { name: "Application Insights", icon: <LineChart className="w-6 h-6" /> },
        { name: "Log Analytics", icon: <BarChart className="w-6 h-6" /> },
        { name: "Azure Sentinel", icon: <Shield className="w-6 h-6" /> }
      ]
    },
    {
      category: "Security & Networking",
      services: [
        { name: "Key Vault", icon: <Lock className="w-6 h-6" /> },
        { name: "Security Center", icon: <AlertCircle className="w-6 h-6" /> },
        { name: "Virtual Network", icon: <Network className="w-6 h-6" /> },
        { name: "DDoS Protection", icon: <Shield className="w-6 h-6" /> }
      ]
    }
  ];

  const awsServices = [
    {
      category: "Compute & Containers",
      services: [
        { name: "Amazon EKS", icon: <Kubernetes className="w-6 h-6" /> },
        { name: "Amazon ECS", icon: <Boxes className="w-6 h-6" /> },
        { name: "EC2", icon: <Server className="w-6 h-6" /> },
        { name: "Lambda", icon: <Zap className="w-6 h-6" /> }
      ]
    },
    {
      category: "Storage & Database",
      services: [
        { name: "S3", icon: <HardDrive className="w-6 h-6" /> },
        { name: "RDS", icon: <Database className="w-6 h-6" /> },
        { name: "DynamoDB", icon: <CircuitBoard className="w-6 h-6" /> },
        { name: "ElastiCache", icon: <Zap className="w-6 h-6" /> }
      ]
    }
  ];

  const gcpServices = [
    {
      category: "Compute & Containers",
      services: [
        { name: "GKE", icon: <Kubernetes className="w-6 h-6" /> },
        { name: "Cloud Run", icon: <Zap className="w-6 h-6" /> },
        { name: "Compute Engine", icon: <Server className="w-6 h-6" /> },
        { name: "Cloud Functions", icon: <Binary className="w-6 h-6" /> }
      ]
    },
    {
      category: "Data & Analytics",
      services: [
        { name: "BigQuery", icon: <Database className="w-6 h-6" /> },
        { name: "Cloud Storage", icon: <HardDrive className="w-6 h-6" /> },
        { name: "Cloud Spanner", icon: <Globe className="w-6 h-6" /> },
        { name: "Pub/Sub", icon: <MessageSquare className="w-6 h-6" /> }
      ]
    }
  ];

  const cicdPipeline = [
    { 
      stage: "Code", 
      icon: <GitBranch className="w-8 h-8" />, 
      tools: ["Git", "GitHub", "Azure Repos", "GitLab"],
      description: "Version Control & Collaboration"
    },
    { 
      stage: "Build", 
      icon: <Box className="w-8 h-8" />, 
      tools: ["Docker", "Maven", "Gradle", "npm"],
      description: "Containerization & Compilation"
    },
    { 
      stage: "Test", 
      icon: <Activity className="w-8 h-8" />, 
      tools: ["JUnit", "Selenium", "SonarQube", "Jest"],
      description: "Quality Assurance & Security"
    },
    { 
      stage: "Deploy", 
      icon: <Cloud className="w-8 h-8" />, 
      tools: ["Kubernetes", "Terraform", "Ansible", "Helm"],
      description: "Infrastructure as Code"
    },
    { 
      stage: "Monitor", 
      icon: <Gauge className="w-8 h-8" />, 
      tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
      description: "Observability & Analytics"
    }
  ];

  const monitoringTools = [
    { name: "Prometheus", icon: <LineChart className="w-12 h-12" />, category: "Metrics Collection" },
    { name: "Grafana", icon: <BarChart className="w-12 h-12" />, category: "Visualization" },
    { name: "ELK Stack", icon: <Database className="w-12 h-12" />, category: "Log Management" },
    { name: "Datadog", icon: <Monitor className="w-12 h-12" />, category: "APM & Tracing" },
    { name: "New Relic", icon: <Activity className="w-12 h-12" />, category: "Performance" },
    { name: "Jaeger", icon: <Network className="w-12 h-12" />, category: "Distributed Tracing" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-gray-900" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8 relative"
            >
              <Settings className="w-24 h-24 mx-auto text-blue-400 animate-spin-slow" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Cog className="w-16 h-16 text-purple-400 opacity-50" />
              </motion.div>
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Cloud DevOps Engineer
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Specializing in Multi-Cloud Architecture & Container Orchestration
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold flex items-center mx-auto gap-2 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Container Technologies */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-black/30 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Container Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {containerTools[0].tools.map((tool) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                className="bg-white/5 rounded-xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="text-blue-400">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">{tool.name}</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {tool.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Cloud Platforms */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Multi-Cloud Expertise</h2>
          
          {/* Azure */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-12">
              <CloudLightning className="w-12 h-12 text-blue-400" />
              <h3 className="text-3xl font-bold">Microsoft Azure</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {azureServices.map((category) => (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}</h3>
                  <div className="space-y-4">
                    {category.services.map((service) => (
                      <div key={service.name} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                        {service.icon}
                        <span>{service.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AWS */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-12">
              <CloudRain className="w-12 h-12 text-orange-400" />
              <h3 className="text-3xl font-bold">Amazon Web Services</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awsServices.map((category) => (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-4 text-orange-400">{category.category}</h3>
                  <div className="space-y-4">
                    {category.services.map((service) => (
                      <div key={service.name} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                        {service.icon}
                        <span>{service.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GCP */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-12">
              <CloudSnow className="w-12 h-12 text-green-400" />
              <h3 className="text-3xl font-bold">Google Cloud Platform</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gcpServices.map((category) => (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-400">{category.category}</h3>
                  <div className="space-y-4">
                    {category.services.map((service) => (
                      <div key={service.name} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                        {service.icon}
                        <span>{service.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CI/CD Pipeline */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-black/30 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">CI/CD Pipeline</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-500/20 -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {cicdPipeline.map((stage) => (
                <motion.div
                  key={stage.stage}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm text-center relative z-10">
                    <div className="bg-blue-500/10 rounded-full p-4 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                      {stage.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">{stage.stage}</h3>
                    <p className="text-sm text-gray-400 mb-4">{stage.description}</p>
                    <div className="space-y-2">
                      {stage.tools.map((tool) => (
                        <div key={tool} className="text-sm text-gray-300">{tool}</div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Monitoring Tools */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Monitoring Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {monitoringTools.map((tool) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 rounded-xl p-6 backdrop-blur-sm text-center group hover:bg-white/10 transition-colors"
              >
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors mb-4">
                  {tool.icon}
                </div>
                <h3 className="font-semibold mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-400">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <footer className="py-12 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-8 h-8" />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;