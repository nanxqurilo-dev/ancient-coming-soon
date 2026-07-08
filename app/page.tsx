"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaLock, FaLeaf, FaHands, FaGem } from "react-icons/fa";
import { GiLotus } from "react-icons/gi";
import Countdown, { type CountdownRenderProps } from "react-countdown";

const LAUNCH_DATE_MS = new Date("2026-08-05T00:00:00+05:30").getTime();

// Timer Component - Embedded directly for complete code
const Timer = () => {
  const renderer = ({ days, hours, minutes, seconds }: CountdownRenderProps) => {
    const items = [
      { label: "DAYS", value: days },
      { label: "HOURS", value: hours },
      { label: "MINUTES", value: minutes },
      { label: "SECONDS", value: seconds },
    ];
    return (
      <div className="flex justify-center gap-6 mt-4">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-serif text-white tracking-wider drop-shadow-md">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] tracking-widest text-gold-light mt-1 uppercase opacity-90">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return <Countdown date={LAUNCH_DATE_MS} renderer={renderer} />;
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
};

const poojaCategories = [
  "Dhoop & Agarbatti",
  "Havan Samagri",
  "Kapoor & Ghee Diya",
  "Kumkum & Chandan",
  "Rudraksha & Mala",
  "Kalawa & Pooja Cloth",
];

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black text-white overflow-x-hidden selection:bg-gold selection:text-black">

      {/* ================= BACKGROUND & ATMOSPHERE ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* 1. Extreme warm golden/amber spotlight in the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/40 via-amber-900/10 to-transparent blur-[100px]"></div>

        {/* 2. Slightly lighter warm dark-brown base tone */}
        <div className="absolute inset-0 bg-[#120b07]"></div>

        {/* 3. Temple background image - Made visible and warm */}
        {/* <div className="absolute inset-0 opacity-50">
           <Image 
             src="/images/temple.png" 
             alt="Temple Placeholder" 
             fill 
             className="object-contain object-center" 
           />
        </div>
 */}





        <div className="absolute inset-0 opacity-50">
          <Image
            src="/images/video.gif"
            alt="Temple Placeholder"
            fill
            className="object-cover object-center"
          />
        </div>







        {/* <div className="absolute inset-0 overflow-hidden opacity-50">
  <Image
    src="/images/temple2.webp"
    alt="Temple"
    fill
    priority
    className="
      object-cover
      object-center
      md:object-[center_top]
      lg:object-center
    "
  />
</div> */}




        {/* 4. Subtle vignette to highlight the center (edges darker) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#120b07]/80 via-transparent to-[#120b07]/95 pointer-events-none"></div>

        {/* 5. Floating dust/ember particles (Decorative glow) */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* ================= TOP NAVIGATION (GLASSMORPHISM) ================= */}
      <header className="relative z-20 flex justify-between items-center p-4 md:px-12 text-xs tracking-widest bg-black/30 backdrop-blur-md border-b border-white/5 shadow-lg">
        <div className="flex gap-6 text-gold-light hover:text-white transition-colors">
          <FaFacebookF className="cursor-pointer hover:scale-110 transition-transform" />
          <FaInstagram className="cursor-pointer hover:scale-110 transition-transform" />
          <FaYoutube className="cursor-pointer hover:scale-110 transition-transform" />
        </div>
        <div className="hidden md:flex items-center gap-3 text-gold-light/70 font-semibold">
          <span>PREMIUM SPIRITUAL OFFERINGS</span>
          <div className="w-6 h-[1px] bg-gold-light/50"></div>
        </div>
      </header>

      {/* ================= SCROLL INDICATOR ================= */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-4 text-[10px] tracking-widest text-gold-light/60">
        <div className="h-12 w-[1px] bg-gradient-to-b from-gold-light to-transparent"></div>
        <span className="[writing-mode:vertical-rl]">SCROLL TO DISCOVER</span>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 container mx-auto px-4 pt-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
className="text-center relative flex flex-col items-center"        >
          {/* <div className="flex justify-center mb-2 drop-shadow-[0_0_10px_rgba(193,155,94,0.5)]">
            <GiLotus className="text-4xl text-gold" />
          </div> */}


{/* Big Glow */}
<div className="absolute left-1/2 top-14 -translate-x-1/2 w-[800px] h-[650px] rounded-full bg-amber-400/10 blur-[180px] animate-pulse pointer-events-none -z-10" />

{/* Small Bright Glow */}
<div className="absolute left-1/2 top-28 -translate-x-1/2 w-[220px] h-[220px] rounded-full bg-yellow-300/20 blur-[80px] animate-pulse pointer-events-none -z-10" />



<motion.div
  initial={{ opacity: 0, y: -20, scale: .8 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1 }}
  // className="flex justify-center mb-8"
className="flex justify-center -mb-10">
  {/* <motion.div
    animate={{
      y: [0, -8, 0],
      rotate: [0, 2, 0, -2, 0],
      filter: [
        "drop-shadow(0 0 8px rgba(193,155,94,.3))",
        "drop-shadow(0 0 24px rgba(193,155,94,.8))",
        "drop-shadow(0 0 8px rgba(193,155,94,.3))",
      ],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    // className="relative w-44 h-44 md:w-56 md:h-56"

className="relative w-[320px] h-[150px] md:w-[600px] md:h-[220px]"> */}




<motion.div
  animate={{
    y: [0, -6, 0],
    scale: [1, 1.03, 1],
    filter: [
      "drop-shadow(0 0 8px rgba(193,155,94,.3))",
      "drop-shadow(0 0 24px rgba(193,155,94,.8))",
      "drop-shadow(0 0 8px rgba(193,155,94,.3))",
    ],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative w-[420px] h-[280px] md:w-[520px] md:h-[260px]"
>


    <div
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 h-[190px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(242,197,111,.34)_0%,_rgba(199,154,75,.12)_42%,_transparent_72%)] blur-xl pointer-events-none"
    />

    <motion.div
      aria-hidden="true"
      animate={{ rotate: 360 }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute left-1/2 top-1/2 h-[210px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F2C56F]/25 shadow-[0_0_35px_rgba(242,197,111,.18)] pointer-events-none"
    />

    <motion.div
      aria-hidden="true"
      animate={{ rotate: -360 }}
      transition={{
        duration: 28,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute left-1/2 top-1/2 h-[155px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#D4A65A]/25 pointer-events-none"
    >
      <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#F2C56F] shadow-[0_0_14px_rgba(242,197,111,.85)]" />
      <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#D4A65A] shadow-[0_0_12px_rgba(212,166,90,.75)]" />
      <span className="absolute left-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#D4A65A] shadow-[0_0_12px_rgba(212,166,90,.75)]" />
      <span className="absolute right-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#D4A65A] shadow-[0_0_12px_rgba(212,166,90,.75)]" />
    </motion.div>




      <Image
      src="/images/logo.png"   // <-- apna uploaded logo yaha save kar do
      alt="Ancient India"
      fill
      priority
      className="object-contain z-10"
    />
  </motion.div>
</motion.div>







          {/* <p className="text-lg tracking-[0.3em] text-gold font-display uppercase drop-shadow-md"> */}
          {/* <p className="mt-1 text-base md:text-lg tracking-[0.45em] text-gold">  
            Ancient</p> */}
<h1
  className="
    -mt-6
    md:-mt-8
    text-7xl
    md:text-[11rem]
    leading-none
    font-serif
    tracking-[0.08em]
    text-[#C79A4B]
    drop-shadow-[0_0_30px_rgba(199,154,75,.25)]
  "
>
  INDIA
</h1>
          <div className="w-50 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-4"></div>
          {/* <p className="text-sm tracking-[0.2em] text-gray-300 uppercase font-light drop-shadow-lg">Rooted in Tradition. Crafted with Devotion.</p> */}
        
        <p className="mt-6 text-xs md:text-sm tracking-[0.28em] text-gold-light uppercase">
  Complete Pooja Essentials <span className="mx-2 text-gold/60">&bull;</span> Pure Fragrance <span className="mx-2 text-gold/60">&bull;</span> Sacred Rituals
</p>

<div className="mt-8 max-w-4xl mx-auto rounded-2xl border border-white/10 bg-black/25 px-5 py-6 md:px-10 md:py-8 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,.35)]">
  <p className="text-gray-200 leading-8 text-base md:text-lg font-light">
    Bring home thoughtfully prepared pooja samagri for daily worship, festivals
    and sacred ceremonies. Our collection includes premium dhoop, agarbatti,
    havan essentials, kapoor, diya items, kumkum, chandan, kalawa, rudraksha
    mala and devotional accessories, chosen to keep every ritual pure, peaceful
    and full of divine fragrance.
  </p>

  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
    {poojaCategories.map((item) => (
      <div
        key={item}
        className="rounded-full border border-gold/25 bg-white/5 px-4 py-2 text-[11px] md:text-xs tracking-[0.12em] text-gold-light uppercase shadow-[inset_0_0_18px_rgba(212,166,90,.08)]"
      >
        {item}
      </div>
    ))}
  </div>
</div>





<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: .97 }}
  className="
    mt-10
    px-10
    py-4
    rounded-full
    bg-gradient-to-r
    from-[#d4a65a]
    to-[#f2c56f]
    text-black
    font-semibold
    tracking-widest
    shadow-[0_0_35px_rgba(212,166,90,.35)]
  "
>
  Explore Divine Collection
</motion.button>









        
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16 items-center relative">

          {/* LEFT: Text & CTA */}
          <motion.div {...fadeInUp} className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <div className="w-8 h-[1px] bg-gold mx-auto lg:mx-0 opacity-70"></div>
            <p className="text-xs tracking-[0.2em] text-gold uppercase font-bold drop-shadow-md">Premium Dhoop</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight drop-shadow-xl">
              Crafted with <br />
              <span className="text-gold">Devotion</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed font-light max-w-md mx-auto lg:mx-0 drop-shadow-md">
              Experience the purity of ancient traditions with our handcrafted Dhoop and spiritual offerings. Made from the finest natural ingredients.
            </p>
            <button className="mt-4 px-8 py-3.5 bg-black/40 backdrop-blur-md border border-gold/50 text-gold text-xs tracking-widest uppercase transition-all hover:bg-gold hover:text-black hover:shadow-[0_0_20px_rgba(193,155,94,0.3)] rounded-sm">
              Discover Our Promise &rarr;
            </button>
          </motion.div>

          {/* CENTER: Galaxy Product Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative flex justify-center items-center min-h-[360px] md:min-h-[620px] w-full"
          >
            {/* <DhoopAnimation /> */}
          </motion.div>

          {/* RIGHT: Timer Box (GLASSMORPHISM) */}
          <motion.div {...fadeInUp} className="order-3 lg:order-3 flex justify-center lg:justify-end">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)] p-8 md:p-10 rounded-2xl w-full max-w-[340px] text-center relative overflow-hidden">
              {/* Top highlight line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>

              <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center text-gold mx-auto mb-4 shadow-[0_0_15px_rgba(193,155,94,0.1)]">
                <FaGem className="text-base" />
              </div>
              <h3 className="text-[10px] tracking-widest text-gray-300 uppercase mb-2">We Are Coming Soon</h3>
              <Timer />
              <p className="text-[10px] text-gray-400 mt-6 leading-relaxed font-light">
                Something divine is on the way.<br /> Stay connected for early access.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= FEATURE HIGHLIGHTS (GLASS CARDS) ================= */}
      <section className="relative z-10 container mx-auto px-4 py-16 border-t border-white/5">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl hover:border-gold/30 hover:bg-white/10 transition-all duration-300 shadow-xl shadow-black/20 group"
            >
              <div className="w-14 h-14 border border-gold/20 rounded-full flex items-center justify-center text-gold mb-4 text-xl group-hover:shadow-[0_0_20px_rgba(193,155,94,0.2)] transition-all">
                {feat.icon}
              </div>
              <h4 className="text-sm text-gold font-display tracking-widest uppercase">{feat.title}</h4>
              <p className="text-[10px] text-gray-400 mt-1">{feat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= NEWSLETTER SECTION (PREMIUM GLASS) ================= */}
      <section className="relative z-10 container mx-auto px-4 pb-24">
        <motion.div {...fadeInUp} className="relative bg-gradient-to-br from-black/40 to-black/10 backdrop-blur-xl border border-white/5 shadow-2xl shadow-black/40 rounded-2xl p-8 md:p-16 overflow-hidden">

          {/* Background decorative glow for newsletter */}
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Background Image */}
          <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 mix-blend-overlay pointer-events-none">
            <Image
              src="/images/dhoop-cone-luxury.png"
              alt="Premium dhoop cone detail"
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center text-center relative z-10 max-w-xl mx-auto">
            <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-4"></div>
            <p className="text-[10px] tracking-[0.2em] text-gold uppercase">Be The First To Know</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-2 mb-2 drop-shadow-lg">
              Join Our <span className="text-gold">Sacred</span> Circle
            </h2>
            <p className="text-sm text-gray-300 mb-8 font-light">Subscribe for exclusive updates, early access and special offers.</p>

            <form className="w-full flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-black/40 backdrop-blur-sm border border-white/10 px-6 py-4 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors shadow-inner"
                />
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-gold to-amber-600 text-black text-xs font-bold tracking-widest uppercase rounded-lg hover:shadow-[0_0_30px_rgba(193,155,94,0.4)] transition-all transform hover:scale-105">
                Notify Me
              </button>
            </form>

            <div className="flex items-center gap-2 mt-6 text-[10px] text-gray-400">
              <FaLock className="text-xs text-gold/50" />
              <span>We respect your privacy. No spam, ever.</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      {/* <footer className="relative z-10 flex flex-col md:flex-row justify-between items-center px-8 py-6 text-[10px] text-gray-500 border-t border-white/5 gap-4"> */}

      <footer
        className="
    relative
    z-20
    flex
    flex-col
    md:flex-row
    justify-between
    items-center
    px-8
    py-8
    gap-4

    bg-black/5
    backdrop-blur-sm

    border-t border-white/10
  "
      >

        <div className="flex items-center gap-2">
          <GiLotus className="text-gold/70 text-lg" />
          <span className="text-gold/40 text-[8px]">AI</span>
        </div>
        <p className="tracking-wider">&copy; 2024 Ancient India. All Rights Reserved.</p>
        <div className="flex gap-6 tracking-wider">
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
