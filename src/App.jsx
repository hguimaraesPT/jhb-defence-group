import React from "react";
import { Shield, Globe2, PackageCheck, Network, Crosshair, Factory, FileCheck2, ArrowRight, Mail, MapPin, LockKeyhole, Truck, Layers3, Phone } from "lucide-react";
import { motion } from "framer-motion";

const heroDefenseImage = new URL('/images/hero-defense.jpg', import.meta.url).href;
const tacticalEquipmentImage = new URL('/images/tactical-equipment.jpg', import.meta.url).href;
const productionNetworkImage = new URL('/images/production-network.jpg', import.meta.url).href;
const ppeSupplyImage = new URL('/images/ppe-supply.jpg', import.meta.url).href;
const technicalWorkwearImage = new URL('/images/technical-workwear.jpg', import.meta.url).href;

function JHBLogo({ compact = false }) {
  return (
    <div className="flex items-center gap-5">
      <svg
        width={compact ? "54" : "76"}
        height={compact ? "54" : "76"}
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="JHB Defense Group logo"
        className="shrink-0 drop-shadow-xl"
      >
        <defs>
          <linearGradient id="jhbOlive" x1="15" y1="110" x2="67" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#39402F" />
            <stop offset="1" stopColor="#7B8452" />
          </linearGradient>
          <linearGradient id="jhbSand" x1="124" y1="110" x2="72" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8D7A55" />
            <stop offset="1" stopColor="#D1B67A" />
          </linearGradient>
          <linearGradient id="jhbBase" x1="24" y1="118" x2="116" y2="118" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D8CCB8" />
            <stop offset="0.5" stopColor="#F2E9D8" />
            <stop offset="1" stopColor="#BCA06A" />
          </linearGradient>
        </defs>

        <path d="M70 7L126 118L78 86L70 7Z" fill="url(#jhbSand)" />
        <path d="M70 7L14 118L62 86L70 7Z" fill="url(#jhbOlive)" />
        <path d="M70 39L112 118L78 86L70 39Z" fill="#0E100E" />
        <path d="M70 39L28 118L62 86L70 39Z" fill="#111411" />
        <path d="M62 86H78L70 126L62 86Z" fill="url(#jhbBase)" />
        <path d="M16 118L62 86H78L124 118L70 126L16 118Z" fill="none" stroke="#D8CCB8" strokeWidth="2.2" strokeLinejoin="round" opacity="0.75" />
        <path d="M70 7L126 118L78 86M70 7L14 118L62 86M62 86H78L70 126L62 86Z" stroke="#080A08" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M70 7V39" stroke="#F4F1E8" strokeWidth="1.5" opacity="0.35" />
      </svg>

      {!compact && (
        <div className="leading-none">
          <div className="font-black tracking-[0.16em] text-3xl md:text-4xl text-[#F4F1E8] drop-shadow-sm">JHB</div>
          <div className="font-extrabold tracking-[0.18em] text-sm md:text-lg text-[#6F7648] uppercase mt-2">Defense Group</div>
          <div className="h-px w-full bg-[#C3A36B] mt-2 mb-2 opacity-70" />
          <div className="text-[10px] md:text-xs text-[#C9C2B4] uppercase tracking-[0.34em]">Integrated Supply Solutions</div>
        </div>
      )}
    </div>
  );
}

