"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaLock, FaLeaf, FaHands, FaGem } from "react-icons/fa";
import { GiCandleLight, GiFireBowl, GiIncense, GiLotus, GiPowderBag, GiPrayerBeads, GiTiedScroll } from "react-icons/gi";
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
  { title: "Dhoop & Agarbatti", sub: "Temple-grade fragrance", icon: <GiIncense /> },
  { title: "Havan Samagri", sub: "Sacred herbal blends", icon: <GiFireBowl /> },
  { title: "Kapoor & Ghee Diya", sub: "Pure ritual flame", icon: <GiCandleLight /> },
  { title: "Kumkum & Chandan", sub: "Tilak essentials", icon: <GiPowderBag /> },
  { title: "Rudraksha & Mala", sub: "For jap and devotion", icon: <GiPrayerBeads /> },
  { title: "Kalawa & Pooja Cloth", sub: "Complete ceremony set", icon: <GiTiedScroll /> },
];

const launchHighlights = [
  "Handpicked pooja samagri",
  "Natural fragrance blends",
  "Packed for home and temple rituals",
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
        
        <p className="mt-5 text-[11px] md:text-xs tracking-[0.32em] text-gold-light uppercase drop-shadow-[0_0_18px_rgba(242,197,111,.24)]">
  Launching Soon <span className="mx-2 text-gold/60">&bull;</span> Complete Pooja Essentials <span className="mx-2 text-gold/60">&bull;</span> Early Access
</p>

<div className="mt-7 max-w-5xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-b from-black/35 to-black/15 px-5 py-6 md:px-8 md:py-7 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,.38)]">
  <p className="mx-auto max-w-4xl text-gray-300 leading-8 text-[15px] md:text-lg font-light tracking-[0.01em]">
    Our online pooja samagri store is getting ready to open soon. We are
    curating premium dhoop, agarbatti, havan essentials, kapoor, diya items,
    kumkum, chandan, kalawa, rudraksha mala and devotional accessories for
    daily worship, festive rituals and sacred ceremonies.
  </p>

  <div className="mt-6 grid grid-cols-2 lg:grid-cols-6 gap-3">
    {poojaCategories.map((item) => (
      <div
        key={item.title}
        className="group rounded-xl border border-gold/20 bg-[#1d1308]/55 px-3 py-4 text-center shadow-[inset_0_0_22px_rgba(212,166,90,.08),0_10px_28px_rgba(0,0,0,.18)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-[#2a1a0b]/70"
      >
        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-2xl text-[#F2C56F] shadow-[0_0_18px_rgba(242,197,111,.14)] transition-transform duration-300 group-hover:scale-110">
          {item.icon}
        </div>
        <h3 className="font-serif text-[12px] leading-snug text-gold-light">
          {item.title}
        </h3>
        <p className="mt-1 text-[10px] leading-4 text-gray-400">
          {item.sub}
        </p>
      </div>
    ))}
  </div>
</div>





<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: .97 }}
  className="
    mt-8
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
  Notify Me For Launch
