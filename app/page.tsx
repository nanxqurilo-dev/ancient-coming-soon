"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaLock, FaLeaf, FaHands, FaGem } from "react-icons/fa";
import { GiLotus } from "react-icons/gi";
import Timer from "@/components/Timer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } },
};

export default function Home() {
  return (
    <main className="min-h-screen relative bg-dark-bg selection:bg-gold selection:text-black">
      
      {/* Background Glow & Image Placeholders */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Placeholder for the glowing center and temple background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent blur-[100px]"></div>
        <div className="absolute inset-0 opacity-20">
           <Image 
             src="https://images.unsplash.com/photo-1590651584955-31298bc51f50?q=80&w=1920&auto=format&fit=crop" 
             alt="Temple Placeholder" 
             fill 
             className="object-cover object-center mix-blend-overlay" 
           />
           {/* NOTE: Replace 'src' with your actual temple image later: '/images/temple.jpg' */}
        </div>
      </div>

      {/* Top Navigation */}
      <header className="relative z-10 flex justify-between items-center p-6 md:px-12 text-xs tracking-widest">
        <div className="flex gap-6 text-gold-light">
          <FaFacebookF className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
          <FaYoutube className="cursor-pointer hover:text-white" />
        </div>
        <div className="hidden md:flex items-center gap-2 text-gold-light">
          <span>PREMIUM SPIRITUAL OFFERINGS</span>
          <div className="w-6 h-[1px] bg-gold-light"></div>
        </div>
      </header>

      {/* Scroll Indicator (Left) */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4 text-[10px] tracking-widest text-gold-light opacity-60 [writing-mode:vertical-rl]">
        <div className="h-12 w-[1px] bg-gold-light"></div>
        SCROLL TO DISCOVER
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-12 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="flex justify-center mb-2">
            <GiLotus className="text-4xl text-gold" />
          </div>
          <p className="text-lg tracking-[0.3em] text-gold-light font-display uppercase">Ancient</p>
          <h1 className="text-7xl md:text-9xl font-serif text-gold tracking-widest font-normal drop-shadow-xl">INDIA</h1>
          <div className="w-20 h-[1px] bg-gold mx-auto my-4"></div>
          <p className="text-sm tracking-[0.2em] text-gray-300 uppercase font-light">Rooted in Tradition. Crafted with Devotion.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 items-center relative">
          
          {/* Left: Text & CTA */}
          <motion.div {...fadeInUp} className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <div className="w-8 h-[1px] bg-gold mx-auto lg:mx-0"></div>
            <p className="text-xs tracking-[0.2em] text-gold uppercase font-bold">Premium Dhoop</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Crafted with <br />
              <span className="text-gold">Devotion</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-light max-w-md mx-auto lg:mx-0">
              Experience the purity of ancient traditions with our handcrafted Dhoop and spiritual offerings. Made from the finest natural ingredients for a divine experience.
            </p>
            <button className="mt-4 px-8 py-3 border border-gold bg-transparent text-gold text-xs tracking-widest uppercase transition-all hover:bg-gold hover:text-black">
              Discover Our Promise &rarr;
            </button>
          </motion.div>

          {/* Center: Dhoop Image & Atmosphere */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center items-center h-[400px] md:h-[600px] w-full"
          >
            {/* Placeholder for Mandala/Decorative pattern behind Dhoop */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,_#C19B5E_0%,_transparent_70%)] opacity-20 scale-110 blur-md"></div>
            <div className="absolute inset-0 border-[1px] border-gold/20 rounded-full scale-75 animate-pulse"></div>
            
            {/* Dhoop Image Placeholder */}
            <div className="relative w-[300px] md:w-[450px] h-[400px] md:h-[600px] z-10 drop-shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1601054814414-b1d43359a0ca?q=80&w=800&auto=format&fit=crop"
                alt="Dhoop Cone"
                fill
                className="object-contain"
              />
              {/* NOTE: Replace with '/images/dhoop.png' later */}
            </div>
            
            {/* Smoke Animation Placeholder (Static for now) */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-t from-gold/0 to-white/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
          </motion.div>

          {/* Right: Timer Box */}
          <motion.div {...fadeInUp} className="order-3 lg:order-3 flex justify-center lg:justify-end">
            <div className="bg-black/50 backdrop-blur-sm border border-gold/30 p-8 md:p-10 rounded-lg w-full max-w-[320px] shadow-2xl text-center">
              <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center text-gold mx-auto mb-4">
                <FaGem className="text-sm" />
              </div>
              <h3 className="text-[10px] tracking-widest text-gray-300 uppercase">We Are Coming Soon</h3>
              <Timer />
              <p className="text-[10px] text-gray-400 mt-6 leading-relaxed">
                Something divine is on the way.<br /> Stay connected for early access.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Feature Highlights */}
      <section className="relative z-10 container mx-auto px-4 py-12 border-t border-white/10">
        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          whileInView="whileInView" 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-white/10"
        >
          {features.map((feat, i) => (
            <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center text-gold mb-4 text-xl">
                {feat.icon}
              </div>
              <h4 className="text-sm text-gold font-display tracking-widest uppercase">{feat.title}</h4>
              <p className="text-[10px] text-gray-400 mt-1">{feat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="relative z-10 container mx-auto px-4 pb-20">
        <motion.div {...fadeInUp} className="border border-gold/20 rounded-2xl p-8 md:p-16 bg-dark-100/80 backdrop-blur-sm relative overflow-hidden">
          {/* Background Image for Newsletter (Port/Bowl Placeholder) */}
          <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 blur-md pointer-events-none">
             <Image src="https://images.unsplash.com/photo-1586351789812-2e47ee8e78e8?q=80&w=400" alt="Bowl" fill className="object-cover" />
             {/* NOTE: Replace with '/images/port-bowl.png' later */}
          </div>

          <div className="flex flex-col items-center text-center relative z-10 max-w-xl mx-auto">
             <div className="w-10 h-[1px] bg-gold mb-4"></div>
             <p className="text-[10px] tracking-[0.2em] text-gold uppercase">Be The First To Know</p>
             <h2 className="text-4xl font-serif text-white mt-2 mb-2">
               Join Our <span className="text-gold">Sacred</span> Circle
             </h2>
             <p className="text-sm text-gray-400 mb-8">Subscribe for exclusive updates, early access and special offers.</p>
             
             <form className="w-full flex flex-col sm:flex-row gap-4">
               <input 
                 type="email" 
                 placeholder="Enter your email address" 
                 className="flex-1 bg-transparent border border-white/20 px-6 py-4 rounded-md text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
               />
               <button className="px-8 py-4 bg-gold text-black text-xs font-bold tracking-widest uppercase rounded-md hover:bg-gold-light transition-colors shadow-lg shadow-gold/20">
                 Notify Me
               </button>
             </form>
             
             <div className="flex items-center gap-2 mt-6 text-[10px] text-gray-500">
               <FaLock className="text-xs" />
               <span>We respect your privacy. No spam, ever.</span>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col md:flex-row justify-between items-center px-8 py-6 text-[10px] text-gray-400 border-t border-white/5 gap-4">
        <div className="flex items-center gap-2">
           <GiLotus className="text-gold text-lg" />
           <span className="text-gold/60 text-[8px]">AI</span>
        </div>
        <p>&copy; 2024 Ancient India. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Use</a>
        </div>
      </footer>
    </main>
  );
}

// Feature data
const features = [
  { title: "100% Natural", sub: "Pure • Safe • Authentic", icon: <FaLeaf /> },
  { title: "Handcrafted", sub: "Made with Sacred Rituals", icon: <FaHands /> },
  { title: "Spiritual Significance", sub: "Elevate your Spiritual Journey", icon: <GiLotus /> },
  { title: "Premium Quality", sub: "Finest Ingredients Sourced", icon: <FaGem /> },
];