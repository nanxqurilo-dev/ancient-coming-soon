"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaLock, FaLeaf, FaHands, FaGem, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
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

const productShowcase = [
  {
    name: "Rose Dhoop Stick",
    note: "Rose Fragrance",
    src: "/images/products/agarbatti-rose-premium.png",
  },
  {
    name: "Sandalwood Dhoop Stick",
    note: "Sandalwood Fragrance",
    src: "/images/products/agarbatti-sandalwood-premium.png",
  },
  {
    name: "Natural Dhoop Stick",
    note: "Natural Fragrance",
    src: "/images/products/dhoop-stick-natural.png",
  },
  {
    name: "Mogra Agarbatti",
    note: "Mogra Fragrance",
    src: "/images/products/agarbatti-mogra-premium.png",
  },
  {
    name: "Natural Agarbatti",
    note: "Premium Agarbatti",
    src: "/images/products/agarbatti-natural-premium.png",
  },
  {
    name: "Sandalwood Agarbatti",
    note: "Premium Pack",
    src: "/images/products/agarbatti-sandalwood-tall.png",
  },
  {
    name: "Rose Agarbatti",
    note: "Premium Pack",
    src: "/images/products/agarbatti-rose-tall.png",
  },
  {
    name: "Complete Range",
    note: "Dhoop, Cone & Agarbatti",
    src: "/images/products/ancient-india-product-range.png",
    wide: true,
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [notifyMessage, setNotifyMessage] = useState("");
  const [notifyStatus, setNotifyStatus] = useState<"success" | "error" | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNotifySubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setNotifyMessage("");
    setNotifyStatus("");

    try {
      // const response = await fetch("https://4frnn03l-8002.inc1.devtunnels.ms/api/v1/email/notify", {
      const response = await fetch("https://ancient-india-backend-git-main-kush-qurilos-projects.vercel.app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      const successMessage = result.status === true ? result.message : "";

      setNotifyMessage(successMessage || "Subscribed Successfully");
      setNotifyStatus("success");
      setEmail("");
    } catch {
      setNotifyMessage("Unable to subscribe right now. Please try again.");
      setNotifyStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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





        <div className="absolute inset-0 opacity-100">
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
      className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(242,197,111,.28)_0%,_rgba(199,154,75,.12)_45%,_transparent_72%)] blur-2xl pointer-events-none"
    />

    <motion.div
      aria-hidden="true"
      animate={{ rotate: 360 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F2C56F]/28 shadow-[0_0_34px_rgba(242,197,111,.16)] pointer-events-none"
    />

    <motion.div
      aria-hidden="true"
      animate={{ rotate: -360 }}
      transition={{
        duration: 42,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#D4A65A]/24 pointer-events-none"
    >
      <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#F2C56F] shadow-[0_0_14px_rgba(242,197,111,.8)]" />
      <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#D4A65A] shadow-[0_0_12px_rgba(212,166,90,.7)]" />
    </motion.div>

    <motion.div
      aria-hidden="true"
      animate={{ opacity: [0.28, 0.58, 0.28], scale: [0.96, 1.03, 0.96] }}
      transition={{
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute left-1/2 top-1/2 h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFE3A0]/14 bg-[#D4A65A]/5 shadow-[0_0_36px_rgba(242,197,111,.18)] pointer-events-none"
    />




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
          <div className="w-70 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-4"></div>
          {/* <p className="text-sm tracking-[0.2em] text-gray-300 uppercase font-light drop-shadow-lg">Rooted in Tradition. Crafted with Devotion.</p> */}
        
        <p className="mt-5 text-[11px] md:text-xs tracking-[0.32em] text-gold-light uppercase drop-shadow-[0_0_18px_rgba(242,197,111,.24)]">
  Launching Soon <span className="mx-2 text-gold/60">&bull;</span> Complete Pooja Essentials <span className="mx-2 text-gold/60">&bull;</span> Early Access
</p>

<motion.div
  {...fadeInUp}
  className="relative mt-8 w-full max-w-6xl overflow-hidden rounded-2xl border border-gold/20 bg-black/25 px-4 py-5 shadow-[0_22px_70px_rgba(0,0,0,.34)] backdrop-blur-md md:px-6 md:py-6"
>
  <div className="absolute inset-x-10 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
  <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-rose-500/10 blur-3xl" />
  <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

  <div className="relative flex flex-col items-center justify-between gap-4 md:flex-row">
    <div className="text-center md:text-left">
      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-light">
        Product Collection Launching Soon
      </p>
      <h2 className="mt-2 font-serif text-2xl leading-tight text-white md:text-4xl">
        Dhoop, Agarbatti & Fragrance Essentials
      </h2>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-200">
      <span className="rounded-full border border-rose-300/30 bg-rose-400/10 px-3 py-2">Rose</span>
      <span className="rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-2">Sandalwood</span>
      <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-2">Natural</span>
      <span className="rounded-full border border-white/20 bg-white/5 px-3 py-2">Mogra</span>
    </div>
  </div>

  <div className="product-showcase-mask relative mt-6 overflow-hidden">
    <div className="product-marquee flex w-max items-end gap-4 md:gap-6">
      {[...productShowcase, ...productShowcase].map((product, index) => (
        <div
          key={`${product.name}-${index}`}
          className={`product-tile group relative flex shrink-0 flex-col justify-end overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[.08] to-black/20 shadow-[0_18px_42px_rgba(0,0,0,.28)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 ${
            product.wide ? "w-[240px] md:w-[330px]" : "w-[132px] md:w-[168px]"
          } h-[196px] md:h-[238px]`}
        >
          <div className="absolute inset-x-2 top-2 bottom-12">
            <Image
              src={product.src}
              alt={product.name}
              fill
              sizes={product.wide ? "(max-width: 768px) 240px, 330px" : "(max-width: 768px) 132px, 168px"}
              className="object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,.5)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="relative z-10 border-t border-white/10 bg-black/35 px-3 py-2 text-left backdrop-blur-sm">
            <p className="truncate text-[11px] font-semibold text-white">{product.name}</p>
            <p className="mt-0.5 truncate text-[9px] uppercase tracking-[0.18em] text-gold-light/80">{product.note}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <p className="relative mt-5 text-[11px] uppercase tracking-[0.24em] text-gray-300">
    Incense sticks <span className="mx-2 text-gold/60">&bull;</span> Dry dhoop cones <span className="mx-2 text-gold/60">&bull;</span> Ritual fragrance range
  </p>
</motion.div>

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

            <form onSubmit={handleNotifySubmit} className="w-full flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="notify-email-input w-full bg-black/10 backdrop-blur-sm border border-white/10 px-6 py-4 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors shadow-inner"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-gradient-to-r from-gold to-amber-600 text-black text-xs font-bold tracking-widest uppercase rounded-lg hover:shadow-[0_0_30px_rgba(193,155,94,0.4)] transition-all transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? "Submitting..." : "Notify Me"}
              </button>
            </form>
            {notifyMessage && (
              <p
                className={`mt-4 text-xs font-medium ${
                  notifyStatus === "success" ? "text-gold-light" : "text-red-300"
                }`}
              >
                {notifyMessage}
              </p>
            )}

            <div className="flex items-center gap-2 mt-6 text-[10px] text-gray-400">
              <FaLock className="text-xs text-gold/50" />
              <span>We respect your privacy. No spam, ever.</span>
            </div>

            <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-gold/20 bg-black/15 px-5 py-4 text-xs text-gray-300 backdrop-blur-sm sm:flex-row sm:gap-6">
              <span className="font-semibold uppercase tracking-[0.22em] text-gold-light">
                Contact Us
              </span>
              <a
                href="tel:+919289910711"
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <FaPhoneAlt className="text-gold/70" />
                +91 92899 10711
              </a>
              <a
                href="mailto:care@ancientindia.co"
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <FaEnvelope className="text-gold/70" />
                care@ancientindia.co
              </a>
            </div>
          </div>

          <style jsx>{`
            :global(.notify-email-input:-webkit-autofill),
            :global(.notify-email-input:-webkit-autofill:hover),
            :global(.notify-email-input:-webkit-autofill:focus) {
              -webkit-text-fill-color: #ffffff;
              caret-color: #ffffff;
              box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.42) inset;
              transition: background-color 9999s ease-in-out 0s;
            }

            .product-showcase-mask::before,
            .product-showcase-mask::after {
              content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              z-index: 20;
              width: 54px;
              pointer-events: none;
            }

            .product-showcase-mask::before {
              left: 0;
              background: linear-gradient(to right, rgba(8, 4, 2, 0.96), transparent);
            }

            .product-showcase-mask::after {
              right: 0;
              background: linear-gradient(to left, rgba(8, 4, 2, 0.96), transparent);
            }

            .product-marquee {
              animation: productMarquee 34s linear infinite;
              will-change: transform;
            }

            .product-showcase-mask:hover .product-marquee {
              animation-play-state: paused;
            }

            .product-tile {
              animation: productFloat 5.8s ease-in-out infinite;
            }

            .product-tile:nth-child(2n) {
              animation-delay: -1.4s;
            }

            .product-tile:nth-child(3n) {
              animation-delay: -2.6s;
            }

            @keyframes productMarquee {
              from {
                transform: translate3d(0, 0, 0);
              }

              to {
                transform: translate3d(-50%, 0, 0);
              }
            }

            @keyframes productFloat {
              0%,
              100% {
                transform: translateY(0);
              }

              50% {
                transform: translateY(-8px);
              }
            }

            @media (max-width: 640px) {
              .product-marquee {
                animation-duration: 28s;
              }

              .product-showcase-mask::before,
              .product-showcase-mask::after {
                width: 28px;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .product-marquee,
              .product-tile {
                animation: none;
              }
            }

            .smoke-stack {
              position: absolute;
              left: 50%;
              bottom: 180px; 
              width: 96px;
              height: 230px;
              transform: translateX(-50%);
              pointer-events: none;
              mix-blend-mode: screen;
              opacity: 0.88;
            }

            .smoke-stack-right {
              left: 50%;
              right: auto;
              transform: translateX(-50%) scaleX(-1);
            }

            .smoke-stack::before {
              content: "";
              position: absolute;
              left: 50%;
              bottom: 0;
              width: 12px;
              height: 12px;
              transform: translateX(-50%);
              border-radius: 9999px;
              background: rgba(255, 228, 190, 0.62);
              filter: blur(5px);
              box-shadow:
                0 0 14px rgba(255, 213, 160, 0.58),
                0 0 34px rgba(255, 177, 80, 0.25);
            }

            .smoke-stack::after {
              content: ""; 
              position: absolute;
              left: 50%;
              bottom: 24px;
              width: 68px;
              height: 130px;
              transform: translateX(-50%);
              border-radius: 9999px;
              background:
                radial-gradient(ellipse at 48% 18%, rgba(255, 255, 255, 0.22), transparent 35%),
                radial-gradient(ellipse at 56% 52%, rgba(255, 255, 255, 0.15), transparent 48%),
                radial-gradient(ellipse at 42% 78%, rgba(230, 220, 205, 0.11), transparent 50%);
              filter: blur(18px);
              opacity: 0;
              animation: smokeCloud 8.8s ease-in-out infinite;
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
              width: 18px;
              height: 118px;
              background:
                radial-gradient(ellipse at 50% 12%, rgba(255, 255, 255, 0.48), transparent 34%),
                radial-gradient(ellipse at 58% 44%, rgba(255, 255, 255, 0.22), transparent 48%),
                linear-gradient(
                  to top,
                  rgba(255, 244, 222, 0),
                  rgba(255, 244, 222, 0.24) 24%,
                  rgba(255, 255, 255, 0.18) 58%,
                  rgba(255, 255, 255, 0)
                );
              filter: blur(10px);
              animation: smokeThread 9.4s ease-in-out infinite;
            }

            .smoke-thread-one {
              width: 20px;
              height: 126px;
              margin-left: -12px;
              animation-delay: -1s;
            }

            .smoke-thread-two {
              width: 28px;
              height: 150px;
              margin-left: -1px;
              filter: blur(13px);
              animation-delay: -3.1s;
              animation-duration: 11.2s;
            }

            .smoke-thread-three {
              width: 16px;
              height: 106px;
              margin-left: 12px;
              filter: blur(9px);
              animation-delay: -4.8s;
              animation-duration: 8.6s;
            }

            .smoke-thread-four {
              width: 34px;
              height: 166px;
              margin-left: -20px;
              filter: blur(16px);
              animation-delay: -6.4s;
              animation-duration: 12.4s;
            }

            .smoke-thread-five {
              width: 22px;
              height: 136px;
              margin-left: 18px;
              filter: blur(12px);
              animation-delay: -7.9s;
              animation-duration: 10.6s;
            }

            .smoke-haze {
              bottom: 34px;
              width: 76px;
              height: 82px;
              margin-left: -42px;
              border-radius: 9999px;
              background:
                radial-gradient(ellipse at 35% 35%, rgba(255, 255, 255, 0.2), transparent 52%),
                radial-gradient(ellipse at 68% 62%, rgba(214, 205, 190, 0.12), transparent 58%);
              filter: blur(22px);
              animation: smokeHaze 10.5s ease-in-out infinite;
            }

            @keyframes smokeThread {
              0% {
                opacity: 0;
                transform: translate3d(0, 0, 0) rotate(-2deg) scale(0.22, 0.35);
              }

              14% {
                opacity: 0.5;
                transform: translate3d(5px, -26px, 0) rotate(2deg) scale(0.45, 0.58);
              }

              38% {
                opacity: 0.42;
                transform: translate3d(-9px, -76px, 0) rotate(-5deg) scale(0.86, 0.98);
              }

              66% {
                opacity: 0.24;
                transform: translate3d(11px, -142px, 0) rotate(5deg) scale(1.28, 1.34);
              }

              100% {
                opacity: 0;
                transform: translate3d(-7px, -226px, 0) rotate(-3deg) scale(1.8, 1.76);
              }
            }

            @keyframes smokeCloud {
              0%,
              100% {
                opacity: 0;
                transform: translate3d(-50%, 12px, 0) scale(0.72);
              }

              28% {
                opacity: 0.38;
                transform: translate3d(calc(-50% + 8px), -42px, 0) scale(0.98);
              }

              62% {
                opacity: 0.22;
                transform: translate3d(calc(-50% - 12px), -116px, 0) scale(1.36);
              }
            }

            @keyframes smokeHaze {
              0%,
              100% {
                opacity: 0.04;
                transform: translate3d(0, 16px, 0) scale(0.76);
              }

              35% {
                opacity: 0.22;
                transform: translate3d(12px, -46px, 0) scale(1.14);
              }

              70% {
                opacity: 0.12;
                transform: translate3d(-10px, -112px, 0) scale(1.52);
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
