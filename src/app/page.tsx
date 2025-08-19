import Header from '@/components/header';
import Footer from '@/components/footer';
import Typewriter from '@/components/typewriter';
import { 
  ArrowRight, 
  Terminal, 
  Brain, 
  Network, 
  Shield, 
  Bot, 
  CheckCircle2, 
  LineChart, 
  ShieldCheck, 
  Shuffle,
  Server,
  PieChart,
  Factory,
  HeartPulse,
  ChevronRight,
  Check,
  X
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 grid-pattern">
          <div className="max-w-7xl mx-auto">
              <div className="text-center">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">
                      <span className="neon-text-blue">CYBERNETIC</span> 
                      <span className="neon-text-pink">AI AGENTS</span> 
                      <br />
                      <span className="text-xl md:text-3xl mt-4 block neon-text-green">FOR THE DIGITAL FRONTIER</span>
                  </h1>
                  
                  <div className="max-w-3xl mx-auto mt-10">
                      <p className="text-xl md:text-2xl mb-8 neon-text-yellow h-8 md:h-10">
                          NexusAI deploys autonomous agents that <Typewriter />
                      </p>
                      
                      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                          <button className="cyber-btn neon-border-pink px-8 py-4 rounded-md text-lg font-bold neon-text-pink hover:neon-glow-pink mx-auto sm:mx-0 inline-flex items-center justify-center magnetic-target">
                              DEPLOY AGENTS <ArrowRight className="ml-2 h-5 w-5" />
                          </button>
                          <button className="cyber-btn neon-border-blue px-8 py-4 rounded-md text-lg font-bold neon-text-blue hover:neon-glow-blue mx-auto sm:mx-0 inline-flex items-center justify-center magnetic-target">
                              REQUEST DEMO <Terminal className="ml-2 h-5 w-5" />
                          </button>
                      </div>
                  </div>
              </div>
              
              <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="cyber-card neon-border-blue p-6 rounded-lg bg-black/40">
                      <div className="text-4xl neon-text-blue mb-4">
                          <Brain />
                      </div>
                      <h3 className="text-xl font-bold neon-text-blue mb-3">Autonomous Operation</h3>
                      <p className="text-foreground/80">Our agents learn, adapt and execute tasks without human intervention, 24/7.</p>
                  </div>
                  <div className="cyber-card neon-border-purple p-6 rounded-lg bg-black/40">
                      <div className="text-4xl neon-text-purple mb-4">
                          <Network />
                      </div>
                      <h3 className="text-xl font-bold neon-text-purple mb-3">Swarm Intelligence</h3>
                      <p className="text-foreground/80">Agent networks that collaborate to solve complex problems at scale.</p>
                  </div>
                  <div className="cyber-card neon-border-green p-6 rounded-lg bg-black/40">
                      <div className="text-4xl neon-text-green mb-4">
                          <Shield />
                      </div>
                      <h3 className="text-xl font-bold neon-text-green mb-3">Blockchain Secured</h3>
                      <p className="text-foreground/80">Tamper-proof execution with decentralized verification and audit trails.</p>
                  </div>
              </div>
          </div>
        </section>

        {/* Agent Types Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold neon-text-yellow mb-4">AI AGENT ECOSYSTEM</h2>
                    <p className="text-xl neon-text-blue max-w-3xl mx-auto">Specialized cybernetic entities designed for your digital infrastructure</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="cyber-card neon-border-green p-6 rounded-lg bg-black/40 h-full flex flex-col">
                        <div className="text-4xl neon-text-green mb-4"><Bot /></div>
                        <h3 className="text-xl font-bold neon-text-green mb-3">Worker Drones</h3>
                        <p className="text-foreground/80 mb-4 flex-grow">Automate repetitive tasks with precision and relentless efficiency.</p>
                        <ul className="space-y-2 text-sm neon-text-blue">
                            <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4" /> Data processing</li>
                            <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4" /> System monitoring</li>
                            <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4" /> Routine maintenance</li>
                        </ul>
                    </div>
                    
                    <div className="cyber-card neon-border-purple p-6 rounded-lg bg-black/40 h-full flex flex-col">
                        <div className="text-4xl neon-text-purple mb-4"><LineChart /></div>
                        <h3 className="text-xl font-bold neon-text-purple mb-3">Analyst Nodes</h3>
                        <p className="text-foreground/80 mb-4 flex-grow">Process complex data streams and extract actionable intelligence.</p>
                        <ul className="space-y-2 text-sm neon-text-blue">
                            <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4" /> Predictive analytics</li>
                            <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4" /> Anomaly detection</li>
                            <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4" /> Market forecasting</li>
                        </ul>
                    </div>
                    
                    <div className="cyber-card neon-border-pink p-6 rounded-lg bg-black/40 h-full flex flex-col">
                        <div className="text-4xl neon-text-pink mb-4"><ShieldCheck /></div>
                        <h3 className="text-xl font-bold neon-text-pink mb-3">Sentinel Units</h3>
                        <p className="text-foreground/80 mb-4 flex-grow">Protect your digital assets with autonomous security protocols.</p>
                        <ul className="space-y-2 text-sm neon-text-blue">
                            <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4" /> Threat detection</li>
                            <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4" /> Intrusion prevention</li>
                            <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4" /> Vulnerability scanning</li>
                        </ul>
                    </div>
                    
                    <div className="cyber-card neon-border-blue p-6 rounded-lg bg-black/40 h-full flex flex-col">
                        <div className="text-4xl neon-text-blue mb-4"><Shuffle /></div>
                        <h3 className="text-xl font-bold neon-text-blue mb-3">Swarm Controllers</h3>
                        <p className="text-foreground/80 mb-4 flex-grow">Coordinate multi-agent systems for complex operations.</p>
                        <ul className="space-y-2 text-sm neon-text-blue">
                            <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4" /> Resource allocation</li>
                            <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4" /> Task delegation</li>
                            <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4" /> Collective learning</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 grid-pattern">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold neon-text-pink mb-4">INDUSTRY SOLUTIONS</h2>
                    <p className="text-xl neon-text-blue max-w-3xl mx-auto">Deploy our cybernetic agents across your enterprise stack</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="cyber-card neon-border-yellow p-8 rounded-lg bg-black/40">
                        <div className="flex items-start">
                            <div className="text-5xl neon-text-yellow mr-6 flex-shrink-0"><Server /></div>
                            <div>
                                <h3 className="text-2xl font-bold neon-text-yellow mb-4">Digital Infrastructure</h3>
                                <p className="text-foreground/80 mb-4">Autonomous management of cloud resources, network optimization, and system maintenance.</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start"><span className="neon-text-green mr-3 mt-1"><ChevronRight size={16}/></span><span>Self-healing server clusters</span></li>
                                    <li className="flex items-start"><span className="neon-text-green mr-3 mt-1"><ChevronRight size={16}/></span><span>Dynamic load balancing</span></li>
                                    <li className="flex items-start"><span className="neon-text-green mr-3 mt-1"><ChevronRight size={16}/></span><span>Predictive scaling</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cyber-card neon-border-purple p-8 rounded-lg bg-black/40">
                        <div className="flex items-start">
                           <div className="text-5xl neon-text-purple mr-6 flex-shrink-0"><PieChart /></div>
                            <div>
                                <h3 className="text-2xl font-bold neon-text-purple mb-4">Financial Systems</h3>
                                <p className="text-foreground/80 mb-4">Algorithmic trading, fraud detection, and real-time market analysis at machine speeds.</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start"><span className="neon-text-green mr-3 mt-1"><ChevronRight size={16}/></span><span>High-frequency trading agents</span></li>
                                    <li className="flex items-start"><span className="neon-text-green mr-3 mt-1"><ChevronRight size={16}/></span><span>Anomaly detection networks</span></li>
                                    <li className="flex items-start"><span className="neon-text-green mr-3 mt-1"><ChevronRight size={16}/></span><span>Portfolio optimization</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cyber-card neon-border-blue p-8 rounded-lg bg-black/40">
                        <div className="flex items-start">
                            <div className="text-5xl neon-text-blue mr-6 flex-shrink-0"><Factory /></div>
                            <div>
                                <h3 className="text-2xl font-bold neon-text-blue mb-4">Manufacturing 4.0</h3>
                                <p className="text-foreground/80 mb-4">End-to-end automation of production lines with predictive maintenance and quality control.</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start"><span className="neon-text-green mr-3 mt-1"><ChevronRight size={16}/></span><span>Smart inventory management</span></li>
                                    <li className="flex items-start"><span className="neon-text-green mr-3 mt-1"><ChevronRight size={16}/></span><span>Autonomous quality inspection</span></li>
                                    <li className="flex items-start"><span className="neon-text-green mr-3 mt-1"><ChevronRight size={16}/></span><span>Supply chain optimization</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cyber-card neon-border-pink p-8 rounded-lg bg-black/40">
                        <div className="flex items-start">
                           <div className="text-5xl neon-text-pink mr-6 flex-shrink-0"><HeartPulse /></div>
                            <div>
                                <h3 className="text-2xl font-bold neon-text-pink mb-4">Healthcare Systems</h3>
                                <p className="text-foreground/80 mb-4">AI-assisted diagnosis, patient monitoring, and drug discovery acceleration.</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start"><span className="neon-text-green mr-3 mt-1"><ChevronRight size={16}/></span><span>Medical imaging analysis</span></li>
                                    <li className="flex items-start"><span className="neon-text-green mr-3 mt-1"><ChevronRight size={16}/></span><span>Personalized treatment plans</span></li>
                                    <li className="flex items-start"><span className="neon-text-green mr-3 mt-1"><ChevronRight size={16}/></span><span>Research data synthesis</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold neon-text-green mb-4">AGENT DEPLOYMENT PLANS</h2>
                    <p className="text-xl neon-text-blue max-w-3xl mx-auto">Scalable pricing for enterprises of all sizes</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="cyber-card neon-border-blue p-8 rounded-lg bg-black/40 text-center">
                        <h3 className="text-2xl font-bold neon-text-blue mb-4">STARTER PACK</h3>
                        <div className="text-5xl font-bold neon-text-green mb-6">$999<span className="text-xl">/mo</span></div>
                        <p className="text-foreground/80 mb-8">For small teams and pilot projects</p>
                        <ul className="space-y-4 mb-10 text-left">
                            <li className="flex items-center"><Check className="neon-text-green mr-3 h-5 w-5" /><span>5 Worker Drones</span></li>
                            <li className="flex items-center"><Check className="neon-text-green mr-3 h-5 w-5" /><span>1 Analyst Node</span></li>
                            <li className="flex items-center"><Check className="neon-text-green mr-3 h-5 w-5" /><span>Basic Monitoring</span></li>
                            <li className="flex items-center text-muted-foreground"><X className="mr-3 h-5 w-5" /><span>No Sentinel Units</span></li>
                            <li className="flex items-center text-muted-foreground"><X className="mr-3 h-5 w-5" /><span>No Swarm Controllers</span></li>
                        </ul>
                        <button className="cyber-btn neon-border-blue w-full py-3 rounded-md font-bold neon-text-blue hover:neon-glow-blue magnetic-target">DEPLOY STARTER</button>
                    </div>

                    <div className="cyber-card neon-border-purple p-8 rounded-lg bg-black/40 text-center transform md:scale-110 z-10 relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <span className="bg-neon-purple-raw text-white px-4 py-1 rounded-full text-sm font-bold uppercase" style={{backgroundColor: "hsl(var(--neon-purple-hsl))"}}>Most Popular</span>
                        </div>
                        <h3 className="text-2xl font-bold neon-text-purple mb-4 mt-6">ENTERPRISE SWARM</h3>
                        <div className="text-5xl font-bold neon-text-green mb-6">$4,999<span className="text-xl">/mo</span></div>
                        <p className="text-foreground/80 mb-8">For established operations and scaling businesses</p>
                        <ul className="space-y-4 mb-10 text-left">
                           <li className="flex items-center"><Check className="neon-text-green mr-3 h-5 w-5" /><span>50 Worker Drones</span></li>
                           <li className="flex items-center"><Check className="neon-text-green mr-3 h-5 w-5" /><span>10 Analyst Nodes</span></li>
                           <li className="flex items-center"><Check className="neon-text-green mr-3 h-5 w-5" /><span>5 Sentinel Units</span></li>
                           <li className="flex items-center"><Check className="neon-text-green mr-3 h-5 w-5" /><span>1 Swarm Controller</span></li>
                           <li className="flex items-center"><Check className="neon-text-green mr-3 h-5 w-5" /><span>Priority Support</span></li>
                        </ul>
                        <button className="cyber-btn neon-border-purple w-full py-3 rounded-md font-bold neon-text-purple hover:neon-glow-purple magnetic-target">DEPLOY ENTERPRISE</button>
                    </div>
                    
                    <div className="cyber-card neon-border-yellow p-8 rounded-lg bg-black/40 text-center">
                        <h3 className="text-2xl font-bold neon-text-yellow mb-4">CUSTOM GRID</h3>
                        <div className="text-5xl font-bold neon-text-green mb-6">Contact Us</div>
                        <p className="text-foreground/80 mb-8">For large-scale, bespoke deployments</p>
                        <ul className="space-y-4 mb-10 text-left">
                            <li className="flex items-center"><Check className="neon-text-green mr-3 h-5 w-5" /><span>Unlimited Agents</span></li>
                            <li className="flex items-center"><Check className="neon-text-green mr-3 h-5 w-5" /><span>Dedicated Infrastructure</span></li>
                            <li className="flex items-center"><Check className="neon-text-green mr-3 h-5 w-5" /><span>Custom Agent Development</span></li>
                            <li className="flex items-center"><Check className="neon-text-green mr-3 h-5 w-5" /><span>On-chain Governance</span></li>
                            <li className="flex items-center"><Check className="neon-text-green mr-3 h-5 w-5" /><span>24/7 Technical Liaison</span></li>
                        </ul>
                        <button className="cyber-btn neon-border-yellow w-full py-3 rounded-md font-bold neon-text-yellow hover:neon-glow-yellow magnetic-target">INITIATE CONTACT</button>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 grid-pattern">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold neon-text-pink mb-4">INITIATE CONTACT</h2>
                <p className="text-xl neon-text-blue max-w-3xl mx-auto">Send a secure transmission to the NexusAI high command.</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
