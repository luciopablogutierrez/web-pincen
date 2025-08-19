import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="footer" className="py-12 bg-black/50 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold neon-text-blue mb-4">Connect with NexusAI</h2>
                <p className="text-lg neon-text-pink mb-8">Initiate contact through our designated communication channels.</p>
                
                <div className="flex justify-center space-x-8 mb-8">
                    <a href="#" aria-label="Twitter" className="neon-text-blue hover:neon-text-pink transition text-3xl">
                        <Twitter />
                    </a>
                    <a href="#" aria-label="Github" className="neon-text-blue hover:neon-text-pink transition text-3xl">
                        <Github />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="neon-text-blue hover:neon-text-pink transition text-3xl">
                        <Linkedin />
                    </a>
                </div>

                <div className="border-t border-gray-800/50 pt-8">
                    <p className="text-muted-foreground">&copy; {new Date().getFullYear()} NexusAI Corporation. All Rights Reserved. System online.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
