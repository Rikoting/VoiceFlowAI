import { motion } from "framer-motion";
import { 
  Mic, 
  FileText, 
  Lightbulb, 
  Zap, 
  Database, 
  MessageSquare,
  ExternalLink,
  Github,
  Mail,
  Share2,
  CheckCircle,
  AlertTriangle,
  Heart,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-space-900 text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-neon-500/5 pointer-events-none" />
      
      {/* Navigation */}
      <nav className="relative z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-electric-500 to-neon-500 flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">VoiceFlow AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
              <a href="#tech" className="text-gray-300 hover:text-white transition-colors">Tech Stack</a>
              <Button className="bg-electric-500 hover:bg-electric-400">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Floating Elements */}
          <motion.div 
            className="absolute top-10 left-10 w-3 h-3 bg-electric-500 rounded-full opacity-60"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-32 right-20 w-2 h-2 bg-neon-500 rounded-full opacity-40"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-20 left-32 w-4 h-4 bg-purple-500 rounded-full opacity-50"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <motion.div className="relative z-10" {...fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">AI-Powered</span><br/>
              <span className="text-white">Voice Transcription</span><br/>
              <span className="text-gray-400 text-3xl md:text-4xl font-normal">for Modern Teams</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform customer voice recordings into structured CRM data automatically. 
              Extract names, emails, urgency levels, and project details with AI precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button className="bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-400 hover:to-neon-400 px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 glow-border">
                <Eye className="w-5 h-5 mr-2" />
                See Airtable Demo
              </Button>
              <Button variant="outline" className="glass-effect border-white/20 hover:border-white/40 px-8 py-4 text-lg font-semibold rounded-xl">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-electric-500 mb-2">95%</div>
                    <div className="text-gray-300">Transcription Accuracy</div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-neon-500 mb-2">&lt;30s</div>
                    <div className="text-gray-300">Processing Time</div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-500 mb-2">24/7</div>
                    <div className="text-gray-300">Automated Workflow</div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="workflow" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">How It Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered pipeline transforms raw voice recordings into structured CRM data in seconds
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-500 via-neon-500 to-purple-500 opacity-30 transform -translate-y-1/2" />
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Step 1 */}
              <motion.div className="relative group" variants={fadeInUp}>
                <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-electric-500 to-electric-400 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <Mic className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Voice Input</h3>
                    <p className="text-gray-400 text-sm">Upload via Telegram or direct file upload. Supports multiple audio formats.</p>
                  </CardContent>
                </Card>
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 bg-electric-500 rounded-full transform -translate-y-1/2 animate-pulse" />
              </motion.div>

              {/* Step 2 */}
              <motion.div className="relative group" variants={fadeInUp}>
                <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-neon-500 to-neon-400 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">AI Transcription</h3>
                    <p className="text-gray-400 text-sm">Whisper AI converts speech to text with 95% accuracy and punctuation.</p>
                  </CardContent>
                </Card>
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 bg-neon-500 rounded-full transform -translate-y-1/2 animate-pulse" style={{ animationDelay: "0.5s" }} />
              </motion.div>

              {/* Step 3 */}
              <motion.div className="relative group" variants={fadeInUp}>
                <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">GPT Parsing</h3>
                    <p className="text-gray-400 text-sm">Extract names, emails, urgency levels, and project details automatically.</p>
                  </CardContent>
                </Card>
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 bg-purple-500 rounded-full transform -translate-y-1/2 animate-pulse" style={{ animationDelay: "1s" }} />
              </motion.div>

              {/* Step 4 */}
              <motion.div className="relative group" variants={fadeInUp}>
                <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-electric-500 to-neon-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Enrichment</h3>
                    <p className="text-gray-400 text-sm">Validate fields, apply urgency tagging, and format data for CRM integration.</p>
                  </CardContent>
                </Card>
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-r from-electric-500 to-neon-500 rounded-full transform -translate-y-1/2 animate-pulse" style={{ animationDelay: "1.5s" }} />
              </motion.div>

              {/* Step 5 */}
              <motion.div className="relative group" variants={fadeInUp}>
                <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-electric-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Airtable CRM</h3>
                    <p className="text-gray-400 text-sm">Structured data pushed directly to your CRM with real-time updates.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Output Section */}
      <section id="demo" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-space-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Live Output</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See real CRM data generated from voice recordings in our Airtable integration
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="glass-card border-white/10 rounded-3xl p-8 mb-8">
              <CardContent className="p-0">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">A</span>
                      </div>
                      <span className="font-semibold text-gray-800">Customer Voice Recordings</span>
                    </div>
                    <div className="text-sm text-gray-500">Last updated: 2 min ago</div>
                  </div>
                  
                  <div className="bg-white">
                    <div className="grid grid-cols-5 gap-4 p-4 border-b text-sm font-medium text-gray-700">
                      <div>Customer Name</div>
                      <div>Email</div>
                      <div>Urgency</div>
                      <div>Project Type</div>
                      <div>Timeline</div>
                    </div>
                    
                    <div className="divide-y">
                      <div className="grid grid-cols-5 gap-4 p-4 text-sm">
                        <div className="text-gray-900 font-medium">Sarah Johnson</div>
                        <div className="text-blue-600">sarah.j@company.com</div>
                        <div><span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">High</span></div>
                        <div className="text-gray-700">E-commerce Website</div>
                        <div className="text-gray-700">2 weeks</div>
                      </div>
                      <div className="grid grid-cols-5 gap-4 p-4 text-sm">
                        <div className="text-gray-900 font-medium">Mike Chen</div>
                        <div className="text-blue-600">m.chen@startup.io</div>
                        <div><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Medium</span></div>
                        <div className="text-gray-700">Mobile App</div>
                        <div className="text-gray-700">6 weeks</div>
                      </div>
                      <div className="grid grid-cols-5 gap-4 p-4 text-sm">
                        <div className="text-gray-900 font-medium">Emily Rodriguez</div>
                        <div className="text-blue-600">emily.r@agency.com</div>
                        <div><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Low</span></div>
                        <div className="text-gray-700">Brand Identity</div>
                        <div className="text-gray-700">4 weeks</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button className="bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-400 hover:to-neon-400 px-8 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Full Airtable
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge AI and automation technologies
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Whisper */}
            <motion.div variants={fadeInUp}>
              <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Mic className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Whisper AI</h3>
                  <p className="text-gray-400 text-sm">OpenAI's state-of-the-art speech recognition model</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* GPT-4 */}
            <motion.div variants={fadeInUp}>
              <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">GPT-4</h3>
                  <p className="text-gray-400 text-sm">Advanced language model for data extraction and analysis</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* n8n */}
            <motion.div variants={fadeInUp}>
              <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">n8n</h3>
                  <p className="text-gray-400 text-sm">Workflow automation platform connecting all services</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Airtable */}
            <motion.div variants={fadeInUp}>
              <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Database className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Airtable</h3>
                  <p className="text-gray-400 text-sm">Flexible database and CRM for structured data storage</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Telegram */}
            <motion.div variants={fadeInUp}>
              <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Telegram</h3>
                  <p className="text-gray-400 text-sm">Bot integration for seamless file uploads and notifications</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-space-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Project Highlights</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced features that make our voice processing pipeline robust and reliable
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* AI Fallback Logic */}
            <motion.div variants={fadeInUp}>
              <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-500 to-neon-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">AI Fallback Logic</h3>
                      <p className="text-gray-400">Intelligent error handling with multiple AI model fallbacks ensures 99.9% processing reliability even when primary services are unavailable.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Urgency Tagging */}
            <motion.div variants={fadeInUp}>
              <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Smart Urgency Tagging</h3>
                      <p className="text-gray-400">Advanced NLP analysis identifies urgent requests from voice tone, keywords, and context to prioritize critical customer needs automatically.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enum-Safe Fields */}
            <motion.div variants={fadeInUp}>
              <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Enum-Safe Field Validation</h3>
                      <p className="text-gray-400">Structured data validation ensures all extracted information conforms to predefined schemas, preventing data corruption in your CRM.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Real-Time Processing */}
            <motion.div variants={fadeInUp}>
              <Card className="glass-card border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Real-Time Processing</h3>
                      <p className="text-gray-400">Lightning-fast pipeline processes voice recordings in under 30 seconds from upload to CRM entry, enabling immediate action on customer requests.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GitHub and Contact */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Get Started</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to automate your voice transcription workflow? Access our open-source solution or get in touch for custom implementation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button variant="outline" className="glass-effect border-white/20 hover:border-white/40 px-8 py-4 text-lg font-semibold rounded-xl">
                <Github className="w-6 h-6 mr-3" />
                View Repository
              </Button>
              
              <Button className="bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-400 hover:to-neon-400 px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300">
                <Mail className="w-6 h-6 mr-3" />
                Get In Touch
              </Button>
            </div>

            {/* Contact Info */}
            <Card className="glass-card border-white/10 max-w-md mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-electric-500" />
                    <span>hello@voiceflow-ai.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Share2 className="w-5 h-5 text-neon-500" />
                    <span>@voiceflow_ai</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-electric-500 to-neon-500 flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">VoiceFlow AI</span>
            </div>
            
            <div className="text-gray-400 text-sm flex items-center">
              © 2024 VoiceFlow AI. Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> for automation enthusiasts.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