export default function JHBDefenseGroupWebsite() {
  const capabilities = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Defense & Security Equipment",
      text: "Integrated sourcing and supply of military, police and security equipment through a trusted network of specialised manufacturing partners.",
      image: tacticalEquipmentImage,
      imageAlt: "Tactical equipment and defense gear"
    },
    {
      icon: <Factory className="w-7 h-7" />,
      title: "Multi-Partner Production Network",
      text: "Access to qualified manufacturers across technical textiles, tactical apparel, PPE, accessories, ballistic-related components and operational gear.",
      image: productionNetworkImage,
      imageAlt: "Integrated production network for defense supply"
    },
    {
      icon: <PackageCheck className="w-7 h-7" />,
      title: "Turnkey Supply Solutions",
      text: "From product development and sampling to production coordination, quality control, documentation, packing and delivery management.",
      image: ppeSupplyImage,
      imageAlt: "Protective equipment and supply chain coordination"
    },
    {
      icon: <FileCheck2 className="w-7 h-7" />,
      title: "Tender & Procurement Support",
      text: "Support for public tenders, framework agreements, technical specifications, sample development and compliance-driven supply programmes.",
      image: technicalWorkwearImage,
      imageAlt: "Technical workwear for defense and security operations"
    }
  ];

  const sectors = [
    "Military Forces",
    "Law Enforcement",
    "Civil Protection",
    "Border & Security Agencies",
    "Private Security Operators",
    "Industrial & Critical Infrastructure",
    "Emergency Response Units",
    "Defense Contractors"
  ];

  const productAreas = [
    "Technical workwear and uniforms",
    "Tactical clothing and accessories",
    "PPE and protective clothing",
    "Ballistic-related soft goods and carriers",
    "Load-bearing and operational equipment",
    "Footwear, gloves and head protection",
    "High-visibility and flame-resistant garments",
    "Custom kits and agency-specific solutions"
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#182318] text-[#F7F2E8] font-sans selection:bg-[#C3A36B] selection:text-[#0D0F0D]">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#25372B]/90 border-b border-[#4B5A43]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <JHBLogo />
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#D5CDBF]">
            <a href="#about" className="hover:text-[#C3A36B] transition">About</a>
            <a href="#capabilities" className="hover:text-[#C3A36B] transition">Capabilities</a>
            <a href="#sectors" className="hover:text-[#C3A36B] transition">Sectors</a>
            <a href="#contact" className="hover:text-[#C3A36B] transition">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#C3A36B] text-[#0D0F0D] px-5 py-2 font-semibold text-sm hover:bg-[#D8CCB8] transition">
            Start a Project <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#253829_0%,#2f3d2f_48%,#3f4b39_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,163,107,0.20),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(111,118,72,0.22),transparent_32%)]" />
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#3F4736] px-4 py-2 text-sm text-[#D5CDBF] mb-8 bg-[#233428]/70">
                <LockKeyhole className="w-4 h-4 text-[#C3A36B]" /> Defense · Security · Technical Supply
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-8 text-[#F4F1E8]">
                Turnkey supply solutions for defense, security and operational environments.
              </h1>
              <p className="text-lg md:text-xl text-[#D5CDBF] leading-relaxed max-w-2xl mb-10">
                JHB Defense Group is an international supply and integration platform connecting public and private clients with specialised production partners for technical workwear, tactical equipment, PPE and mission-ready solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#capabilities" className="inline-flex justify-center items-center gap-2 rounded-full bg-[#C3A36B] text-[#0D0F0D] px-7 py-4 font-bold hover:bg-[#D8CCB8] transition shadow-lg shadow-black/20">
                  Explore Capabilities <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#contact" className="inline-flex justify-center items-center gap-2 rounded-full border border-[#3F4736] px-7 py-4 font-bold text-[#F4F1E8] hover:border-[#C3A36B] transition">
                  Contact Us
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
              <div className="absolute -inset-4 bg-[#C3A36B]/10 blur-3xl rounded-[3rem]" />
              <div className="relative rounded-[2rem] border border-[#2D3328] bg-[#223029]/82 p-6 shadow-2xl">
                <img
                  src={heroDefenseImage}
                  alt="Military defense supply and tactical equipment"
                  className="w-full h-[420px] rounded-[1.75rem] object-cover border border-[#2D3328]"
                />
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {[
                    { icon: <Network />, title: "Global reach" },
                    { icon: <Crosshair />, title: "Operational focus" },
                    { icon: <Truck />, title: "Reliable delivery" },
                    { icon: <Layers3 />, title: "Integrated supply" }
                  ].map((item, i) => (
                    <div key={i} className="rounded-3xl bg-[#17291E] border border-[#2D3328] p-5 flex flex-col justify-between hover:border-[#C3A36B]/60 transition">
                      <div className="text-[#C3A36B]">{React.cloneElement(item.icon, { className: "w-8 h-8" })}</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-[#F4F1E8]">{item.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="border-y border-[#2D3328] bg-[#26362a]/75">
          <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-5 text-[#F4F1E8]">Built as an integrator, not just a supplier.</h2>
              <p className="text-[#A8A090] leading-relaxed">
                We operate as a strategic bridge between clients, manufacturers, certification routes and supply-chain partners.
              </p>
            </div>
            <div className="lg:col-span-2 text-lg text-[#D5CDBF] leading-relaxed space-y-5">
              <p>
                JHB Defense Group was created to deliver complete, reliable and scalable supply solutions for organisations operating in demanding environments. Our model is based on a curated network of production partners, technical manufacturers and specialist suppliers, enabling us to build tailored supply programmes around each client’s operational, technical and procurement requirements.
              </p>
              <p>
                Whether supporting confirmed production orders, tender-stage samples, framework supply agreements or agency-specific equipment kits, we coordinate the full process with a clear focus on quality, responsiveness, confidentiality and long-term reliability.
              </p>
            </div>
          </div>
        </section>

        <section id="capabilities" className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-14">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-[#F4F1E8]">Core capabilities</h2>
            <p className="text-[#A8A090] text-lg leading-relaxed">
              A flexible operating model designed for complex supply needs across defense, police, protection and industrial technical equipment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, i) => (
              <div key={i} className="rounded-[1.75rem] border border-[#2D3328] bg-[#25322a] p-6 hover:bg-[#2d3b2f] hover:border-[#C3A36B]/60 transition min-h-[340px]">
                <img src={item.image} alt={item.imageAlt} className="w-full h-40 rounded-3xl object-cover border border-[#2D3328] mb-5" />
                <div className="mb-6 text-[#C3A36B]">{item.icon}</div>
                <h3 className="font-bold text-xl mb-4 text-[#F4F1E8]">{item.title}</h3>
                <p className="text-[#A8A090] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#E8E2D3] text-[#0D0F0D]">
          <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Product areas</h2>
              <p className="text-[#4C4A40] text-lg leading-relaxed mb-8">
                We support a broad range of technical and operational product categories, combining sourcing, development and production coordination through specialised partners.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {productAreas.map((area, i) => (
                  <div key={i} className="rounded-2xl bg-[#F4F1E8] border border-[#C9C2B4] px-4 py-4 font-semibold text-sm">
                    {area}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-[#1D2B20] text-[#F4F1E8] p-8 flex flex-col justify-between min-h-[500px] shadow-2xl">
              <div>
                <Globe2 className="w-10 h-10 mb-8 text-[#C3A36B]" />
                <h3 className="text-3xl font-black mb-5">From requirement to delivery.</h3>
                <p className="text-[#D5CDBF] leading-relaxed text-lg">
                  Our approach is built around operational understanding, supplier coordination and practical delivery. We help transform technical requirements into viable supply programmes, supported by the right partners, documentation and production strategy.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-10 text-sm">
                {["Requirement analysis", "Partner selection", "Sampling & validation", "Production & delivery"].map((step, i) => (
                  <div key={step} className="rounded-2xl bg-[#24342a] border border-[#2D3328] p-4">
                    <div className="text-3xl font-black text-[#C3A36B]">0{i + 1}</div>
                    <div className="text-[#A8A090] mt-2">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sectors" className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-[#F4F1E8]">Sectors we serve</h2>
              <p className="text-[#A8A090] text-lg leading-relaxed">
                JHB Defense Group supports organisations where equipment reliability, compliance and delivery discipline are critical to operational readiness.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {sectors.map((sector, i) => (
                <div key={i} className="rounded-2xl border border-[#2D3328] bg-[#25352c] px-5 py-5 font-semibold text-[#F4F1E8] hover:border-[#C3A36B]/60 transition">
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#2D3328] bg-[#26362a]/75">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-[#F4F1E8]">Confidentiality, discretion and operational trust.</h2>
              <p className="text-[#D5CDBF] text-lg leading-relaxed">
                We understand that defense and security supply projects often involve sensitive specifications, restricted requirements, agency-specific configurations and strict commercial confidentiality. Our project approach is designed to support NDA-based discussions, controlled information exchange and disciplined partner coordination.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
          <div className="rounded-[2rem] bg-[#E8E2D3] text-[#0D0F0D] p-8 md:p-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Let’s discuss your supply requirements.</h2>
              <p className="text-[#4C4A40] text-lg leading-relaxed mb-8">
                Contact JHB Defense Group for production partnerships, tender support, technical sourcing, agency-specific equipment programmes or turnkey supply solutions.
              </p>
              <div className="space-y-4 text-[#4C4A40]">
                <div>
                  JHB Defense is part of VDS Capital LTD, headquartered in Braga, Portugal, operating internationally in the fields of defense, protection systems, and strategic solutions.
                </div>
                <div className="flex items-center gap-3"><Mail className="w-5 h-5" /> contact@jhbdefensegroup.com</div>
                <div className="flex items-center gap-3"><Phone className="w-5 h-5" /> +351 910 197 087</div>
                <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /> Europe-based · International supply network</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#2D3328]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid gap-4 text-sm text-[#827B6E]">
          <div>
            © {currentYear} JHB Defense Group. All rights reserved.
          </div>
          <div>
            JHB Defense is part of VDS Capital LTD, headquartered in Braga, Portugal, operating internationally in the fields of defense, protection systems, and strategic solutions.
          </div>
          <div>Defense · Security · Technical Workwear · PPE · Operational Equipment</div>
        </div>
      </footer>
    </div>
  );
}