</motion.button>









        
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/20 via-[#1b1008]/18 to-black/10 p-5 shadow-[0_24px_80px_rgba(0,0,0,.34)] backdrop-blur-[2px] md:p-8"
        >
          <div className="absolute inset-x-10 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div className="text-center lg:text-left">
              <div className="mx-auto mb-5 flex w-fit items-center gap-3 rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-light lg:mx-0">
                <GiIncense className="text-lg" />
                Premium Ritual Collection
              </div>

              <h2 className="font-serif text-4xl leading-tight text-white drop-shadow-xl md:text-6xl">
                Crafted for daily <span className="text-[#D4A65A]">devotion</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-base lg:mx-0">
                From morning aarti to festive havan, every product is selected
                to make worship simple, pure and beautifully fragrant. Explore
                essentials made for homes, temples and gifting.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {launchHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-xs leading-5 text-gray-200 backdrop-blur-[1px]"
                  >
                    <span className="mb-2 block h-1.5 w-1.5 rounded-full bg-[#F2C56F] shadow-[0_0_12px_rgba(242,197,111,.8)]" />
                    {item}
                  </div>
                ))}
              </div>

              <button className="mt-7 rounded-full border border-gold/45 bg-black/15 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light backdrop-blur-[1px] transition-all hover:bg-gold hover:text-black hover:shadow-[0_0_28px_rgba(212,166,90,.32)]">
                Discover Our Promise &rarr;
              </button>
            </div>

            <div className="relative mx-auto w-full max-w-[430px]">
              <div className="absolute inset-6 rounded-full bg-gold/6 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-black/22 p-7 text-center shadow-[inset_0_0_45px_rgba(212,166,90,.05),0_18px_55px_rgba(0,0,0,.32)] backdrop-blur-[2px] md:p-9">
                <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold shadow-[0_0_26px_rgba(193,155,94,.16)]">
                  <FaGem className="text-base" />
                </div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-300">
                  Website Launching Soon
                </h3>
                <Timer />
                <p className="mt-6 text-xs leading-6 text-gray-400">
                  The complete Ancient India pooja samagri store is almost
                  ready. Join the waitlist for first access and launch offers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
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
          <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none">
            <Image
              src="/images/dhoop-cone-luxury.png"
              alt="Premium dhoop cone detail"
              fill
              sizes="256px"
              className="object-cover opacity-20 mix-blend-overlay"
            />
            <div className="smoke-stack">
              <span className="smoke-thread smoke-thread-one" />
              <span className="smoke-thread smoke-thread-two" />
              <span className="smoke-thread smoke-thread-three" />
              <span className="smoke-thread smoke-thread-four" />
              <span className="smoke-thread smoke-thread-five" />
              <span className="smoke-haze" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none">
            <Image
              src="/images/dhoop-cone-luxury.png"
              alt="Premium dhoop cone detail"
              fill
              sizes="256px"
              className="scale-x-[-1] object-cover opacity-20 mix-blend-overlay"
            />
            <div className="smoke-stack smoke-stack-right">
              <span className="smoke-thread smoke-thread-one" />
              <span className="smoke-thread smoke-thread-two" />
              <span className="smoke-thread smoke-thread-three" />
              <span className="smoke-thread smoke-thread-four" />
              <span className="smoke-thread smoke-thread-five" />
              <span className="smoke-haze" />
            </div>
          </div>

          <div className="flex flex-col items-center text-center relative z-10 max-w-xl mx-auto">
            <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-4"></div>
            <p className="text-[15px] tracking-[0.2em] text-gold uppercase">Coming Soon</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-2 mb-2 drop-shadow-lg">
              Get Early <span className="text-gold">Launch</span> Access
            </h2>
            <p className="text-sm text-gray-300 mb-8 font-light">Subscribe to know when our pooja samagri collection goes live.</p>

            <form className="w-full flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-black/10 backdrop-blur-sm border border-white/10 px-6 py-4 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors shadow-inner"
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

          <style jsx>{`
            .smoke-stack {
              position: absolute;
  left: 50%;
  bottom: 125px;

  width: 70px;
  height: 220px;

  transform: translateX(-50%);

  pointer-events: none;
              width: 56px;
              height: 178px;
              mix-blend-mode: screen;
              opacity: 0.95;
            }

           .smoke-stack-right{
    left:50%;
    right:auto;
    transform:translateX(-50%) scaleX(-1);
}

            .smoke-stack::before {
              content: "";
              position: absolute;
              left: 50%;
             content:"";
    position:absolute;

    left:50%;
    bottom:0;

    width:6px;
    height:6px;

    transform:translateX(-50%);

    border-radius:50%;

    background:rgba(255,220,180,.9);

    filter:blur(3px);

    box-shadow:
        0 0 8px rgba(255,180,80,.8),
        0 0 18px rgba(255,140,0,.5);

              border-radius: 9999px;
              background: rgba(255, 235, 201, 0.42);
              filter: blur(5px);
              transform: translateX(-50%);
            }

            .smoke-thread,
            .smoke-haze {
              position: absolute;
              left: 50%;
              bottom: 0;
              border-radius: 9999px;
              opacity: 0;
              transform-origin: bottom center;
            }

            .smoke-thread {
              width: 7px;
              height: 104px;
              background:
                radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.72), transparent 24%),
                linear-gradient(
                  to top,
                  rgba(255, 244, 222, 0),
                  rgba(255, 244, 222, 0.62) 20%,
                  rgba(255, 255, 255, 0.22) 62%,
                  rgba(255, 255, 255, 0)
                );
              filter: blur(6px);
              animation: smokeThread 8.4s ease-in-out infinite;
            }

            .smoke-thread-one {
              margin-left: -4px;
              animation-delay: -0.9s;
            }

            .smoke-thread-two {
              width: 10px;
              height: 126px;
              margin-left: 2px;
              filter: blur(7px);
              animation-delay: -2.8s;
              animation-duration: 9.8s;
            }

            .smoke-thread-three {
              width: 6px;
              height: 92px;
              margin-left: -9px;
              filter: blur(5px);
              animation-delay: -4.5s;
              animation-duration: 7.4s;
            }

            .smoke-thread-four {
              width: 12px;
              height: 138px;
              margin-left: 8px;
              filter: blur(9px);
              animation-delay: -6.1s;
              animation-duration: 11s;
            }

            .smoke-thread-five {
              width: 5px;
              height: 112px;
              margin-left: -1px;
              filter: blur(5px);
              animation-delay: -7.4s;
              animation-duration: 9.4s;
            }

            .smoke-haze {
bottom:20px;            
 width:26px;
height:26px;
              margin-left: -27px;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(255, 255, 255, 0.16), transparent 70%);
              filter: blur(16px);
              animation: smokeHaze 9s ease-in-out infinite;
            }

            @keyframes smokeThread{

0%{
opacity:0;
transform:
translateX(0)
translateY(0)
scale(.25);
}

15%{
opacity:.85;
transform:
translateX(2px)
translateY(-25px)
scale(.45);
}

40%{
opacity:.6;
transform:
translateX(-4px)
translateY(-70px)
scale(.8);
}

70%{
opacity:.3;
transform:
translateX(5px)
translateY(-135px)
scale(1.2);
}

100%{
opacity:0;
transform:
translateX(-2px)
translateY(-205px)
scale(1.8);
}

}

            @keyframes smokeHaze {
              0%,
              100% {
                opacity: 0.08;
                transform: translate3d(0, 12px, 0) scale(0.9);
              }
              45% {
                opacity: 0.22;
                transform: translate3d(8px, -34px, 0) scale(1.16);
              }
            }
          `}</style>





          
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
          {/* <span className="text-gold/40 text-[8px]">AI</span> */}
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
